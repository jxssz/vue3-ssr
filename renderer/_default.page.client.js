import { createApp } from './app'
import { useClientRouter } from 'vite-plugin-ssr/client/router'
import { getPageTitle } from '@/getPageTitle'
import { usePageContext } from '@/pageContext/usePageContext';
// 获取当前页面配置
import { getPage } from 'vite-plugin-ssr/client'
import '@/style/base.scss'

let page = {}

const { hydrationPromise } = useClientRouter({
  render(pageContext) {
    if (!page.app) {
      page = createApp(pageContext)
      page.app.mount('#app')
    } else {
      page.app.changePage(pageContext)
    }

    const { title, decsription, keywords } = getPageTitle(pageContext)
    document.title = title
    document.decsription = decsription
    document.keywords = keywords
  },
  ensureHydration: true,
  prefetchLinks: true,
  onTransitionStart,
  onTransitionEnd,
})

hydrationPromise.then(() => {
  console.log('水合完成')
})

/**
 * 页面动画
 */

function onTransitionStart() {
  console.log('页面跳转前')
}
function onTransitionEnd() {
  console.log('页面跳转后')
}
