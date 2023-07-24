import React from 'react';
import styles from "../styles/components/Book.module.css"

const Book = ({ setVisibleModal, setBookIdForDelete }) => {

    const deleteBook = () => {
        setVisibleModal(true)
        setBookIdForDelete(1)
    }

    return (
        <div className={styles.block}>
            <img
                className={styles.image}
                src={require("../img/kandinsky.jpg")}
                alt="book image"
            />
            <p className={styles.name}>
                Шёпот в тени
            </p>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <p className={styles.change + ' ' + styles.btn}>
                    Редактировать
                </p>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <p
                    onClick={deleteBook}
                    className={styles.delete + ' ' + styles.btn}
                >
                    Удалить
                </p>
            </div>
        </div>
    );
};

export default Book;