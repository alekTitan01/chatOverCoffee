"use client";

import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { BiSend } from "react-icons/bi";

type Props = {};

function ChatMessageForm({}: Props) {
    const form = useForm<FieldValues>();

    const { register, handleSubmit } = form;

    const onMessage = (data: FieldValues) => {
        console.log("data", data);
    };

    return (
        <div className="w-full p-4">
            <form
                noValidate
                onSubmit={handleSubmit(onMessage)}
                className="chat-message-form"
            >
                <input
                    {...register("message")}
                    placeholder="Enter your message"
                />
                <button type="submit" className="flex-center">
                    <BiSend className="text-slate-400 h-9 w-9 p-2 transition-all hover:bg-secondary hover:text-primary rounded-full border-2 border-slate-400 duration-200" />
                </button>
            </form>
        </div>
    );
}

export default ChatMessageForm;
