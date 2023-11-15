import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

import UserCard from '../components/Home/UserCard'
import NewsCard from '../components/Home/NewsCard'
import WeatherCard from '../components/Home/WeatherCard'
import NotesCard from '../components/Home/NotesCard'
import TimerCard from '../components/Home/TimerCard'

function Home() {
  const navigate = useNavigate();
  const handleClick = () => {

    navigate('/browse');

  }
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.timer}>
          <div className={styles.notes}>
            <div className={styles.user}>
              <UserCard />
              <WeatherCard />
            </div>

            <NotesCard />
          </div>

          <TimerCard />
        </div>

        <NewsCard />
      </div>
      <button className={styles.signUp} onClick={handleClick}>Browse</button>
    </div>
  )
}

export default Home