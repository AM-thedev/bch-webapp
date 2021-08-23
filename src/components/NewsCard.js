import React from 'react'
import styled from 'styled-components'


const Card = styled.button`
  background: #f1f8fd;
  color: #115b9c;

  display: table;
  vertical-align: middle;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #115b9c;
  border-radius: 5px;
  text-decoration: none;
  text-align: left;
  width: 8em;
  height: 12em;

  transition: 0.25s all ease-out;
  &:hover {
    background-color: #115b9c;
    color: #f1f8fd;
    transform: scale(1.05, 1.05)
  }

  p {
    display: table-cell;
    margin: 0;
    vertical-align: middle;
  }
`

const Horizontal = styled.div`
  display: inline-flex;
  flex-direction: row;
`

const NewsCard = ({title, url}) => {

  return (
    <Horizontal className="news-card">
      <Card as="a" href={url} target="_blank" ><p>{title}</p></Card>
    </Horizontal>
  )
}

export default NewsCard