import styles from './Modal.module.css';

export default function Modal(props){
    if (props.isOpen === false) return null;

    return (
        <div className={styles.modal}>Hello</div>
    );
}