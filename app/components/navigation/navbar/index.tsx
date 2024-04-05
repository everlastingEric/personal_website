import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full h-20 bg-emerald-800 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <ul className="hidden md:flex gap-x-6 text-white">
                        <li>
                            <Link href="/">
                                <p>Home/About Me</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/professional_experiences">
                                <p>Professional Experiences</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <p>Projects</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/additional_information">
                                <p>Additional Information</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;