import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { createApp } from './app'
import css from '@/style/base.scss'
import { setup } from '@css-render/vue3-ssr'
import { getPageTitle } from '../getPageTitle'
export { render }
// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'routeParams', 'documentProps']

async function render(pageContext) {
  const { app } = createApp(pageContext)
  // const css1 = collect()
  const appHtml = await renderToString(app)
  // See https://vite-plugin-ssr.com/head
  const {title, description, keywords} = getPageTitle(pageContext)
  const { documentProps } = pageContext
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <meta name="shenma-site-verification" content="22cc323ea704183ff3ad3b189d283226_1647925111"/>
        <meta name="sogou_site_verification" content="wHOvQd1Tym" />
        <meta name="360-site-verification" content="b637bfb3b4b984bb07f4acb80d380d6b" />
        <meta name="google-site-verification" content="B-AwpZHZsF4LY-aylzXkLuZeLMRvcbRaHXev5Sfx18Y" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <meta name="baidu-site-verification" content="code-1puyNyAsIe" />
        <meta name="baidu-site-verification" content="code-AqrS8t3MjB" />
        <meta charset="UTF-8" />
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </head>
      <style type=text/css>${dangerouslySkipEscape(css)}}</style>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  }
}
