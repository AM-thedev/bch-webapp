import axios from 'axios'


const baseUrl = 'https://index-api.bitcoin.com/api/v0/cash'

const getCurrent = async () => {
  const response = await axios.get(`${baseUrl}/price/usd?unix=1`)
  return response.data
}

const getHistory = async () => {
  const response = await axios.get(`${baseUrl}/history?unix=1`)
  return response.data
}


// returns date and time (DD/MM/YYY, H:SS:MS AM/PM), better for when you have fewer data points
const formatByHour = (timestamp => {
  const date = new Date(timestamp * 1000)
  return date.toLocaleString()
})

const getDay = async () => {
  const currentResponse = await axios.get(`${baseUrl}/price/usd?unix=1`)
  const historyResponse = await axios.get(`${baseUrl}/history?unix=1`)
  const current = currentResponse.data
  const history = historyResponse.data

  const oneDayUnix = 24*60*60
  const oneDayAgoResponse = await axios.get(`${baseUrl}/lookup?time=${current.stamp - oneDayUnix}`)
  const oneDayAgo = oneDayAgoResponse.data.lookup


  let day = [{time: formatByHour(current.stamp), price: current.price / 100}]
  day = day.concat({time: formatByHour(history[0][0]), price: history[0][1] / 100})
  day = day.concat({time: formatByHour(oneDayAgo.time.unix), price: oneDayAgo.price / 100})

  return day
}

// only returns the date (DD/MM/YYYY), better for many data points
const formatByDay = (timestamp => {
  const date = new Date(timestamp * 1000)
  return date.toLocaleDateString()
})

const getWeek = async () => {
  const currentResponse = await axios.get(`${baseUrl}/price/usd?unix=1`)
  const historyResponse = await axios.get(`${baseUrl}/history?unix=1`)
  const current = currentResponse.data
  const history = historyResponse.data

  let week = [{time: formatByHour(current.stamp), price: current.price / 100}]
  for (let i = 0; i < 7; i++) {
      week = week.concat({time: formatByDay(history[i][0]), price: history[i][1] / 100})
    }
  
  return week
}

const getMonth = async () => {
  const currentResponse = await axios.get(`${baseUrl}/price/usd?unix=1`)
  const historyResponse = await axios.get(`${baseUrl}/history?unix=1`)
  const current = currentResponse.data
  const history = historyResponse.data

  let month = [{time: formatByHour(current.stamp), price: current.price / 100}]
  for (let i = 0; i < 30; i++) {
      month = month.concat({time: formatByDay(history[i][0]), price: history[i][1] / 100})
    }

  return month
}

export default {
  getCurrent,
  getHistory,
  getDay,
  getWeek,
  getMonth
}