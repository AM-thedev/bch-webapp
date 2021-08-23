import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { displayNews } from '../reducers/newsReducer'
import Story from './NewsCard'


const NewsFeed = () => {
  const dispatch = useDispatch()
  const feed = useSelector(state => state.news)

  useEffect(() => {
    dispatch(displayNews())
  }, [dispatch])

  const newsCards = () => {
    return (
      feed.map(story =>
      <Story
        key={feed.indexOf(story)}
        title={story.title}
        url={story.url}
      />
      )
    )
  }

  return (
    <div>
      {newsCards()}
    </div>
  )
}

export default NewsFeed