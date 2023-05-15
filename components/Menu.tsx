import { MenuItems } from "@utils/types/main";
import Link from "next/link";
import React from "react";

type Props = {
    open: boolean;
    items: MenuItems[];
    containerStyle?: string;
};

function Menu({ open, items, containerStyle = "" }: Props) {
    return (
        <div
            className={`z-10 ${
                !open && "hidden"
            } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-16 ${containerStyle}`}
        >
            <ul className="py-2 text-sm text-gray-700">
                {items.map((item) => (
                    <li key={item.key} className=" cursor-pointer">
                        {!item.isLink ? (
                            <span
                                onClick={item.clickEvent}
                                className={`px-4 py-2 hover:bg-gray-100 ${item.className}`}
                            >
                                {item.title}
                            </span>
                        ) : (
                            <Link href={item.path ?? ""}>
                                <span
                                    onClick={item.clickEvent}
                                    className={`px-4 py-2 hover:bg-gray-100 ${item.className}`}
                                >
                                    {item.title}
                                </span>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Menu;
