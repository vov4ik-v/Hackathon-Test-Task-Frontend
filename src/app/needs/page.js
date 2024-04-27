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
            <div className={styles.extraHelpContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Збір на тактичні рюкзаки</h2>
                    <img src="/mark.svg" alt="Mark" className={styles.markImage} />
                </div>
                <div className={styles.sectionsContainer}>
                    <div className={styles.rightSection1}>
                        <img src="/main-page/extraHelp.svg" alt="Extra" className={styles.extraImage} />
                        <div className={styles.learnMoreContainer}>
                            <div className={styles.learnMore}>
                                <p className={styles.learnMoreText}>Дізнатись більше</p>
                                <img src="/main-page/arrow2.svg" alt="Arrow" className={styles.arrowIcon} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.leftSection1}>
                        <div className={styles.item}>
                            <span className={styles.itemText}>потрібна сума</span>
                            <span className={styles.itemNumber}>100 000 +</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.itemText}>тактичні рюкзаки</span>
                            <span className={styles.itemNumber}>15</span>
                        </div>
                        <div className={styles.item}>
                            <span className={styles.itemText}>Бригада</span>
                            <span className={styles.itemNumber}>128</span>
                        </div>
                        <div className={styles.quote}>
                            <span className={styles.quoteText}>"</span>
                            <p className={styles.quoteContent}>
                                Ми, 128 бригада, стоїмо на передовій, де кожен день зустрічаємося з різноманітними викликами та труднощами. У зв'язку з постійною потребою у підтримці, ми звертаємося до вас з проханням про необхідність рюкзаків.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Needs;
