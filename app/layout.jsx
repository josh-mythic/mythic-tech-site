import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Mythic Technology'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="mythic">
            <head>
                <link rel="icon" href="/mythic-logo-icon-antique-linen.svg" sizes="any" />

            </head>
            <body className="antialiased text-primary">
                <div className="flex flex-col min-h-screen">
                    <div className="flex flex-col w-full mx-auto grow">
                        <div className="px-6 sm:px-12 pb-12" >
                        <Header />
                        <div className="grow">{children}</div>
                        </div>
                            <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
