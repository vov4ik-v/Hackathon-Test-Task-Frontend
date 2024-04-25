import styles from './extraHelp.module.css';

const ExtraHelp = () => {
    return (
        <div className={styles.extraHelpContainer}>
            <h2 className={styles.title}>Нагальна потреба</h2>
            <div className={styles.sectionsContainer}>
                <div className={styles.leftSection}>
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
                </div>
                <div className={styles.rightSection}>
                    {/* Пустий розділ */}
                </div>
            </div>
        </div>
    );
};

export default ExtraHelp;
