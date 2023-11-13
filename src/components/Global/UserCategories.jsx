import React from 'react'

import styles from './UserCategories.module.css'

function UserCategories({ categories }) {
    // console.log(categories[0])
    return (
        <div className={styles.categoryMain}>
            {
                Object.values(categories).map((category) => (
                    <div key={category} className={styles.category}>{category}</div>
                ))
            }
        </div>
    )
}

export default UserCategories