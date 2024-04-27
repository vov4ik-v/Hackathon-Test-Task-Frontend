'use client'
import styles from './header.module.css';
import {useRouter} from "next/navigation";

const Header = () => {
  const router = useRouter()
  const hasAccessToken = localStorage.getItem('accessToken')
  const handleLogOut = () =>{
        localStorage.removeItem('accessToken')
  }
  const handleRedirectRegister = () =>{
        router.push('register')
  }
  const handleRedirectLogin = () =>{
      router.push('login')
  }

  return (
    <div className={styles.header}>
              <div className={styles.logo}>
          <img src="/logo.svg" alt="Логотип" />
          <div className={styles.logoText}> Допомога в дії </div>
        </div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Потреби</li>
          <li className={styles.navItem}>FAQ</li>
          <li className={styles.navItem}>Про нас</li>
        </ul>
      </nav>
      <img src="/sun-light.svg" alt="Sun Light" className={styles.sunLight} />
      <span className={styles.country}>UA</span>
        {hasAccessToken ? (
            <button onClick={handleLogOut} className={styles.loginButton}>Вийти</button>

        ) : (
            <>
                <button onClick={handleRedirectRegister} className={styles.registerButton}>Зареєструватись</button>
                <button onClick={handleRedirectLogin} className={styles.loginButton}>Увійти</button>
            </>
        )}
    </div>
  );
};

export default Header;
