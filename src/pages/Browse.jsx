import React, { useEffect, useState } from 'react'

import UserImage from '../assets/UserImage.png';
import styles from './Browse.module.css'
function Browse() {

  const [categoriesData, setCategoriesData] = useState()



  useEffect(() => {
    const getPosterPaths = (results) => {
      let returnResults = []
      let resultCount = 0
      while (resultCount < 5) {
        returnResults.push(`http://image.tmdb.org/t/p/original/${results[resultCount]["poster_path"]}`)
        resultCount += 1
      }
      return returnResults
    }
    let genresId = {
      'action': 28,
      'drama': 18,
      'romance': 10749,
      'thriller': 53,
      'western': 37,
      'horror': 27,
      'fantasy': 14,
      'music': 10402,
      'fiction': 878,
    }
    let current_categories = JSON.parse(window.localStorage['genres'])
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NDBjNTMzNmQxYzQ1N2ZlNmE4Mjc2ZDRlODczMWI1MiIsInN1YiI6IjY1NTFmYmU2OTY1M2Y2MTNmODYyYjBjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n_wCefKHC2m8LklifU-IGDc_oiOSJwcRefjk-AvBfR4'
      }
    };

    const fetchMoviesData = async () => {
      let moviesData = []
      Object.values(current_categories).map(async (category) => {
        let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genresId[category]}`
        return await fetch(url, options)
          .then(response => {
            return response.json()
          })
          .then(response => {
            moviesData.push(
              {
                'category': category,
                'images': getPosterPaths(response['results'])
              })
            return moviesData
          }
          ).then(moviesData =>
            setCategoriesData(
              moviesData
            )
          )
          .catch(err => console.error(err))
      })


    }

    fetchMoviesData()
  }, [])


  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>Super app</h1>
        <img src={UserImage} alt="User" />
      </div>
      <div className={styles.mainContent}>
        <p>Entertainment according to your choice</p>
        <div className={styles.movies}>
          {categoriesData ? categoriesData.map((data) => (
            <div key={data['category']}>

              <div className={styles.genre}>{data['category']}</div>
              <div className={styles.images}>
                {data['images'].map((image, index) => (
                  <img className={styles.image} key={index} src={image} alt="" />
                ))}
              </div>
            </div>
          )) : <></>}
        </div>
      </div>
    </div>
  )
}

export default Browse