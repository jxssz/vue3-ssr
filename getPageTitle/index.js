export { getPageTitle }

function getPageTitle(pageContext) {
  // console.log(pageContext)
  const title =
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.pageExports.documentProps || {}).title ||
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext.documentProps || {}).title ||
    '热映影视-影视交流-影视分享 - 皮皮虾'

  const description =
    (pageContext.pageExports.documentProps || {}).description ||
    (pageContext.documentProps || {}).description ||
    '最好的迅雷电影下载网,分享最新电影,高清电影、综艺、动漫、电视剧等下载!'

  const keywords =
    (pageContext.pageExports.documentProps || {}).keywords ||
    (pageContext.documentProps || {}).keywords ||
    'dy,dianying,dianshiju,dongman,zongyi,dsj,dm,zy,zongyi,电影天堂,高清首发,电影下载,电影,电视剧，综艺，动漫,影视交流会,品质生活'
  return {
    title: title,
    description: description,
    keywords: keywords
  }
}