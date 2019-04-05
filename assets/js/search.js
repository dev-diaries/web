var idx = lunr(function () {
  this.ref('title')
  this.field('excerpt')

  window.documents.forEach(function (doc) {
    this.add(doc)
  }, this)
})
