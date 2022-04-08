
export { onBeforeRender }

async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      pageProps: {
        routeParams: pageContext.routeParams
      },
      documentProps: {
        title: '标题',
        description: '描述',
        keywords: '关键字'
      }
    }
  }
}
