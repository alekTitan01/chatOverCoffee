import Image from "next/image";
import GuestSectionContainer from "@components/GuestSectionContainer";
import LinkingButton from "@components/LinkingButton";

const Home = () => {
    return (
        <GuestSectionContainer>
            <div className="flex-center flex-col gap-10">
                <h1 className="landing-header animate-slide-left initial-slide-left">
                    Connect w/ Confidence
                </h1>
                <p className="desc text-center text-xl animate-slide-right initial-slide-right">
                    Share your mind, life and blend recipe with your coffee bros
                </p>
                <LinkingButton className="animate-slide-up initial-slide-up">
                    Sign Up
                </LinkingButton>
            </div>
            <div className="flex-center flex-row">
                <Image
                    // className="animate-slide-left"
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
