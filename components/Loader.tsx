import React from "react";
import Image from "next/image";

type Props = {};

function Loader({}: Props) {
    return (
        <div className="bg-white/10 glass flex-center w-screen h-screen z-30 absolute top-0 left-0">
            <Image
                className="animate-spin text-white"
                alt="svg"
                src="/assets/icons/loader.svg"
                width={100}
                height={100}
            />
        </div>
    );
}

export default Loader;
