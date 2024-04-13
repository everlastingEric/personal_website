import React from "react"
import './global.css'
import Navigation from "./components/navigation"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            {/*whatever is below here and above children should be the heading and drop down menu which stays the same for all pages*/}
            <body className="bg-slate-600">
                <Navigation />
                <div className="font-sourceCodePro text-slate-100">{children}</div>
            </body>
        </html>
    )
}