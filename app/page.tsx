import Image from "next/image";
import Link from "next/link";
import GuestSectionContainer from "@components/GuestSectionContainer";
import Buttons from "@components/Buttons";

const Home = () => {
    return (
        <GuestSectionContainer className="flex-center flex-wrap">
            <div className="flex-center flex-col gap-10">
                <h1 className="landing-header animate-slide-left initial-slide-left">
                    Connect w/ Confidence
                </h1>
                <p className="desc text-center text-xl animate-slide-right initial-slide-right">
                    Share your mind, life and blend recipe with your coffee bros
                </p>
                <Link href="/register">
                    <Buttons className="animate-slide-up initial-slide-up bg-white text-primary px-5 py-2 hover:bg-secondary hover:text-white">
                        Sign Up
                    </Buttons>
                </Link>
            </div>
            <div className="flex-center">
                <Image
                    src="/assets/images/coffee-image.png"
                    alt="This is coffee"
                    height={600}
                    width={600}
                />
            </div>
        </GuestSectionContainer>
    );
};

export default Home;
