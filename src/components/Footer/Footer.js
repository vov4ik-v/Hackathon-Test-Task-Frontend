import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerinfo}>
        <div className={styles.footeremail}>
          <div className={styles.footeremail1}>
            <p>Надішли свій Email та отримуй<br />сповіщення про нові запити</p>
          </div>
          <div className={styles.footeremail2}>
            <input type="email" placeholder="твій Email..." />
          </div>
        </div>
        <div className={styles.socialnet}>
          <div className={styles.logo}>
            <img src="/logo.svg" alt="Логотип" />
            <div className={styles.logoText}>
              Допомога в дії
            </div>
          </div>
          <div className={styles.aboutus}></div>
          <div className={styles.icons}></div>
        </div>
      </div>
      <div className={styles.content}>
        <p>Всі права захищено</p>
      </div>
    </footer>
  );
};

export default Footer;
