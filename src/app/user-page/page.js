import React from 'react'
import styles from './needs.module.css';
import {} from "@/util/api";

const UserPage = () => {
  return (
    <>
      <div className={styles.centeredText}>
        <p className={styles.accountInfo}>Обліковий запис</p>
      </div>
      <div className={styles.centeredText}>
        <p className={styles.requestInfo}>Хочу зробити запит про потребу</p>
      </div>
      <div>
        <p className={styles.username}></p>
        <p className={styles.usermail}></p>
      </div>
    </>
  );
};

export default UserPage;
