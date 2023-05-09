import LinkingButton from "@components/LinkingButton";
import Image from "next/image";
import React from "react";

const Home = () => {
    return (
        <section className="w-full content gap-6 grid grid-cols-1 height-65 md:grid-cols-2 md:grid-flow-row">
            <div className="flex-center flex-col gap-10">
                <h1 className="landing-header animate-slide-left">
                    Connect w/ Confidence
                </h1>
                <p className="desc text-center text-xl animate-slide-right">
                    Share your mind, life and blend recipe with your coffee bros
                </p>
                <LinkingButton className="animate-slide-up">
                    Sign Up
                </LinkingButton>
            </div>
            <div className="flex-center">
                <Image
                    src="/assets/images/coffee-image.png"
                    alt="This is coffee"
                    height={600}
                    width={600}
                />
            </div>
        </section>
    );
};

export default Home;
