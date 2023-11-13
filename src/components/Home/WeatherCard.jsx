import React, { useEffect, useState } from 'react'

import tempIcon from '../../assets/icons/Temp.png'
import windIcon from '../../assets/icons/Wind Pressure.png'
import humidityIcon from '../../assets/icons/Humidity.png'

import styles from './WeatherCard.module.css'
function WeatherCard() {

  const [weatherData, setWeatherData] = useState()
  useEffect(() => {
    const fetchWeatherData = async () => {
      await fetch("http://api.weatherapi.com/v1/current.json?key=04b4d35e4efa49c0abe113154233010&q=auto:ip&aqi=no")
        .then(async (data) => await data.json())
        .then((res) => setWeatherData(res))
    }
    fetchWeatherData();
  },[])
  console.log(weatherData)
  // ['location']['localtime'] ['current']['condition']['text'] ['current']['condition']['icon']
  // ['current']['humidity'] ['current']['temp_c'] ['current']['wind_kph'] ['current']['pressure_mb']
  return (
    <div className={styles.main}>
      {weatherData ? <div className={styles.top}>
        <p>{weatherData['location']['localtime']}</p>
        <p>{weatherData['location']['localtime']}</p>
      </div>:<></>}
      {weatherData ? <div className={styles.bottom}>
        <div className={`${styles.item}`}>
          <img src={'http:' + weatherData['current']['condition']['icon']} alt="weatherData['current']['condition']['text']" />
          <p className={styles.text}>{weatherData['current']['condition']['text']}</p>
        </div>
        <div className={`${styles.item}`}>
          <p className={styles.bigText}>{weatherData['current']['temp_c']} °C</p>
          <div className={styles.textBlock}>
            <img src={tempIcon} alt="pressure"/>
            <p className={styles.text}>{weatherData['current']['pressure_mb']} mbar Pressure</p>
          </div>
        </div>
        <div className={`${styles.item}`}>
          <div className={styles.textBlock}>
            <img src={windIcon} alt="wind-speed" />
            <p className={styles.text}>{weatherData['current']['wind_kph']} km/h Wind</p>
          </div>
          <div className={styles.textBlock}>
            <img src={humidityIcon} alt="humidity" />
            <p className={styles.text}>{weatherData['current']['humidity']} Humidity</p>
          </div>
        </div>
      </div>:<></>}
    </div>
  )
}

export default WeatherCard