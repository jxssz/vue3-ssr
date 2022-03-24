import { createSSRApp, h, markRaw, reactive, defineComponent } from 'vue'
import App from '@/pages/index.vue'
import { setPageContext } from '@/pageContext/usePageContext'

export { createApp }

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  let rootComponent
  const PageWithWrapper = defineComponent({
    data: () => ({
      Page: markRaw(Page),
      pageProps: markRaw(pageContext.pageProps || {})
    }),
    created() {
      rootComponent = this
    },
    render() {
      return h(
        App,
        {},
        {
          default: () => {
            return h(this.Page, this.pageProps)
          },
        },
      )
    },
  })

  const app = createSSRApp(PageWithWrapper)
  // const app = createSSRApp({
  //   render() {
  //     return h(
  //       App,
  //       {},
  //       {
  //         default() {
  //           return h(Page, markRaw(pageProps || {}))
  //         },
  //       },
  //     )
  //   },
  // })
  objectAssign(app, {
    changePage: (pageContext) => {
      Object.assign(pageContextReactive, pageContext)
      rootComponent.Page = markRaw(pageContext.Page)
      rootComponent.pageProps = markRaw(pageContext.pageProps || {})
    },
  })
  const pageContextReactive = reactive(pageContext)
  // We make `pageContext` available from any Vue component
  setPageContext(app, pageContextReactive)
  return { app }
}

function objectAssign(obj, objAddendum) {
  Object.assign(obj, objAddendum)
}
