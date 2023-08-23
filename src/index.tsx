import React, { memo } from 'react';
import { createRoot }  from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import { themeLight, themeDark } from 'styles/theme';
import { AppThemeProvider, useAppTheme } from 'context/appTheme';
import Routes from 'routes';

const AppRenderTheme: React.FC = memo(() => {
    const { theme } = useAppTheme();
    return (
        <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
            <GlobalStyle />
            <Routes />
        </ThemeProvider>
    );
});

AppRenderTheme.displayName = 'AppRenderTheme';

const App: React.FC = () => {
    return (
        <AppThemeProvider>
            <AppRenderTheme />
        </AppThemeProvider>
    );
};

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
