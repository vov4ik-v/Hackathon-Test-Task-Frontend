"use client"

import React, { useState } from 'react';
import Modal from './modal';
import styles from './needs.module.css';

const Needs = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <p className={styles.main}>
                Головна / <span className={styles.needText}>Потреби</span>
            </p>
            <div className={styles.needsText}>
                Потреби
            </div>
            <div className={styles.needsContainer}>
                <div className={styles.leftSection}>
                    <p className={styles.leftSectionText}>
                        На цій сторінці ви знайдете інформацію про термінові потреби людей,
                        військових та інших осіб, які потребують допомоги в різних сферах життя.
                    </p>
                    <button className={styles.registerButton} onClick={toggleModal}>Зареєструвати потребу</button>
                    {showModal && <Modal />}
                </div>
                <div className={styles.rightSection}>
                    <img src="/flag.svg" alt="Flag" className={styles.flagImage} />
                </div>
            </div>
        </>
    );
};

export default Needs;
