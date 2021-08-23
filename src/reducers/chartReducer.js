import pricesService from '../services/prices'


const chartReducer = (state=[], action) => {
  console.log('state now: ', state)
  console.log('action: ', action)
  switch(action.type) {
    case '24_HOUR': {
      const dayPrices = action.data
      return dayPrices
    }
    case '7_DAYS': {
      const weekPrices = action.data
      return weekPrices
    }
    case '1_MONTH': {
      const monthPrices = action.data
      return monthPrices
    }
    default:
      return state
  }
}

export const viewDay = () => {
  return async dispatch => {
    const dayPrices = await pricesService.getDay()
    dispatch ({
      type: "24_HOUR",
      data: dayPrices
    })
  }
}

export const viewWeek = () => {
  return async dispatch => {
    const weekPrices = await pricesService.getWeek()
    dispatch ({
      type: "7_DAYS",
      data: weekPrices
    })
  }
}

export const viewMonth = () => {
  return async dispatch => {
    const monthPrices = await pricesService.getMonth()
    dispatch ({
      type: "1_MONTH",
      data: monthPrices
    })
  }
}

export default chartReducer