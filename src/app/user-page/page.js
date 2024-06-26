"use client"
import React, { useEffect, useState } from 'react';
import styles from './needs.module.css';
import { getCurrentUser, updateUserInfo } from '@/util/api';

const UserPage = () => {
    const [usermail, setUsermail] = useState('');
    const [userbio, setUserbio] = useState('');
    const [username, setUsername] = useState('');
    const [editing, setEditing] = useState(false);
    const [editedUsername, setEditedUsername] = useState('');
    const [editedUserbio, setEditedUserbio] = useState('');

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
            setEditedUsername(userData.name);
            setEditedUserbio(userData.bio);
        } catch (error) {
            console.error('Error getting current user data:', error);
        }
    };

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            await updateUserInfo({ bio: editedUserbio, name: editedUsername });
            setEditing(false);
            setUsername(editedUsername);
            setUserbio(editedUserbio);
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
                    {editing ? (
                        <div className={styles.inputs}>
                            <div>
                                <p className={styles.inputLabel}>Ваше ім’я</p>
                                <input
                                    type="text"
                                    value={editedUsername}
                                    onChange={(e) => setEditedUsername(e.target.value)}
                                    className={styles.inputField}
                                />
                            </div>
                            <div>
                                <p className={styles.inputLabel}>Про вас</p>
                                <input
                                    type="text"
                                    value={editedUserbio}
                                    onChange={(e) => setEditedUserbio(e.target.value)}
                                    className={styles.inputField}
                                />
                            </div>
                            <button className={styles.saveButton} onClick={handleSaveClick}>Зберегти</button>
                        </div>

                    ) : (
                        <div>
                            <p className={styles.username}>{username}</p>
                            <p className={styles.usermail}>{usermail}</p>
                            {userbio && (
                                <div className={styles.volunteerInfo}>
                                    <p>{userbio}</p>
                                </div>
                            )}
                            <button className={styles.saveButton} onClick={handleEditClick}>Редагувати</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserPage;
