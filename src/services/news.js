import axios from 'axios'


const getNews = async () => {
  const response = await axios.get(`https://news.bitcoin.com/feed/`)
  return response.data
}

export default {
  getNews
}