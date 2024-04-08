"use client"
import React, { useState } from "react";

type popupProps = {
    children: React.JSX.Element;
    title: string;
}


const Popup = ({ children, title }: popupProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="px-4 py-4">
            <button className="size-80 bg-teal-300 text-4xl font-anta rounded-lg" onClick={() => setIsOpen(true)}>{title}</button>

            {isOpen && (<div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center item-center" >
                <div className="self-center h-5/6 bg-teal-100 bg-clip-border p-2 container mx-auto px-4 rounded-lg display inline-block item-center overflow-auto">
                    <button onClick={() => setIsOpen(false)}>X</button>
                    <div className="text-center text-pretty text-wrap">{children}</div>
                </div>
            </div>)}
        </div>
    );
}

export default Popup;