import React, { useState } from 'react';
import styles from './modal.module.css';

const Modal = () => {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        setIsDropdownOpen1(false);
        if (option !== 'Збір') {
            setIsDropdownOpen2(false);
        }
    };

    const handleOptionClick2 = (option) => {
        setSelectedOption2(option);
        setIsDropdownOpen2(false);
    };

    return (
        <div className={styles.modal}>
            <h2 className={styles.title}>Бажаєш зареєструвати потребу?</h2>
            <p className={styles.dataInput}>Введи дані:</p>
            <div className={styles.selectWrapper}>
                <div
                    className={styles.selectedOption}
                    onClick={() => setIsDropdownOpen1(!isDropdownOpen1)}
                >
                    {selectedOption1 || 'Виберіть опцію'}
                    <img src="/arrow.svg" alt="Arrow" className={styles.arrowIcon} />
                </div>
                {isDropdownOpen1 && (
                    <div className={styles.optionsContainer}>
                        <div
                            className={styles.option}
                            onClick={() => handleOptionClick1('Збір')}
                        >
                            Збір
                        </div>
                        <div
                            className={styles.option}
                            onClick={() => handleOptionClick1('Гуманітарна допомога')}
                        >
                            Гуманітарна допомога
                        </div>
                    </div>
                )}
            </div>
            {selectedOption1 === 'Збір' && (
                <div className={styles.selectWrapper}>
                    <div
                        className={styles.selectedOption}
                        onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                    >
                        {selectedOption2 || 'Виберіть опцію'}
                        <img src="/arrow.svg" alt="Arrow" className={styles.arrowIcon} />
                    </div>
                    {isDropdownOpen2 && (
                        <div className={styles.optionsContainer}>
                            <div
                                className={styles.option}
                                onClick={() => handleOptionClick2('Option 1')}
                            >
                                Option 1
                            </div>
                            <div
                                className={styles.option}
                                onClick={() => handleOptionClick2('Option 2')}
                            >
                                Option 2
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Modal;
