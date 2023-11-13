import React from 'react'
import UserCard from '../components/Home/UserCard'
import NewsCard from '../components/Home/NewsCard'
import WeatherCard from '../components/Home/WeatherCard'
import NotesCard from '../components/Home/NotesCard'
import TimerCard from '../components/Home/TimerCard'

function Home() {
  return (
    <div>
      <UserCard/>
      {/* <NewsCard/> */}
      {/* <WeatherCard/> */}
      <NotesCard/>
      <TimerCard/>
    </div>
  )
}

export default Home