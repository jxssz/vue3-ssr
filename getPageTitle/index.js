export { getPageTitle }

function getPageTitle(pageContext) {
  const title =
    (pageContext.pageExports.documentProps || {}).title ||
    (pageContext.documentProps || {}).title ||
    'vite_vue3_ssr_服务端渲染_默认'

  const description =
    (pageContext.pageExports.documentProps || {}).description ||
    (pageContext.documentProps || {}).description ||
    '服务端渲染框架_默认'

  const keywords =
    (pageContext.pageExports.documentProps || {}).keywords ||
    (pageContext.documentProps || {}).keywords ||
    'vite,vue,ssr,默认'

  return {
    title: title,
    description: description,
    keywords: keywords
  }
}
