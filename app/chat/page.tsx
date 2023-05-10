import React from "react";
import ChatUsers from "./ChatUsers";
import ChatBox from "./ChatBox";

type Props = {};

function Chat({}: Props) {
    return (
        <div className="chat-card-container">
            <div className="chat-card-users">
                <ChatUsers />
            </div>
            <div className="chat-card-chatBox">
                <ChatBox />
            </div>
        </div>
    );
}

export default Chat;
