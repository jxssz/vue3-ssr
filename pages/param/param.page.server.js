
export { onBeforeRender }

async function onBeforeRender(pageContext) {
  return {
    pageContext: {
      pageProps: {
        routeParams: pageContext.routeParams
      }
    }
  }
}
