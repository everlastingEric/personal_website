"use client"
import React, { useEffect, useState } from "react";

type popupProps = {
    children: React.JSX.Element;
    title: string;
    backgroundGradient: string;
}


const Popup = ({ children, title, backgroundGradient }: popupProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = (e: Event) => {
            e.preventDefault();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("scroll", handleScroll, { passive: false });
        } else {
            document.body.style.overflow = "auto";
            document.removeEventListener("scroll", handleScroll);
        }

        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen]);
    const buttonCSS = "w-96 h-40 text-4xl font-papyrus rounded-lg border border-white hover:border-dotted hover:text-slate-400 " + backgroundGradient;

    return (
        <div className="px-4 py-4">
            <button className={buttonCSS} onClick={() => setIsOpen(true)}>{title}</button>
            {
                isOpen && (<div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center item-center" >
                    <div className="self-center h-5/6 bg-gray-700 bg-clip-border p-2 container mx-auto px-4 rounded-lg display inline-block item-center overflow-auto">
                        <button className="text-red-400 text-xl" onClick={() => setIsOpen(false)}>X</button>
                        <div className="text-center text-slate-400 text-pretty text-wrap">{children}</div>
                    </div>
                </div>)
            }
        </div >
    );
}

export default Popup;