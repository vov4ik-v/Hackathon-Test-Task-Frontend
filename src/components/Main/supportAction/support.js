import styles from './support.module.css';

const SupportAction = () => {
  return (
    <div className={styles.supportActionContainer}>
      <div className={styles.contentWrapper}>
        <span className={styles.wrapper}>
          <img src="./main-page/blaze.svg" alt="Blaze" className={styles.blazeImage} />
          <p className={styles.supportActionText}>Хочеш долучитись до збору коштів або маєш нагальну потребу, яку потрібно закрити?</p>
        </span>
      </div>
    </div>
  );
};

export default SupportAction;
