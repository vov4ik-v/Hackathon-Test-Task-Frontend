import styles from './modal.module.css';

const Modal = () => {
    return (
        <div className={styles.modal}>
            <h2 className={styles.title}>Бажаєш зареєструвати потребу?</h2>
            <p className={styles.dataInput}>Введи дані:</p>
            {/* Додайте сюди селектор для типу потреби та інші поля */}
        </div>
    );
};

export default Modal;
