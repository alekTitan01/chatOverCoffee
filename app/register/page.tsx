import GuestSectionContainer from "@components/GuestSectionContainer";
import Image from "next/image";
import React from "react";
import SignupCard from "./SignupCard";

type Props = {};

const Registration = (props: Props) => {
    return (
        <GuestSectionContainer className="flex-center flex-wrap">
            <div className="flex-center flex-grow">
                <div className="bg-white text-primary shadow-md rounded-lg">
                    <SignupCard />
                </div>
            </div>
            <div className="flex-center">
                <Image
                    src="/assets/images/chat.png"
                    alt="Chat group"
                    width={900}
                    height={900}
                />
            </div>
        </GuestSectionContainer>
    );
};

export default Registration;
