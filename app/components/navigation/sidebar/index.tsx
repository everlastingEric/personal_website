import React from 'react';
import Link from "next/link";

const Sidebar = ({
    isOpen,
    toggle,
}: {
    isOpen: boolean;
    toggle: () => void;
}): JSX.Element => {
    return (
        <>
            <div
                className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-gradient-to-t from-pink-950 to-teal-800 grid pt-[120px] left-0 z-10"
                style={{
                    opacity: `${isOpen ? "1" : "0"}`,
                    top: ` ${isOpen ? "0" : "-100%"}`,
                }}
            >
                <button className="absolute right-0 p-5" onClick={toggle}>
                    {/* Close icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                        <path
                            fill="white"
                            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                        />
                    </svg>
                </button>

                <ul className="sidebar-nav text-center leading-relaxed text-xl font-papyrus text-white">
                    <li>
                        <Link href="/" onClick={toggle}><p>Home/About me</p></Link>
                    </li>
                    <li>
                        <Link href="/professional_experiences" onClick={toggle}><p>Professional Experiences</p></Link>
                    </li>
                    <li>
                        <Link href="/projects" onClick={toggle}><p>Projects</p></Link>
                    </li>
                    <li>
                        <Link href="/additional_information" onClick={toggle}><p>Additional Information</p></Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;