import styles from './support.module.css';


const SupportAction = () => {
  return (
    <div className={styles.supportActionContainer}>
      <div className={styles.contentWrapper}>
        <img src="./main-page/blaze.svg" alt="Blaze" className={styles.blazeImage} />
        <p className={styles.supportActionText}>Хочеш долучитись до збору коштів або маєш нагальну потребу, яку потрібно закрити?</p>
        <div className={styles.secondaryContent}>
          <p className={styles.secondaryText}>Реєструйся та долучайся</p>
          <img src="./main-page/double-arrow.svg" alt="Double Arrow" className={styles.doubleArrowImage} />
        </div>
      </div>
    </div>
  );
};

export default SupportAction;
