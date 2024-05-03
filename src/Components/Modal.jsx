import styles from './Modal.module.css';

export default function Modal(props){
    if (props.isOpen === false) return null;

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button className={styles.close}>x</button>
                <p>Does this work ?</p>
            </div>
        </div>
    );
}