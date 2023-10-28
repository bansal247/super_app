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
    { id: 'action', image: action, color: '#FF5209' },
    { id: 'drama', image: drama, color: '#D7A4FF' },
    { id: 'romance', image: romance, color: '#11B800' },
    { id: 'thriller', image: thriller, color: '#84C2FF' },
    { id: 'western', image: western, color: '#902500' },
    { id: 'horror', image: horror, color: '#7358FF' },
    { id: 'fantasy', image: fantasy, color: '#FF4ADE' },
    { id: 'music', image: music, color: '#E61E32' },
    { id: 'fiction', image: fiction, color: '#6CD061' },
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
            <div className={styles.main}>
                <div className={styles.left}>
                    <p className={styles.heading}>Super app</p>
                    <p className={styles.subHeading}>Choose your entertainment category</p>
                    <div style={{ marginTop: "5vh" }}>
                        <Chips
                            categories={categories}
                            color={"green"}
                            setCategories={setCategories}
                        />
                        {
                            lengthError ? (
                                <p className={styles.error}>Minimum 3 category required</p>
                            ) :
                                (<></>)
                        }
                    </div>
                </div>

                <div className={styles.right}>
                    {genres.map((data, idx) => (
                        <Block
                            data={data}
                            idx={idx}
                            key={idx}
                            categories={categories}
                            setCategories={setCategories}
                        />
                    ))}
                </div>
            </div>
            <button className={styles.signUp} onClick={handleChoice}>NextPage</button>
        </div>
    )
}

const Block = ({ data, idx, setCategories, categories }) => {
    const [selected, setSelected] = useState();
    const handleClick = (e) => {
        if (categories.includes(data.id)) {
            const index = categories.indexOf(data.id);
            categories.splice(index, 1);
            setCategories([...categories]);
        }
        else {
            setCategories([...categories, data.id])
        }
        setSelected(!selected)
    };

    useEffect(() => {
        setSelected(categories.includes(data.id) === true);
    }, [categories, data.id]);

    const blockStyle = {
        background: data['color'],
        borderRadius: '12px',
        border: `${selected ? '4px solid green' : '4px solid white'}`
    }
    return (
        <div
            
            onClick={(e) => handleClick(e)}
            key={idx}
            style={blockStyle}
            className={styles.block}
            
        >
            <p className={styles.blockText} onClick={handleClick}>{data.id}</p>
            <img className={styles.image} src={data.image} alt={data.id} />

        </div>
    );

}

export default Categories