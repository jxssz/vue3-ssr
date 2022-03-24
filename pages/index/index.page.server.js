import { axios } from '@/util/axios'

export { onBeforeRender }

const movielist = async () => {
  const { data } = await axios({
    url: 'api/movies/movielist',
    method: 'get'
  })
  return data
}

async function onBeforeRender(pageContext) {
  // We make `movies` available as `pageContext.pageProps.movies`
  return {
    pageContext: {
      pageProps: {
        movie: await movielist()
      }
    }
  }
}
// export { passToClient }

// const passToClient = [
//   'pageProps',
//   'routeParams'
// ]