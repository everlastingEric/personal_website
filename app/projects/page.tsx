import React from "react";
import Popup from './popup';
import demoProject from './demoProject'

export default function Page() {

    return (
        <div>
            <p>This page will be updated once I have completed more projects, but here is a demo of what it will look like:</p>
            <div className="flex-wrap">
                <Popup children={demoProject} title={"Demo Project 1"} backgroundGradient="bg-gradient-to-r from-red-200 to-purple-50" />
                <Popup children={demoProject} title={"Demo Project 2"} backgroundGradient="bg-gradient-to-r from-orange-500 to-amber-200" />
                <Popup children={demoProject} title={"Demo project 3"} backgroundGradient="bg-gradient-to-r from-lime-400 to-emerald-400" />
            </div>
        </div>
    )

}
