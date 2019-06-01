import * as React from 'react';

interface SearchProps {
}

interface SearchState {
  active: boolean;
  searchQuery: string;
}

class Search extends React.Component<SearchProps, SearchState> {

  private searchInput: any;
  private setTextInputRef: any;

  constructor(props: SearchProps) {
    super(props);

    this.searchInput = React.createRef();

    this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);

    this.state = {
      active: false,
      searchQuery: '',
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
    console.log('submit')
    e.preventDefault();
  }

  inputChange(event: any) {
    const target = event.target;

    this.setState({
      searchQuery: target.value,
    });
  }

  render() {
    const { searchQuery } = this.state;

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
      <i className="fa fa-search"></i>
      </span>
    );
  }

}
export default Search;
