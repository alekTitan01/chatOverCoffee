"use client";

import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    open: boolean;
    extra?: ReactNode;
    onClose: () => void;
};

function Modal({ children, open, extra, onClose }: Props) {
    return (
        <div
            onClick={onClose}
            className={`modal-container ${
                open ? "visible bg-black/20" : "invisible"
            }`}
        >
            {children}
        </div>
    );
}

export default Modal;
