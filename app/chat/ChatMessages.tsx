import Image from "next/image";
import React from "react";

type Props = {
    message: string;
    senderId: number;
    senderAvatar: string;
    date: string;
    userId: number;
};

type SenderType = {
    message: string;
    senderAvatar: string;
};

type ReceiverType = {
    message: string;
};

const SenderMessage = ({ message, senderAvatar }: SenderType) => {
    return (
        <div className="flex items-end justify-start flex-row w-full gap-2 py-3">
            <Image
                src={senderAvatar}
                alt="Sender profile"
                width={50}
                height={50}
                className="w-8 y-8 rounded-[50%]"
            />
            <div className="bg-sky-300 p-2 rounded-xl">{message}</div>
        </div>
    );
};

const ReceiverMessage = ({ message }: ReceiverType) => {
    return (
        <div className="flex-end flex-row w-full py-3">
            <div className="bg-slate-300 p-2 rounded-xl">{message}</div>
        </div>
    );
};

function ChatMessages({
    message,
    senderId,
    userId,
    senderAvatar,
    date,
}: Props) {
    return (
        <>
            {senderId === userId ? (
                <ReceiverMessage message={message} />
            ) : (
                <SenderMessage message={message} senderAvatar={senderAvatar} />
            )}
        </>
    );
}

export default ChatMessages;
