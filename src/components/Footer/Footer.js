import styles from './footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.footerinfo}></div>
        <div className={styles.content}>
            <p>Всі права захищено</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  