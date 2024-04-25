import styles from './Section1.module.css';

const Section1 = () => {
  return (
    <div className={styles.section1Container}>
      <div className={styles.section1Header}>
        <p className={styles.section1Title}>Допомога в дії</p>
        <img src="/main-page/section1.svg" alt="Section 1" className={styles.section1Image} />
        <img src="/main-page/section1(locate).svg" alt="Section 1 (locate)" className={styles.section1LocateImage} />
      </div>
      <div className={styles.section1Footer}>
        <p className={styles.section1Description}>
          Ми - це зосередження запитів про термінові потреби людей,
           військових, з метою полегшення пошуку інформації охочим допомогти
        </p>
        <div className={styles.section1Square}>
          <p className={styles.section1SquareText}>Маєш бажання допомогти, 
          але не знаєш де та як?</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;