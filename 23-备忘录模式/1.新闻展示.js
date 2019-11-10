function $ (selector) {
  return document.querySelector(selector)
}

$('#next_page').addEventListener('click', () => {
  let $news = $('#news_contents')
  let page = $news.getAttribute('page')
  getPageData(page, function () {
    $news.getAttribute('page', page + 1)
  })
})

// ajax请求数据
function getPageData (page, fn) {
  $.post({
    url: './url',
    page: page,
    success: function (res) {
      showPage(page, res.data)
      fn && fn()
    }
  })
}
// 显示某页新闻
function showPage (page, data) {

}
