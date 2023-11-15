import React, { useState } from 'react'

import styles from './NotesCard.module.css'

function NotesCard() {
  const [note, setNote] = useState('')
  const handleChange = (e) => {
    setNote(e.target.value)
    window.localStorage.setItem('notes',JSON.stringify(note))
}




  return (
    <div className={styles.main}>
      <h1>All notes</h1>
      <textarea  className={styles.input} type='textarea' name='note' onChange={handleChange}/>
    </div>
  )
}

export default NotesCard