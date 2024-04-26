import React, { useState } from 'react';
import styles from './modal.module.css';

const Modal = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className={styles.modal}>
            <h2 className={styles.title}>Бажаєш зареєструвати потребу?</h2>
            <p className={styles.dataInput}>Введи дані:</p>
            <div className={styles.selectWrapper}>
                <div
                    className={styles.selectedOption}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    {selectedOption || 'Виберіть опцію'}
                    <img src="/arrow.svg" alt="Arrow" className={styles.arrowIcon} />
                </div>
                {isDropdownOpen && (
                    <div className={styles.optionsContainer}>
                        <div
                            className={styles.option}
                            onClick={() => handleOptionClick('Збір')}
                        >
                            Збір
                        </div>
                        <div
                            className={styles.option}
                            onClick={() => handleOptionClick('Гуманітарна допомога')}
                        >
                            Гуманітарна допомога
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Modal;