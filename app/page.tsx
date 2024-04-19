import React from "react";
import Image from 'next/image';
import introPic from './components/images/intro.jpg';


export default function Page() {
    return (
        <div className="container mx-auto">
            <div className="w-full flex flex-wrap">
                <div className="md:flex md:flex-row pt-5">
                    <Image
                        src={introPic}
                        width={350}
                        height={350}
                        alt="picture of me"
                        className="flex object-scale-down py-3.5 px-4" />
                    <p className="py-3.5 px-24 lg:py-24 indent-8 text-xl">
                        Hi, my name is Eric Shen, welcome to my website! This website will serve as an extended version of my resume where you can learn more about me, my experiences, and the projects I have undertaken. Feel free to explore this website by clicking on any of the links you see, thank you for visiting!
                    </p>
                </div>
                <div className="text-4xl">About me:</div>
                <p>

                </p>
            </div>
        </div>
    );
}
