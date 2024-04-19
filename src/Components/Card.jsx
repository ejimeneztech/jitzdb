import styles from './Card.module.css';

export default function Card() {
    return (

        <div className={styles.card}>
            {/* <img></img> */}
            <h4>Title</h4>
            <p>Description</p>
            <p>Date:</p>

        </div>

    )
}