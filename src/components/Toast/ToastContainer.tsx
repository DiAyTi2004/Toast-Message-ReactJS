import { observer } from "mobx-react";
import styles from './Toast.module.css';
import Toast from './Toast';
import { useStore } from './stores';

function ToastContainer() {
    const { ToastData } = useStore();
    const { toastList, removeToast } = ToastData;

    return (
        <div className={styles.toastContainer}>
            {
                toastList?.map(function (toastProps: any) {
                    const { id } = toastProps;

                    return (
                        <Toast
                            key={id}
                            {...toastProps}
                            id={id}
                        />
                    );
                })
            }
        </div>
    );
}

export default observer(ToastContainer);