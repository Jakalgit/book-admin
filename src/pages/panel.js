import React, {useState} from 'react';
import styles from "../styles/pages/panel.module.css"
import PagesList from "../components/PagesList";
import BooksWindow from "./windows/BooksWindow";

const Panel = () => {

    const windows = [
        {
            page: 1,
            Component: BooksWindow,
        }
    ]

    const [window, setWindow] = useState(1)

    const updateWindow = (value) => {
        setWindow(value)
    }

    return (
        <div className={styles.block}>
            <PagesList
                window={window}
                setWindow={(value) => updateWindow(value)}
            />
            {windows.map(win =>
                <>
                    {win.page === window &&
                        <win.Component />
                    }
                </>
            )}
        </div>
    );
};

export default Panel;