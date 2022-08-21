import { createContext, useContext } from "react";
import ToastData from './ToastData';

const StoreContext = createContext({
    ToastData: new ToastData(),
});

export function useStore() {
    return useContext(StoreContext);
}

export function GetToast() {
    const { ToastData } = useContext(StoreContext);
    const { toast } = ToastData;

    return toast;
}