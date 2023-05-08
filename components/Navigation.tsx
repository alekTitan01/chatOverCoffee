import Image from "next/image";
import React from "react";

type Props = {};

function Navigation({}: Props) {
    return (
        <div className="navigation flex-between">
            <Image
                src="/assets/images/logo.jpg"
                alt="Chat over Coffee"
                height={50}
                width={50}
            />
            Navigations
        </div>
    );
}

export default Navigation;
