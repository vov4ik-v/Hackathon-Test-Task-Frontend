'use client'
import { useState } from 'react';
import styles from './header.module.css';
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));

  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  const handleRedirectRegister = () => {
    router.push('register');
  };

  const handleRedirectLogin = () => {
    router.push('login');
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={handleLogoClick}>
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
      {isLoggedIn ? (
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