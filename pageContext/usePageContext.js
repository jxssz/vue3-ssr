// Hook `usePageContext()` to make `pageContext` available from any Vue component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import { inject } from 'vue'

export { usePageContext }
export { setPageContext }

const key = Symbol('pageContext')

async function usePageContext() {
  const pageContext = inject(key)
  return pageContext
}

async function setPageContext(app, pageContext) {
  app.provide(key, pageContext)
}
