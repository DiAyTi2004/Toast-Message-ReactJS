import React, { useState, useEffect } from 'react';
import styles from './Toast.module.css';
import { useStore } from './stores';

interface ToastInterface {
    id: number;
    type: string;
    label?: string;
    content?: string;
    icon?: string;
    duration?: number;
}

function Toast(props: ToastInterface) {
    const { ToastData } = useStore();
    const { removeToast } = ToastData;
    const {
        id,
        type,
        label,
        content,
        icon,
        duration,
    } = props;

    function getToastType() {
        if (type === 'success') return styles.toast__success;
        if (type === 'info') return styles.toast__infor;
        if (type === 'load') return styles.toast__loading;
        if (type === 'warn') return styles.toast__warning;
        if (type === 'error') return styles.toast__error;
        return {};
    }

    const timer = setTimeout(function () {
        removeToast(id);
    }, (duration || 3000 + 1000));

    function handleClose() {
        removeToast(id);
        clearTimeout(timer);
    }

    return (
        <div className={`${styles.toast} ${getToastType()}`} style={{
            animation: `ScrollIn ease 0.3s, FadeOut linear 1s ${duration || 3000}s forwards`
        }}>
            <div className={styles.toast__icon}>
                <i className={icon}></i>
            </div>
            <div className={styles.toast__body}>
                <div className={styles.toast__heading}>
                    <h2>{label}</h2>
                </div>
                <div className={styles.toast__content} style={!label ? { marginTop: 'unset' } : {}}>
                    <p>{content}</p>
                </div>
            </div>
            <div className={styles.toast__close} onClick={handleClose}>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    );
}

export default Toast;