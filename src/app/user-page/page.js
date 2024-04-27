"use client"
import React, { useEffect, useState } from 'react';
import styles from './needs.module.css';
import { getCurrentUser, updateUserInfo } from '@/util/api';

const UserPage = () => {
    const [usermail, setUsermail] = useState('');
    const [userbio, setUserbio] = useState('');
    const [username, setUsername] = useState('');
    const [editing, setEditing] = useState(false);

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
            setUserbio(userData.bio);
            setUsername(userData.name);
        } catch (error) {
            console.error('Error getting current user data:', error);
        }
    };

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            await updateUserInfo({ bio: userbio, name: username });
            setEditing(false);
        } catch (error) {
            console.error('Error updating user info:', error);
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
                    {editing ? (
                        <div>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="text"
                                value={userbio}
                                onChange={(e) => setUserbio(e.target.value)}
                            />
                            <button onClick={handleSaveClick}>Зберегти</button>
                        </div>
                    ) : (
                        <div>
                            <div className={styles.volunteerInfo}>
                                <p>{userbio}</p>
                            </div>
                            <button onClick={handleEditClick}>Редагувати</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserPage;
