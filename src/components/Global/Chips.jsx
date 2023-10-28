import React from 'react'

import styles from './Chips.module.css'

function Chips({color,id,setCategories,categories}) {
    const handleClick = () => {
        const index = categories.indexOf(id)
        categories.splice(index,1)
        setCategories([...categories])
    }


  return (
    <div className={styles.chips}>
        {categories.map((category)=>(
            <div className={styles.chip}>{category}<button key={category} onClick={handleClick}>x</button></div>
            
        ))}
    </div>
  )
}

export default Chips