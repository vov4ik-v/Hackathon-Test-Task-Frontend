"use client"
import React, { useEffect, useState } from 'react';
import styles from './needs.module.css';
import { getCurrentUser } from '@/util/api';

const UserPage = () => {
    const [usermail, setUsermail] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            getCurrentUserData(token);
        }
    }, []);

    const getCurrentUserData = async (token) => {
        try {
            const userData = await getCurrentUser(token);
            setUsermail(userData.email);
        } catch (error) {
            console.error('Error getting current user data:', error);
        }
    };

    return (
        <div className={styles.main}>
            <div className={styles.centeredText}>
                <p className={styles.accountInfo}>Обліковий запис</p>
            </div>
            <div className={styles.centeredText}>
                <p className={styles.requestInfo}>Хочу зробити запит про потребу</p>
            </div>
            <div className={styles.info}>
                <div className={styles.leftSection}>
                    <img src="/person2.svg" alt="Avatar" className={styles.avatar} />
                </div>
                <div className={styles.rightSection}>
                    <p className={styles.usermail}>{usermail}</p>
                    <div className={styles.volunteerInfo}>
                        <p>Працюю волонтером у місцевому пришкільному таборі для дітей з вразливих сімей протягом останніх 5 років. Також активно беру участь у благодійних заходах для безпритульних та потребуючих.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
