import React, { useState } from 'react';
import styles from './modal.module.css';

const Modal = () => {
    const [selectedOption1, setSelectedOption1] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [inputValue11, setInputValue11] = useState('');
    const [inputValue12, setInputValue12] = useState('');
    const [inputValue13, setInputValue13] = useState('');
    const [inputValue14, setInputValue14] = useState('');
    const [inputValue15, setInputValue15] = useState('');
    const [inputValue21, setInputValue21] = useState('');
    const [inputValue22, setInputValue22] = useState('');
    const [inputValue23, setInputValue23] = useState('');
    const [inputValue31, setInputValue31] = useState('');
    const [inputValue32, setInputValue32] = useState('');
    const [inputValue33, setInputValue33] = useState('');

    const handleOptionClick1 = (option) => {
        setSelectedOption1(option);
        setIsDropdownOpen1(false);
        if (option === 'Гуманітарна допомога') {
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
                <div className={styles.inputContainer1}>
                    <input
                        type="text"
                        value={inputValue11}
                        onChange={(e) => setInputValue11(e.target.value)}
                        placeholder="Input 11"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        value={inputValue12}
                        onChange={(e) => setInputValue12(e.target.value)}
                        placeholder="Input 12"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        value={inputValue13}
                        onChange={(e) => setInputValue13(e.target.value)}
                        placeholder="Input 13"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        value={inputValue14}
                        onChange={(e) => setInputValue14(e.target.value)}
                        placeholder="Input 14"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        value={inputValue15}
                        onChange={(e) => setInputValue15(e.target.value)}
                        placeholder="Input 15"
                        className={styles.input}
                    />
                </div>
            )}
            {selectedOption1 === 'Гуманітарна допомога' && (
                <div className={styles.inputContainer2}>
                    <input
                        type="text"
                        value={inputValue21}
                        onChange={(e) => setInputValue21(e.target.value)}
                        placeholder="Input 21"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        value={inputValue22}
                        onChange={(e) => setInputValue22(e.target.value)}
                        placeholder="Input 22"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        value={inputValue23}
                        onChange={(e) => setInputValue23(e.target.value)}
                        placeholder="Input 23"
                        className={styles.input}
                    />
                </div>
            )}
            {selectedOption1 === 'Збір' && (
                <div className={styles.selectWrapper}>
                    <div
                        className={styles.selectedOption}
                        onClick={() => setIsDropdownOpen2(!isDropdownOpen2)}
                    >
                        {selectedOption2 || 'Реквізити'}
                        <img src="/arrow.svg" alt="Arrow" className={styles.arrowIcon} />
                    </div>
                    {isDropdownOpen2 && (
                        <div className={styles.inputContainer3}>
                            <input
                                type="text"
                                value={inputValue31}
                                onChange={(e) => setInputValue31(e.target.value)}
                                placeholder="Input 31"
                                className={styles.input}
                            />
                            <input
                                type="text"
                                value={inputValue32}
                                onChange={(e) => setInputValue32(e.target.value)}
                                placeholder="Input 32"
                                className={styles.input}
                            />
                            <input
                                type="text"
                                value={inputValue33}
                                onChange={(e) => setInputValue33(e.target.value)}
                                placeholder="Input 33"
                                className={styles.input}
                            />
                        </div>
                    )}
                </div>
            )}
            <button
                className={styles.registerButton}
                style={{
                    display: selectedOption1 ? 'block' : 'none',
                }}
            >
                Зареєструватись
            </button>
        </div>
    );
};

export default Modal;
