import Image from "next/image";
import React from "react";
import ChatMessageForm from "./ChatMessageForm";
import ChatMessages from "./ChatMessages";
import { sortDate } from "@utils/constants/function";
import { messageData } from "@utils/data/data";

function ChatBox() {
    return (
        <div className="flex justify-start flex-col h-full">
            <div className="flex-start flex-row">
                <div className="flex-shrink-0">
                    <Image
                        className="w-10 h-10 rounded-full"
                        src="/assets/images/wood.jpg"
                        alt="profile picture"
                        width={20}
                        height={20}
                    />
                </div>
                <div className="ml-4 hidden md:inline-grid">
                    <span className="text-base font-bold text-gray-800">
                        John Doe
                    </span>
                </div>
            </div>
            <div className="rounded-lg m-4 flex flex-col h-[56vh] items-start justify-end">
                <div className="overflow-y-scroll h-full text-sm w-full">
                    {sortDate(messageData).map((message) => (
                        <ChatMessages
                            message={message.message}
                            senderId={message.sender_id}
                            userId={1}
                            senderAvatar={message.sender_avatar}
                            date={message.date}
                        />
                    ))}
                </div>
            </div>
            <ChatMessageForm />
        </div>
    );
}

export default ChatBox;
