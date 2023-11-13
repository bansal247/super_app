import React, { useEffect, useState } from 'react'
import UserCategories from '../Global/UserCategories';

import styles from './UserCard.module.css';
import UserImage from '../../assets/UserImage.png';

function UserCard() {
    const [formValues, setFormValues] = useState({});
    const [categories, setCategories] = useState({})
    useEffect(() => {
    //   setFormValues(JSON.parse(window.localStorage.getItem('userData')))
    //   setCategories(JSON.parse(window.localStorage.getItem('genres')))
    setFormValues(JSON.parse(window.localStorage['userData']))
    setCategories(JSON.parse(window.localStorage['genres']))
    }, [])
    // console.log(formValues['name'],categories)
    // {0: 'thriller', 1: 'western', 2: 'horror'}
  return (
    <div className={styles.main}>
        <div className={styles.left}>
            <img src={UserImage} alt="User" />
        </div>
        <div className={styles.right}>
            <p> hi {formValues['name']}</p>
            <p>{formValues['mail']}</p>
            <h1>{formValues['username']}</h1>
            <UserCategories categories={categories}/>
        </div>
    </div>
  )
}

export default UserCard