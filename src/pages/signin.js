import React, {useState} from 'react';
import styles from "../styles/pages/signin.module.css"
import HeightWrapper from "../components/HeightWrapper";
import Input from "../components/Input";
import Button from "../components/Button";

const SignIn = () => {

    const [token, setToken] = useState('')
    const [id, setId] = useState('')

    const [loadingData, setLoadingData] = useState(false)
    const [loadingIn, setLoadingIn] = useState(false)

    const updateToken = (value) => {
        setToken(value)
    }

    const updateId = (value) => {
        setId(value)
    }

    const getDataOnEmail = () => {

    }

    const signIn = () => {

    }

    return (
        <HeightWrapper>
            <div className={styles.wrapper}>
                <div className={styles.block}>
                    <p className={styles.text}>Вход</p>
                    <Input
                        placeholder="Token"
                        value={token}
                        onChange={(value) => updateToken(value)}
                    />
                    <Input
                        placeholder="ID"
                        value={id}
                        onChange={(value) => updateId(value)}
                    />
                    <Button
                        styleWrap={styles.btn_mt}
                        text="Получить"
                        loading={loadingData}
                    />
                    <Button
                        styleWrap={styles.btn_mt}
                        text="Войти"
                        loading={loadingIn}
                    />
                </div>
            </div>
        </HeightWrapper>
    );
};

export default SignIn;