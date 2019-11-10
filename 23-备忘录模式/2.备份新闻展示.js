function $ (selector) {
  return document.querySelector(selector)
}

const Page = function (page, fn) {
  let cache = {}
  return function (page, fn) {
    if (cache[page]) {
      showPage(page, cache[page])
      fn && fn()
    } else {
      $.post({
        url: './url',
        page: page,
        success: function (res) {
          showPage(page, res.data)
          cache[page] = res.data
          fn && fn()
        }
      })
    }
  }
}

$('#next_page').addEventListener('click', () => {
  let $news = $('#news_contents')
  let page = $news.getAttribute('page')
  Page(page, function () {
    $news.getAttribute('page', page + 1)
  })
})

// 显示某页新闻
function showPage (page, data) {

}
