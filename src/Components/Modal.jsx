import styles from "./Modal.module.css";

export default function Modal(props) {
  if (props.isOpen === false) return null;

  const handleClick = () => {
    props.onClose();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span class="close" onClick={handleClick}>x</span>
        <h2>Modal Title</h2>
        <form id="myForm">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label for="steps">Steps:</label>
          <textarea id="steps" name="steps" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
