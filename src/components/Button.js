import React from 'react';
import styles from "../styles/components/Button.module.css"

const Button = ({ text, styleWrap = "", styleBtn = "", loading, onClick }) => {
    return (
        <div className={styles.wrapper + ' ' + styleWrap}>
            {loading ?
                <></>
                :
                <button
                    onClick={onClick}
                    className={styles.button + ' ' + styleBtn}
                >
                    {text}
                </button>
            }
        </div>
    );
};

export default Button;