// import { getPage } from 'vite-plugin-ssr/client'
import { createApp } from './app'
import { useClientRouter } from 'vite-plugin-ssr/client/router'
import { getPageTitle } from '@/getPageTitle'
// import type { PageContext } from './types'
// import { useClientRouter } from 'vite-plugin-ssr/client/router'
import { usePageContext } from '@/pageContext/usePageContext';

// hydrate()

// async function hydrate() {
//   // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
//   // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
//   const pageContext = await getPage()

let page = {}
//   app.mount('#app')
// }

const { hydrationPromise } = useClientRouter({
  render(pageContext) {
    if (!page.app) {
      page = createApp(pageContext)
      page.app.mount('#app')
    } else {
      page.app.changePage(pageContext)
    }
    const {title, decsription, keywords} = getPageTitle(pageContext)
    document.title = title
    document.decsription = decsription
    document.keywords = keywords
  },
  // Vue needs the first render to be a hydration
  ensureHydration: true,
  prefetchLinks: true,
  // 可以在这过页面跳转的动画或其他样式
  // onTransitionStart,
  // onTransitionEnd,
})

hydrationPromise.then(() => {
  console.log('Hydration finished; page is now interactive.')
})

function onTransitionStart() {
  console.log('Page transition start')
  // document.querySelector('.content').classList.add('page-transition')
}
function onTransitionEnd() {
  console.log('Page transition end')
  // document.querySelector('.content').classList.remove('page-transition')
}
