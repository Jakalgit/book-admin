import React, {useState} from 'react';
import styles from "../../styles/windows/BookWindow.module.css"
import Book from "../../components/Book";
import DeleteModal from "../../components/DeleteModal";

const BooksWindow = () => {

    const [visibleModal, setVisibleModal] = useState(false)
    const [bookIdForDelete, setBookIdForDelete] = useState(-1)

    const updateVisibleModal = (value) => {
        setVisibleModal(value)
    }

    const updateBookForDelete = (value) => {
        setBookIdForDelete(value)
    }

    return (
        <>
            <DeleteModal
                visible={visibleModal}
                setVisible={(value) => updateVisibleModal(value)}
            />
            <div className={styles.block + ' fd'}>
                <div className={styles.up_line}>
                    <button
                        className={styles.btn_add}
                    >
                        Добавить книгу
                    </button>
                </div>
                <div className={styles.list}>
                    {[1,1,1,1,1,1,1,1,1,1,1,1].map(() =>
                        <Book
                            setVisibleModal={(value) => updateVisibleModal(value)}
                            setBookIdForDelete={(value) => updateBookForDelete(value)}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default BooksWindow;