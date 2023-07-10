"use client";

import Image from "next/image";
import Link from "next/link";
import GuestSectionContainer from "@components/GuestSectionContainer";
import Buttons from "@components/Buttons";
import { useSession } from "next-auth/react";

const Home = () => {
    const { data: session } = useSession();

    const isLoggedIn = session?.user;
    return (
        <GuestSectionContainer className='flex-center flex-wrap'>
            <>
                <div className='flex-center flex-col gap-10'>
                    <h1 className='landing-header animate-slide-left initial-slide-left'>Connect w/ Confidence</h1>
                    <p className='desc text-center text-xl animate-slide-right initial-slide-right'>Share your mind, life and blend recipe with your coffee bros</p>
                    {isLoggedIn ? (
                        <Link href='/chat'>
                            <Buttons className='animate-slide-up initial-slide-up bg-white text-primary px-5 py-2 hover:bg-secondary hover:text-white'>Chat Page</Buttons>
                        </Link>
                    ) : (
                        <Buttons className='animate-slide-up initial-slide-up bg-white text-primary px-5 py-2 hover:bg-secondary hover:text-white'>
                            {/* <span className='flex-start flex-row gap-2'>
                                <Image
                                    alt='google logo'
                                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/256px-Google_%22G%22_Logo.svg.png'
                                    width={20}
                                    height={20}
                                />
                                Sign Up
                            </span> */}
                            hello
                        </Buttons>
                    )}
                </div>
                <div className='flex-center'>
                    <Image
                        src='/assets/images/coffee-image.png'
                        alt='This is coffee'
                        height={600}
                        width={600}
                    />
                </div>
            </>
        </GuestSectionContainer>
    );
};

export default Home;
