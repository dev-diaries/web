import * as React from 'react';

interface SearchProps {
}

interface SearchState {
  active: boolean;
}

class Search extends React.Component<SearchProps, SearchState> {

  private searchInput: any;
  private setTextInputRef: any;

  constructor(props: SearchProps) {
    super(props);

    this.searchInput = null;

    this.setTextInputRef = ((el: any) => {
      this.searchInput = el;
    });

    this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);

    this.state = {
      active: false
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onDocumentKeyDown);
  }

  onFocus(e: any) {
    this.setState({
      active: true
    });
  }

  onDocumentKeyDown(e: any) {
    switch (e.keyCode) {
      case 191:
        this.focusSearch();
    }
  }

  onKeyDown(e: any) {
    switch (e.keyCode) {
      case 13:
        this.submitSearch();
    }
  }

  focusSearch() {
    this.searchInput.focus();
    console.log(this.searchInput)
    // if doing this, the slash goes into the text input
  }

  submitSearch() {
    console.log('submit')
  }

  render() {
    return (
      <span>
      <input
        type="text"
        name="search"
        placeholder="Search"
        ref={this.setTextInputRef}
        onFocus={(e) => this.onFocus(e)}
        onKeyDown={(e) => this.onKeyDown(e)}
      />
      <i className="fa fa-search"></i>
      </span>
    );
  }

}
export default Search;
