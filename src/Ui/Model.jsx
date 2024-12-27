import { useRef } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open,onClose, className = '' }) {
    const dailog = useRef();


    useEffect(() => {
        const modal = dailog.current;
        if (open) {
            modal.showModal();
        }
        return () => modal.close();
    }, [open]);
    return createPortal(
        <dialog ref={dailog} className={`modal ${className}`} onClose={onClose}>{children}</dialog>,
        document.getElementById("modal")
    );
}