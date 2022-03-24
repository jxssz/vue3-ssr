import { axios } from '@/util/axios'

export { onBeforeRender }

const users = async () => {
  const { data } = await axios({
    url: 'api/userlist',
    method: 'get'
  })
  return data
}

async function onBeforeRender(pageContext) {
  // `.page.server.js` files always run in Node.js; we could use SQL/ORM queries here.
  return {
    pageContext: {
      pageProps: {
        users: await users(),
        routeParams: pageContext.routeParams
      }
    }
  }
}
// export { passToClient }

// const passToClient = [
//   'pageProps'
// ]