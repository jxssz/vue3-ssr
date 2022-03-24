// import axios from 'axios'
import {axios} from '@/util/axios'

export { onBeforeRender }

const getMessage = async (page) => {
  const { data } = await axios({
    url: 'api/movies/getmessage',
    method: 'get',
    params: {
      page
    }
  })
  // console.log(data)
  return data.data
}

async function onBeforeRender(pageContext) {
  // We make `movies` available as `pageContext.pageProps.movies`
  return {
    pageContext: {
      pageProps: {
        getMessage: await getMessage(),
        // routeParams: pageContext.routeParams
      }
    }
  }
}