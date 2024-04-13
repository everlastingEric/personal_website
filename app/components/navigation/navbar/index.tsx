import React from "react";
import Link from "next/link";

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
        <div className="w-full h-20 bg-gradient-to-r from-pink-950 to-teal-800 sticky top-0">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <ul className="hidden md:flex gap-x-6 text-white text-2xl font-anta">
                        <h1>Yifei (Eric) Shen</h1>
                    </ul>
                    <ul className="hidden md:flex gap-x-6 text-white font-papyrus">
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
                    <ul>
                        <button type="button" className="inline-flex items-center md:hidden" onClick={toggle}>
                            {/* Menu icon */}
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 24 24">
                                <path fill="#fff"
                                    d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
                            </svg>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;