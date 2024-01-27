import React from 'react';
import Sidebar from './Sidebar';
import GlobalStyles from './styles/GlobalStyles';
import Header from './Header';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const jakarta = Plus_Jakarta_Sans({
    weight: ['400', '500', '600', '700', '800'],
    subsets: ['latin'],
});

export default function Layout({ children, setDarkMode }) {
    return (
        <>
            <Sidebar setDarkMode={setDarkMode} />
            <main className={`main--container ${jakarta.className}`}>
                <Header />
                {children}
            </main>
        </>
    );
}
