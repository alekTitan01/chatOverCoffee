import { ReactNode } from "react";

export type MessageType = {
    message: string;
    sender_id: number;
    receiver_id: number;
    sender_avatar: string;
    date: string;
};

export type MenuItems = {
    clickEvent?: () => void;
    title: ReactNode;
    path?: string;
    isLink: boolean;
    key: string;
    className?: string;
};
