import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
    showClose?: boolean;
};

function Modal({ children, open, onClose, showClose = true }: Props) {
    return (
        <div
            onClick={onClose}
            className={`modal-container ${
                open ? "visible bg-white/10 glass z-10" : "invisible"
            }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`relative bottom-36 bg-white rounded-xl shadow-lg p-6 transition-all text-primary ${
                    open ? "scale-100 opacity-100" : "scale-125 opacity-0 "
                }`}
            >
                {showClose && (
                    <span
                        onClick={onClose}
                        className=" absolute right-4 top-2 cursor-pointer font-extrabold text-primary"
                    >
                        x
                    </span>
                )}
                {children}
            </div>
        </div>
    );
}

export default Modal;
