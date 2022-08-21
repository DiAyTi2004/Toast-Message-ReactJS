import React from 'react';
import styles from './Toast/Toast.module.css';

import { GetToast } from '../components/Toast/stores';

function Main() {
    const toast = GetToast();

    function onClickSuccessButton() {
        toast.success("This is success toast", "Success");
    }

    function onClickInfoButton() {
        toast.info("This is Infor toast", "Infor");
    }

    function onClickLoadButton() {
        toast.load("This is Loading toast", "Loading");
    }

    function onClickWarnButton() {
        toast.warn("This is Warning toast", "Warning");
    }

    function onClickErrorButton() {
        toast.error("This is Error toast", "Error");
    }

    return (
        <div id="root">
            <div className={styles.noti}>
                <i className="fa-solid fa-bell noti__icon"></i>
            </div>
            <div id="toast"></div>
            <div className={styles.wrapper}>
                <div
                    className={`${styles.btn} ${styles.btn__success}`}
                    onClick={onClickSuccessButton}
                >
                    <h3 className={styles.btn__content}>Show Success toast</h3>
                </div>
                <div
                    className={`${styles.btn} ${styles.btn__infor}`}
                    onClick={onClickInfoButton}
                >
                    <h3 className={styles.btn__content}>Show Infor toast</h3>
                </div>
                <div
                    className={`${styles.btn} ${styles.btn__loading}`}
                    onClick={onClickLoadButton}
                >
                    <h3 className={styles.btn__content}>Show Loading toast</h3>
                </div>
                <div
                    className={`${styles.btn} ${styles.btn__warning}`}
                    onClick={onClickWarnButton}
                >
                    <h3 className={styles.btn__content}>Show Warning toast</h3>
                </div>
                <div
                    className={`${styles.btn} ${styles.btn__error}`}
                    onClick={onClickErrorButton}
                >
                    <h3 className={styles.btn__content}>Show Error toast</h3>
                </div>
            </div>

            <div className={styles.wrapper}>
                <div className={`${styles.toast} ${styles.toast__success}`}>
                    <div className={styles.toast__icon}>
                        <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <div className={styles.toast__body}>
                        <div className={styles.toast__heading}>
                            <h2>Success</h2>
                        </div>
                        <div className={styles.toast__content}>
                            <p>This is success toast</p>
                        </div>
                    </div>
                    <div className={styles.toast__close}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;