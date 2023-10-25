import React from 'react'
import Banner from '../components/Register/Banner'
import SignUpForm from '../components/Register/SignUpForm'

import styles from './Register.module.css'
function Register() {
  return (
    <div className={styles.div}>
      <Banner/>
      <SignUpForm/>
    </div>
  )
}

export default Register