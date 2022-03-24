// import axios from 'axios'
import {axios} from '@/util/axios'

export { onBeforeRender }

const movielist = async (page) => {
  const { data } = await axios({
    url: 'api/movies/movielist',
    method: 'get',
    params: {
      page
    }
  })
  return data
}

async function onBeforeRender(pageContext) {
  // We make `movies` available as `pageContext.pageProps.movies`
  return {
    pageContext: {
      pageProps: {
        movie: await movielist(pageContext.routeParams.page),
        routeParams: pageContext.routeParams
      }
    }
  }
}