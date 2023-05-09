import GuestSectionContainer from "@components/GuestSectionContainer";
import Image from "next/image";
import React from "react";
import SignupCard from "./SignupCard";

type Props = {};

const Registration = (props: Props) => {
    return (
        <GuestSectionContainer className="flex-center">
            <div className="flex-center">
                <div className="bg-white text-primary shadow-md rounded-lg">
                    <SignupCard />
                </div>
            </div>
            <div className="flex-center">
                <Image
                    src="/assets/images/chat.png"
                    alt="Chat group"
                    width={500}
                    height={500}
                />
            </div>
        </GuestSectionContainer>
    );
};

export default Registration;
