import React, { useState, useEffect } from 'react'

import styles from './Categories.module.css'
import action from '../../assets/category/image 2.png'
import drama from '../../assets/category/image 3.png'
import romance from '../../assets/category/image 4.png'
import thriller from '../../assets/category/image 6.png'
import western from '../../assets/category/image 7.png'
import horror from '../../assets/category/image 8.png'
import fantasy from '../../assets/category/image 9.png'
import music from '../../assets/category/image 10.png'
import fiction from '../../assets/category/image 11.png'
import { useNavigate } from 'react-router-dom'
import Chips from '../Global/Chips'

let genres = [
    
]

function Categories() {
    const [categories, setCategories] = useState([])
    const [lengthError, setLengthError] = useState(false)
    const navigate = useNavigate();

    const handleChoice = () => {
        if (categories.length < 3) {
            setLengthError(true);
        }
        else {
            setLengthError(false);
            window.localStorage.setItem('genres', JSON.stringify({ ...categories }));
            navigate('/browse');
        }
    }

    return (
        <div className={styles.body}>
            <div className={styles.left}>
                <p className={styles.heading}>Super app</p>
                <p className={styles.subHeading}>Choose your entertainment category</p>
                <div style={{ marginTop: "10vh" }}>
                    <Chips
                    categories={categories}
                    color={"green"}
                    setCategories={setCategories}
                    />
                    {
                        lengthError?(
                            <p className={styles.error}>Please Choose atleast 3</p>
                        ):
                        (<></>)
                    }
                </div>
            </div>

            <div className={styles.right}>
                {genres.map((data,idx) => (
                    <Block 
                    data = {data}
                    idx = {idx}
                    categories = {categories}
                    setCategories = {setCategories}
                    />
                ))}
            </div>
            <button className={styles.signUp} onClick={handleChoice}>NextPage</button>
        </div>
    )
}

const Block = ({data,idx,setCategories,categories}) => {
    const [selected, setSelected] = useState();
    const handleClick = (e) => {
        if (categories.includes(data.id)){
            const index = categories.indexOf(data.id);
            categories.splice(index,1);
            setCategories([...categories]);
        }
        else{
            setCategories([...categories,data.id])
        }
        setSelected(!selected)
    };

    useEffect(() => {
      setSelected(categories.includes(data.id) == true);
    });

    return (
        <div
        data = {data}
        onClick={(e)=>handleClick(e)}
        key = {idx}
        style={{
            background : data['color'],
            color:'white',
            padding: '16px',
            borderRadius: '12px',
            border: `${selected ? '4px solid green':'4px solid whilte'}`
        }}
        >
            <p style={{marginBottom: '4px', fontSize: '18px'}}>{data.id}</p>
        </div>
    );
    
}

export default Categories