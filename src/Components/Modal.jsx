import styles from './Modal.module.css';

export default function Modal(props){
    if (props.isOpen === false) return null;

    const handleClick = () => {
        props.onClose();
    }

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <span onClick={handleClick} className={styles.close}>x</span>
                <p>Does this work ?</p>
            </div>
        </div>
    );
}