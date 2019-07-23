---
layout: social-post
type: "SocialPosts"
title: "Behind The Scenes: Edition 2 - Adding Search To A Static Site Part 2"
cover-image: /assets/images/bts-part2-cover-react.png
image: /assets/images/search-in-action.gif
excerpt: "We're continuing our behind the scenes to show how we structured our search using React..."
date: 2019-07-21
categories: [advanced, behind-the-scenes, static-sites, react, javascript, reactjs, search, solr]
instagram-id: B0LOLfgCiA5
docs:
---
{:.center}
# {{ page.title }}

{:.post-content}
This is part two of how we added search to our site. Check [part-1](/social-posts/bts-edition-two-adding-search-part-1/)
to see the Jekyll portion and how we're outputting the documents that we want to index.

{:.post-content}
To actually performed the search we built out a small react component to listen
for search input, take the term, search using lunrjs and display the results
under the search bar. We wrote the
component in Typescript which is something we would hardly ever leave home without 😝.

{:.post-content}
Let's first see it in action:

{:.image .center}
![video-demo]({{page.image}})

{:.post-content}
Let's break it down how we implemented the above:
So first we to create our react element by using our identifier class `.js-search`:

{% highlight js %}
ReactDOM.render(React.createElement(Search), document.getElementsByClassName('js-search')[0]);
{% endhighlight %}

{:.post-content}
Next we need to pull the documents provided by jekyll and put onto the window (as covered by [part 1](/social-posts/bts-edition-two-adding-search-part-1/))
We pull in the documents and then we push them into lunrjs so that it can index
the documents so we can later search based on that index:

{% highlight js %}
const idx = lunr(function () {
  this.ref('index');
  this.field('excerpt');
  this.field('title');
  this.field('categoriesString');

  let index = 0;
  documents.forEach(function(doc: any) {
    doc.index = index;
    this.add(doc);
    index += 1;
  }, this)
});
{% endhighlight %}

{:.post-content}
Now that we have the const idx available we can use that in our component
to seach if a user types something in our search bar. We have an interface
for our search state to help us keep track of the state of our search component:

{% highlight typescript %}
interface SearchState {
  active: boolean;
  searchQuery: string;
  results: any[];
}
{% endhighlight %}

{:.post-content}
We then create our component with some a listener on the document. One thing that
we often talk about is keyboard shortcuts on a website. One implementation on our
search that we have is the ability to initiate a search by simply pressing the "/"
key. So if you land on our website and press "/" it will immediately put our
search bar in focus and you can start typing right away to search. Check the code
with some additional comments:

{% highlight typescript %}
class Search extends React.Component<SearchProps, SearchState> {

  private searchInput: any;
  private setTextInputRef: any;
  private results: any;
  private query: string;
  private setQuery: Function;

  constructor(props: SearchProps) {
    super(props);

    this.searchInput = React.createRef();

    // bind the on document key down to the component so we can access the
    // component methods
    this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);

    // set the initial state before any user interaction
    this.state = {
      active: false,
      searchQuery: '',
      results: [],
    };
  }

...
}
{% endhighlight %}

{:.post-content}
Next we assign some listeners for the document, for the search input

{% highlight js %}
  componentDidMount() {
    document.addEventListener('keydown', this.onDocumentKeyDown);
  }

  onFocus(event: any) {
    this.searchInput.current.value = '';

    this.setState({
      active: true
    });
  }

  onBlur(event: any) {
    this.setState({
      active: false
    });

    // clear search resuls 5 seconds after the user left the search bar
    setTimeout(() => {
      this.setState({
        results: []
      });
    }, 5000);
  }


  // key 191 is / so we can catch any presses to / to make the search input
  // active
  onDocumentKeyDown(e: any) {
    const { active } = this.state;

    switch (e.keyCode) {
      case 191:
        this.focusSearch();
        if (!active) {
          e.preventDefault();
        }
    }
  }

  // if the user presses enter in the search input that should trigger a search
  onKeyDown(e: any) {
    switch (e.keyCode) {
      case 13:
        this.submitSearch(e);
    }
  }
{% endhighlight %}

{:.post-content}
Let's see when those listeners are triggered by checking out how our component is
rendered:

{% highlight js %}
render() {
    const { searchQuery, results } = this.state;

    return (
      <span>
        <input
          type="text"
          name="search"
          placeholder="Search"
          ref={this.searchInput}
          onKeyDown={e => this.onKeyDown(e)}
          onChange={e => this.inputChange(e)}
          onFocus={e => this.onFocus(e)}
          onBlur={e => this.onBlur(e)}
        />
        <i className="fa fa-search icon" onClick={e => this.submitSearch(e)}></i>
        <span>
         <SearchContainer>
          {results.map((result: any) => (
            <li key={result.id}>
              { result.type === SOCIAL_POSTS ?
                <Icon className="fab fa-slideshare social-posts"></Icon>
                :
                <Icon className="fas fa-pen-nib blog"></Icon>
              }
              <ResultItem href={result.link}>{result.title}</ResultItem>
            </li>
          ))}
        </SearchContainer>
        </span>
      </span>
    );
}
{% endhighlight %}

{:.post-content}
As you see we have a few listeners attached to our search input (key down, change, focus, and blur).
On the search submit we have a listener on click of the search submit button. In
the `SearchContainer` styled component we iterate over the results and if it is a social
post we show a certain icon and another if it is not. In the `ResultItem`
we have a link so that on click the user can be taken to the post that they searched for.

{:.post-content}
Let's see how we actually get the results and prepare the results array:

{% highlight js %}
submitSearch(e: any) {
    const { searchQuery } = this.state;
    if (searchQuery !== '') {
      const results = idx.search(searchQuery);
      this.prepResults(results);
    }

    e.preventDefault();
  }

  inputChange(event: any) {
    const { target } = event;

    this.setState({
      searchQuery: target.value,
    });

    this.query = target.value;
  }

  prepResults(rawResults: any) {
    const results = [];

    for (const result of rawResults) {
      // lunrjs gives us back the index of the document so we have to lookup
      // the index number to grab the actual document
      const doc = documents[Number(result.ref)];
      // we don't want too many results to show if there are a lot
      if (results.length === LIMIT) {
        break;
      }
      results.push(doc);
    }

    // this change of state let's react know that it should re-render the DOM
    // so the user can see the results
    this.setState({
      results,
    });
  }
{% endhighlight %}

{:.post-content}
And that's it! This component does a lot and makes for (we hope) a pleasant
search experience 😌. You can check out the entire component in our
Github <a href="https://github.com/dev-diaries/web/blob/master/src/components/search.tsx" target="_blank">here</a>

{% if page.instagram-id %}
{:.center}
<a class="insta-link" href="https://www.instagram.com/p/{{page.instagram-id}}" target="_blank">Instagram Post</a>
{% endif %}
