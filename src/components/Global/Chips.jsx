import React from 'react'

function Chips({color,id,setCategories,categories}) {
    const handleClick = () => {
        const index = categories.indexOf(id)
        categories.splice(index,1)
        setCategories([...categories])
    }


  return (
    <div style={{width:'40vw'}}>
        {categories.map((category)=>{
            <button/>
        })}
    </div>
  )
}

export default Chips