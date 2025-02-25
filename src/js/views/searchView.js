class SearchView {
  _parentEl = document.querySelector('.search');

  // 1) Gets the input
  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  // 2) Clears the search field
  _clearInput() {
    this._parentEl.querySelector('.search__field').value = '';
  }

  //   3) Submits the query
  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
