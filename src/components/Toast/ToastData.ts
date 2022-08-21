import { makeAutoObservable } from "mobx";

interface ToastData {
    content?: string;
    label?: string;
    duration?: number;
}

interface ToastInterface {
    label?: string;
    content?: string;
    type: string;
    icon?: string;
    duration?: number;
    id: number;
}

class ToastData {
    constructor() {
        makeAutoObservable(this);
    }

    id = 0;
    toastList: Array<ToastInterface> = [];

    addToast = (toast: ToastInterface) => {
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            load: 'fa-solid fa-spinner',
            warn: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-xmark',
        };

        function getIcon(toastType: string) {
            if (toastType === 'success') return icons.success;
            if (toastType === 'info') return icons.info;
            if (toastType === 'load') return icons.load;
            if (toastType === 'warn') return icons.warn;
            if (toastType === 'error') return icons.error;
            return '';
        }

        this.toastList.push({
            ...toast,
            icon: getIcon(toast.type)
        });
    };

    removeToast = (id: number) => {
        let index = -1;
        for (let i = 0; i < this.toastList.length; i++) {
            if( this.toastList[i].id!== id) continue;
            index= i;
            break;
        }
        this.toastList.splice(index, 1);
    }

    toast = {
        success: (content: string, label?: string, duration?: number) => {
            this.addToast({
                content,
                label,
                type: 'success',
                duration,
                id: this.id++,
            });
        },
        info: (content: string, label?: string, duration?: number) => {
            this.addToast({
                content,
                label,
                type: 'info',
                duration,
                id: this.id++,
            });
        },
        load: (content: string, label?: string, duration?: number) => {
            this.addToast({
                content,
                label,
                type: 'load',
                duration,
                id: this.id++,
            });
        },
        warn: (content: string, label?: string, duration?: number) => {
            this.addToast({
                content,
                label,
                type: 'warn',
                duration,
                id: this.id++,
            });
        },
        error: (content: string, label?: string, duration?: number) => {
            this.addToast({
                content,
                label,
                type: 'error',
                duration,
                id: this.id++,
            });
        },
    }
}

export default ToastData;