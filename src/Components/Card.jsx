import styles from './Card.module.css';
import React, { useState, useEffect } from 'react';


export default function Card() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json();
            })
            .then((data) => {
                setPosts(data);
                console.log(data);
            })
    }, []);
    return (

        <div className={styles.cardContainer}>
            {posts.map((post) => (
                <div key={post.id} className={styles.card}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}


        </div>

    )
}