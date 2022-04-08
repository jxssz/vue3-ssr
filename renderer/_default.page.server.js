import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { createApp } from './app'

export { render }

// 规定页面可暴露参数
export const passToClient = ['pageProps', 'routeParams', 'documentProps']

async function render(pageContext) {
  const { app } = createApp(pageContext)
  const appHtml = await renderToString(app)

  const { documentProps } = pageContext
  const title = documentProps && documentProps.title
  const desc = documentProps && documentProps.description
  const keywords = documentProps && documentProps.keywords

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${title}</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <meta name="keywords" content="${keywords}" />
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
  return {
    documentHtml,
    pageContext: {
      // 我们可以在这里添加一些 'pageContext'
    },
  }
}
