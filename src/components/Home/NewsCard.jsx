import React, { useEffect, useState } from 'react'

import styles from './NewsCard.module.css'

function NewsCard() {


  const [newsData, setNewsData] = useState()
  const [imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    const fetchNewsData = async () => {
      await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=f4923bb0a0ea4a19a8a9ab59f363ed87")
        .then(async (data) => await data.json())
        .then((res) => {
          setNewsData(res['articles'][0])
          setImageUrl(res['articles'][0]["urlToImage"].replace('"', ''));
        }
        )

    }
    fetchNewsData();

  }, [])

  // content title urlToImage
  return (
    <>
      {newsData ? <div className={styles.main}>

        <div className={styles.titleContent}>
          <div className={styles.title}>{newsData['title']}</div>
          <div className={styles.dateTime}>2-20-2023 | 07:35 PM</div>
        </div>
        <img src={imageUrl} alt="" className={styles.top} />
        <div className={styles.bottom}>
          <div className={styles.text}>{newsData['description']}</div>
        </div>
      </div> : <></>}
    </>
  )
}

export default NewsCard