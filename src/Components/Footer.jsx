import styles from './Footer.module.css';

export default function Footer(){
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className={styles.footer}>© {year} Emilio Jimenez</div>
    )
};