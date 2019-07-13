import * as React from 'react';
import styled from 'styled-components';

const lunr = require('lunr');

const index = 'DEV-DIARIES';
const { documents } = (window as any);
const SOCIAL_POSTS = 'SocialPosts';
const SOCIAL_PAGE = 'social';
const BLOG_PAGE = 'blog';
const LIMIT = 10;

interface SearchProps {
}

interface SearchState {
  active: boolean;
  searchQuery: string;
  results: any[];
}

const page = window.location.href.split('/')[3] || '';

const idx = lunr(function () {
  this.ref('index');
  this.field('excerpt');
  this.field('title');
  this.field('categories');

  let index = 0;
  documents.forEach(function(doc: any) {
    if (page === SOCIAL_PAGE) {
      if (doc.type === SOCIAL_POSTS) {
        doc.index = index;
        this.add(doc);
        index += 1;
      }
    }
    if (page === BLOG_PAGE) {
      if (doc.type !== SOCIAL_POSTS) {
        doc.index = index;
        this.add(doc);
        index += 1;
      }
    }

    if (page === '') {
      doc.index = index;
      this.add(doc);
      index += 1;
    }
  }, this)
});

const SearchContainer = styled.ul`
  list-style-type: none;
  text-align: left;
  position: relative;
  left: 7em;
  max-height: 100vh;
  @media (max-width: 48em) {
    left: 0;
  }
`;

const ResultItem = styled.a`
  padding-left: 1em;
  top: 0.15em;
  position: relative;
`;

const Icon = styled.i`
  display: inline-block;
`;

class Search extends React.Component<SearchProps, SearchState> {

  private searchInput: any;
  private setTextInputRef: any;
  private results: any;
  private query: string;
  private setQuery: Function;

  constructor(props: SearchProps) {
    super(props);

    this.searchInput = React.createRef();

    this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);

    this.state = {
      active: false,
      searchQuery: '',
      results: [],
    };
  }

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

    setTimeout(() => {
      this.setState({
        results: []
      });
    }, 5000);
  }


  /**
   * On Document Key Down
   * @desc catch a 191 (/) key press and if we're not in the search input
   * prevent that from registering in the search input
   *
   */
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

  onKeyDown(e: any) {
    switch (e.keyCode) {
      case 13:
        this.submitSearch(e);
    }
  }

  focusSearch() {
    this.searchInput.current.focus();
  }

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

  // TODO Interface
  // {ref: "1", score: 3.8537319574666835, matchData: F.MatchData}
  prepResults(rawResults: any) {
    const results = [];

    for (const result of rawResults) {
      const doc = documents[Number(result.ref)];
      if (results.length === LIMIT) {
        break;
      }
      results.push(doc);
    }

    this.setState({
      results,
    });
  }

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

}
export default Search;
