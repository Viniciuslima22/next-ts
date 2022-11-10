import Document, { Html, Head, NextScript, Main } from "next/document";


export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet"/>
                <link rel="shortcut icon" href="/ganhos.png" type="image/x-icon" />
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                </body>


            </Html>
        )
    }


}