
export { onBeforeRender }

/**
 * 模拟异步请求
 * @returns result
 */
const asyncDataDemo = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world')
    })
  })
}

/**
 * 
 * @param {*} pageContext 
 * @returns 
 */
async function onBeforeRender(pageContext) {
  return {
    // 页面扩展
    pageContext: {
      // 映射页面props接收
      pageProps: {
        asyncDataDemo: await asyncDataDemo()
      }
    }
  }
}
