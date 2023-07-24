import React from 'react';
import styles from "../styles/components/PagesList.module.css"

const PagesList = ({ window, setWindow }) => {



    return (
        <div className={styles.list}>
            <p
                onClick={() => setWindow(1)}
                className={styles.item + ' ' + (window === 1 && styles.current)}
            >
                Книги
            </p>
            <p
                onClick={() => setWindow(2)}
                className={styles.item + ' ' + (window === 2 && styles.current)}
            >
                Жанры
            </p>
            <p
                onClick={() => setWindow(3)}
                className={styles.item + ' ' + (window === 3 && styles.current)}
            >
                Продажи
            </p>
        </div>
    );
};

export default PagesList;