"use client"

import React, { useState } from 'react';
import Modal from './modal';
import styles from './needs.module.css';

const Needs = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeContent, setActiveContent] = useState(1);

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
                <button className={activeContent === 1 ? styles.activeButton : styles.button} onClick={() => handleContentChange(1)}>Активні збори</button>
                <button className={activeContent === 2 ? styles.activeButton : styles.button} onClick={() => handleContentChange(2)}>Гуманітарна допомога</button>
                <button className={activeContent === 3 ? styles.activeButton : styles.button} onClick={() => handleContentChange(3)}>Психологічна підтримка</button>
            </div>
            <div className={styles.extraHelpContainer}>
                <div className={styles.sectionsContainer}>
                    {activeContent === 1 && (
                        <div>
                            <div className={styles.titleContainer}>
                                <h2 className={styles.title}>Збір на тактичні рюкзаки</h2>
                                <img src="/mark.svg" alt="Mark" className={styles.markImage} />
                            </div>
                            <div className={styles.divided}>
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
                                <div className={styles.rightSection1}>
                                    <img src="/main-page/extraHelp.svg" alt="Extra" className={styles.extraImage} />
                                    <div className={styles.learnMoreContainer}>
                                        <div className={styles.learnMore}>
                                            <p className={styles.learnMoreText}>Дізнатись більше</p>
                                            <img src="/main-page/arrow2.svg" alt="Arrow" className={styles.arrowIcon} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeContent === 2 && (
                        <div>
                            <div className={styles.titleContainer}>
                                <h2 className={styles.title}>Гуманітарна допомога</h2>
                                <img src="/mark.svg" alt="Mark" className={styles.markImage} />
                            </div>
                            <div className={styles.divided}>
                                <div className={styles.leftSection1}>
                                    <div className={styles.item}>
                                        <span className={styles.itemText}>Місто</span>
                                        <span className={styles.itemNumber}>Львів</span>
                                    </div>
                                    <div className={styles.quote}>
                                        <span className={styles.quoteText}>"</span>
                                        <p className={styles.quoteContent}>Ми збираємо продукти харчування, медичні засоби,
                                            одяг та інші необхідні ресурси для тих, хто втратив все через воєнні дії.</p>
                                    </div>
                                </div>
                                <div className={styles.rightSection1}>
                                    <img src="/main-page/extraHelp.svg" alt="Extra" className={styles.extraImage} />
                                    <div className={styles.learnMoreContainer}>
                                        <div className={styles.learnMore}>
                                            <p className={styles.learnMoreText}>Дізнатись більше</p>
                                            <img src="/main-page/arrow2.svg" alt="Arrow" className={styles.arrowIcon} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeContent === 3 && (
                        <div>
                            <div className={styles.divided1}>
                                <div className={styles.leftSection1}>
                                    <div className={styles.item}>
                                        <span className={styles.itemText1}>Павленко Максим Олегович</span>
                                    </div>
                                    <div className={styles.quote}>
                                        <span className={styles.quoteText}>"</span>
                                        <p className={styles.quoteContent}>психолог з великим досвідом та глибоким
                                            розумінням людської психіки. Я відомий своєю ефективністю в роботі з тривожністю,
                                            депресією, стресом та відносинами, та завжди готовий допомогти своїм клієнтам
                                            знайти внутрішню гармонію та розвити стратегії самовдосконалення.</p>
                                    </div>
                                </div>
                                <div className={styles.rightSection1}>
                                    <img src="person1.svg" alt="Extra" className={styles.extraImage} />
                                    <div className={styles.learnMoreContainer}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Needs;
