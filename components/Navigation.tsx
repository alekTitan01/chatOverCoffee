"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Modal from "./Modal";
import SignIn from "./SignIn";
import Buttons from "./Buttons";
import {
    signIn,
    signOut,
    useSession,
    getProviders,
    LiteralUnion,
    ClientSafeProvider,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import Menu from "./Menu";

function Navigation() {
    const { data: session } = useSession();

    const [isSignInOpen, setIsSignInOpen] = useState(false);
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
    const [providers, setProviders] = useState<Record<
        LiteralUnion<BuiltInProviderType, string>,
        ClientSafeProvider
    > | null>(null);

    const setupProviders = async () => {
        const response = await getProviders();
        setProviders(response);
    };

    useEffect(() => {
        setupProviders();
    }, []);

    const isUserLoggedIn = session?.user;

    const menuItems = [
        {
            key: "profile",
            isLink: true,
            title: "User Profile",
            path: "/profile",
            className: "flex-center",
        },
        {
            key: "signout",
            isLink: false,
            className: "flex-center",
            title: (
                <Buttons
                    className="border-2 rounded-xl bg-primary text-white px-4 py-1 hover:bg-secondary hover:text-primary"
                    onClick={() => {
                        setIsLogoutModalOpen(true);
                        setToggleMenu(false);
                    }}
                >
                    Sign out
                </Buttons>
            ),
            path: "/profile",
        },
    ];

    return (
        <>
            <div className="navigation flex-between">
                <Link href="/" className="flex-start gap-5">
                    <Image
                        height={50}
                        width={50}
                        src="/assets/images/logo.jpg"
                        alt="Chat over Coffee"
                    />
                    <span className="font-bold text-base hidden sm:inline-block">
                        Chat over Coffee
                    </span>
                </Link>
                <div className="flex-between gap-10">
                    {isUserLoggedIn ? (
                        <div className="flex-center flex-row gap-2 hidden sm:inline-flex ">
                            <Buttons onClick={() => setIsLogoutModalOpen(true)}>
                                Sign out
                            </Buttons>
                            <Link href="/profile">
                                <Image
                                    className="rounded-full h-12 w-12 p-2"
                                    height={50}
                                    width={50}
                                    src="/assets/images/coffee.jpg"
                                    alt="profile"
                                />
                            </Link>
                        </div>
                    ) : (
                        providers &&
                        Object.values(providers).map((provider) => (
                            <Buttons
                                key={provider.name}
                                onClick={() => signIn(provider.id)}
                            >
                                Sign In
                            </Buttons>
                        ))
                    )}
                    <div className="flex-center flex-row gap-2 sm:hidden">
                        <Image
                            onClick={() =>
                                setToggleMenu((prevState) => !prevState)
                            }
                            className="rounded-full h-12 w-12 p-2 cursor-pointer"
                            height={50}
                            width={50}
                            src="/assets/images/coffee.jpg"
                            alt="profile"
                        />
                        <Menu
                            open={toggleMenu}
                            items={menuItems}
                            containerStyle="px-2"
                        />
                    </div>
                </div>
                <Modal
                    open={isSignInOpen}
                    onClose={() => setIsSignInOpen(false)}
                >
                    <SignIn />
                </Modal>
                <Modal
                    open={isLogoutModalOpen}
                    onClose={() => setIsLogoutModalOpen(false)}
                >
                    <div>
                        <div className="mt-2 flex-start flex-col p-3 gap-5">
                            <h1>Are you sure you want to sign out?</h1>
                            <div className="w-full flex-end flex-row gap-6">
                                <Buttons
                                    onClick={signOut}
                                    className="hover:text-secondary"
                                >
                                    Yes
                                </Buttons>
                                <Buttons
                                    className="border-2 rounded-xl bg-primary text-white px-4 py-1 hover:bg-secondary hover:text-primary"
                                    onClick={() => setIsLogoutModalOpen(false)}
                                >
                                    No
                                </Buttons>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    );
}

export default Navigation;
