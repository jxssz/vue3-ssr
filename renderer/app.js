import { createSSRApp, h, markRaw, defineComponent, nextTick } from 'vue'
import App from '@/pages/index.vue'
import { setPageContext } from '@/pageContext/usePageContext'
export { createApp }  
function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  let rootComponent

  const app = createSSRApp(
    defineComponent({
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
  )

  objectAssign(app, {
    changePage: (pageContext) => {
      Object.assign(pageContextReactive, pageContext)
      rootComponent.Page = markRaw(
        defineComponent({
          render() {
            return h(App)
          }
        })
      )
      rootComponent.pageProps = markRaw({})
      nextTick(() => {
        rootComponent.Page = markRaw(pageContext.Page)
        rootComponent.pageProps = markRaw(pageContext.pageProps || {})
      })
    },
  })
  const pageContextReactive = pageContext
  setPageContext(app, pageContextReactive)

  return { app }
}

function objectAssign(obj, objAddendum) {
  Object.assign(obj, objAddendum)
}
