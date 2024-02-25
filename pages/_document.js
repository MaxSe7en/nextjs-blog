import { Html, Head, Main, NextScript } from 'next/document'
import Home from '.'
export default function Document() {
    return (
        <Html>
            <Head>
                <script src="/Assets/libs/leader-line.min.js"></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}