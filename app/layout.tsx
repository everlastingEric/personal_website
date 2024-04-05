import React from "react"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

            <body>
                {/*whatever is below here and above children should be the heading and drop down menu which stays the same for all pages*/}
                <h1>Yifei (Eric) Shen</h1>
                {children}
            </body>
        </html>
    )
}