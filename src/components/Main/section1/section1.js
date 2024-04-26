import styles from './Section1.module.css';

const Section1 = () => {
  return (
    <div className={styles.section1}>
      <span className={styles.firstLine}>
        Ми - це зосередження запитів про термінові потреби людей, військових, з метою полегшення пошуку інформації охочим допомогти
      </span>
      <img src="/main-page/section11.svg" alt="Section 1 Image" className={styles.image} />
    </div>
  );
};

export default Section1;