"use client"

import React, { useState } from 'react';
import Modal from './modal';
import styles from './needs.module.css';

const Needs = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeContent, setActiveContent] = useState(1); // починаємо з першого контенту

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleContentChange = (contentNumber) => {
        setActiveContent(contentNumber);
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
            <div>
                <div className={styles.footeremail2}>
                    <input type="text" placeholder="" />
                </div>
            </div>
            <div className={styles.switcher}>
                <button className={activeContent === 1 ? styles.activeButton : styles.button} onClick={() => handleContentChange(1)}>Контент 1</button>
                <button className={activeContent === 2 ? styles.activeButton : styles.button} onClick={() => handleContentChange(2)}>Контент 2</button>
                <button className={activeContent === 3 ? styles.activeButton : styles.button} onClick={() => handleContentChange(3)}>Контент 3</button>
            </div>
            <div className={styles.extraHelpContainer1}>
                <div className={styles.sectionsContainer1}>
                    {activeContent === 1 && (
                        <div>
                                            <div className={styles.sectionsContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Збір на тактичні рюкзаки</h2>
                    <img src="/mark.svg" alt="Mark" className={styles.markImage} />
                </div>
                    {/* <div className={styles.rightSection1}>
                        <img src="/main-page/extraHelp.svg" alt="Extra" className={styles.extraImage} />
                        <div className={styles.learnMoreContainer}>
                            <div className={styles.learnMore}>
                                <p className={styles.learnMoreText}>Дізнатись більше</p>
                                <img src="/main-page/arrow2.svg" alt="Arrow" className={styles.arrowIcon} />
                            </div>
                        </div>
                    </div> */}
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
                    )}
                    {activeContent === 2 && (
                        <div>
                            {/* Вміст для другого контенту */}
                        </div>
                    )}
                    {activeContent === 3 && (
                        <div>
                            {/* Вміст для третього контенту */}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Needs;
