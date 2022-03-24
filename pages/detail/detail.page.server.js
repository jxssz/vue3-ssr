import { axios } from '@/util/axios'

export { onBeforeRender }

const getDetail = async (params) => {
  const { data } = await axios({
    url: 'api/movies/detail',
    method: 'get',
    params
  })
  return data
}

async function onBeforeRender(pageContext) {
  const params = {
    mid: pageContext.routeParams.mid
  }

  // We make `movies` available as `pageContext.pageProps.movies`
  const detail = await getDetail(params)
  return {
    pageContext: {
      pageProps: {
        detail
      },
      documentProps: {
        title: detail.data.detail_title
      }
    }
  }
}