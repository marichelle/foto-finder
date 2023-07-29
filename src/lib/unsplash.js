import axios from 'axios'

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY
const UNSPLASH_URL = process.env.REACT_APP_UNSPLASH_URL

const searchImages = async query => {
  const response = await axios.get(`${UNSPLASH_URL}/search/photos`, {
    headers: {
      Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
    },
    params: {
      per_page: 24,
      query,
    },
  })

  return response.data.results
}

export default searchImages
