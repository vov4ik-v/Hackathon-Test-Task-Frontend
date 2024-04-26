import React, { useState } from 'react';
import styles from './modal.module.css';

const Modal = () => {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [inputValue5, setInputValue5] = useState('');

    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        setIsDropdownOpen1(false);
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
                    <div className={styles.optionsContainer} style={{ zIndex: 1 }}>
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
                <>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            value={inputValue1}
                            onChange={(e) => setInputValue1(e.target.value)}
                            placeholder="Input 1"
                            className={styles.input}
                        />
                        <input
                            type="text"
                            value={inputValue2}
                            onChange={(e) => setInputValue2(e.target.value)}
                            placeholder="Input 2"
                            className={styles.input}
                        />
                        <input
                            type="text"
                            value={inputValue3}
                            onChange={(e) => setInputValue3(e.target.value)}
                            placeholder="Input 3"
                            className={styles.input}
                        />
                        <input
                            type="text"
                            value={inputValue4}
                            onChange={(e) => setInputValue4(e.target.value)}
                            placeholder="Input 4"
                            className={styles.input}
                        />
                        <input
                            type="text"
                            value={inputValue5}
                            onChange={(e) => setInputValue5(e.target.value)}
                            placeholder="Input 5"
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.selectWrapper}>
                        <div
                            className={styles.selectedOption}
                            onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                        >
                            {selectedOption2 || 'Реквізити'}
                            <img src="/arrow.svg" alt="Arrow" className={styles.arrowIcon} />
                        </div>
                        {isDropdownOpen2 && (
                            <div className={styles.inputContainer}>
                                <input
                                    type="text"
                                    value={inputValue1}
                                    onChange={(e) => setInputValue1(e.target.value)}
                                    placeholder="Input 1"
                                    className={styles.input}
                                />
                                <input
                                    type="text"
                                    value={inputValue2}
                                    onChange={(e) => setInputValue2(e.target.value)}
                                    placeholder="Input 2"
                                    className={styles.input}
                                />
                                <input
                                    type="text"
                                    value={inputValue3}
                                    onChange={(e) => setInputValue3(e.target.value)}
                                    placeholder="Input 3"
                                    className={styles.input}
                                />
                                <input
                                    type="text"
                                    value={inputValue4}
                                    onChange={(e) => setInputValue4(e.target.value)}
                                    placeholder="Input 4"
                                    className={styles.input}
                                />
                                <input
                                    type="text"
                                    value={inputValue5}
                                    onChange={(e) => setInputValue5(e.target.value)}
                                    placeholder="Input 5"
                                    className={styles.input}
                                />
                            </div>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default Modal;
