import Layout from '@/components/Layout';
// import '@/styles/globals.css';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import GlobalStyles from '@/components/styles/GlobalStyles';

export default function App({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false);
    const theme = {
        colors: {
            bgColor: darkMode ? '#0D062D' : '#FAFAFA',
            color: darkMode ? '#FAFAFA' : '#0D062D',
            fillColor: darkMode ? 'red' : '#0D062D',
        },
    };
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Layout setDarkMode={setDarkMode}>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}
