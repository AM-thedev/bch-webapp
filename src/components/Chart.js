import React, { useEffect } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { viewDay, viewWeek, viewMonth } from '../reducers/chartReducer'


const Chart = () => {
  const dispatch = useDispatch()
  const prices = useSelector(state => state.chart)

  // the chart displays "month" by default
  useEffect(() => {
    dispatch(viewMonth())
  }, [dispatch])


  // helps RadioButton's active prop check which button currently has its data displayed
  // there's a slight delay due to the time it takes to fulfill the get request
  const checkDays = (days) => {
    if(prices.length === days) {
      return true
    }
    return false
  }

  // change chart line color depending on whether BCH price is going up or down
  const lineColor = () => {
    if (prices.length === 0) {
      return "grey"
    }
    if (prices[0].price >= prices[prices.length-1].price) {
      return "chartreuse"
    }
    else return "crimson"
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

// the active prop tracks which button's data is currently being displayed
// functionally similar to a radio button
const RadioButton = styled.button`
background: ${props => props.active ? "#115b9c" : "#d1e7fa"};
color: ${props => props.active ? "#f1f8fd" : "#115b9c"};

  font-size: 1em;
  margin: 1em;
  padding: 0.1em 0.5em;
  border: 2px solid;
  border-radius: 5px;
  border-color: ${props => props.active ? "#115b9c" : "#d1e7fa"};

  transition: 0.1s all ease-out;
  &:hover {
    border-color: #115b9c;
  }
`

const H2 = styled.h2`
  color: #0a365c
`

  return (
    <Wrapper>
      <H2>BCH ${prices[0] ? prices[0].price : '$$'}</H2>
        <ResponsiveContainer width="98%" height={300}>
          <LineChart
            data={prices}
            margin={{ top: 5, right: 0, bottom: 5, left: 0 }}>
              <Line type="natural" dataKey="price" stroke={lineColor()} />
              <CartesianGrid stroke="#d1e7fa" strokeDasharray="8 8" />
              <XAxis stroke="#0a365c" dataKey="time" reversed="true" />
              <YAxis stroke="#0a365c" />
              <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      <div>
        <RadioButton active={checkDays(31)} onClick={() => dispatch(viewMonth())}>1 month</RadioButton>
        <RadioButton active={checkDays(8)} onClick={() => dispatch(viewWeek())}>1 week</RadioButton>
        <RadioButton active={checkDays(3)} onClick={() => dispatch(viewDay())}>24 hours</RadioButton>
      </div>
    </Wrapper>
  )
}

export default Chart