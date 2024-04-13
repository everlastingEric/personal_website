import React from "react";
import Popup from './popup';
import demoProject from './demoProject'

export default function Page() {

    return (
        <div>
            <p>This page will be updated once I have completed more projects, but here is a demo of what it will look like:</p>
            <div className="flex flex-wrap">
                <Popup children={demoProject} title={"Demo Project 1"} backgroundGradient="bg-gradient-to-tr from-purple-950 to-amber-800" />
                <Popup children={demoProject} title={"Demo Project 2"} backgroundGradient="bg-gradient-to-tr from-fuchsia-800 to-zinc-700" />
                <Popup children={demoProject} title={"Demo Project 3"} backgroundGradient="bg-gradient-to-tr from-emerald-900 to-emerald-400" />
            </div>
        </div>
    )

}
