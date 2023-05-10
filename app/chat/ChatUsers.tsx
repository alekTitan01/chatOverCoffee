import React from "react";
import Image from "next/image";
import { chatMockData } from "@utils/data/data";

type UserComponentProps = {
    message: string;
    name: string;
};

const User = ({ message, name }: UserComponentProps) => {
    return (
        <div className="chat-card-user-container">
            <div className="flex-shrink-0">
                <Image
                    className="w-10 h-10 rounded-full"
                    src="/assets/images/wood.jpg"
                    alt="Avatar"
                    width={20}
                    height={20}
                />
            </div>
            <div className="ml-4 hidden md:inline-grid">
                <div className="text-sm font-bold text-gray-800">{name}</div>
                <div className="text-xs text-slate-500 truncate w-auto">
                    {message}
                </div>
            </div>
        </div>
    );
};

function ChatUsers() {
    return (
        <>
            {chatMockData.map((message) => (
                <User
                    message={message.message}
                    name={message.name}
                    key={JSON.stringify(message)}
                />
            ))}
        </>
    );
}

export default ChatUsers;
