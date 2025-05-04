import React, { useState, useEffect } from 'react';

// material-ui
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// third-party
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

// project import
import theme from 'themes';
import ThemeRoutes from 'routes';
import NavigationScroll from './NavigationScroll';
import Snackbar from 'component/Snackbar/index';

// auth provider
// import { FirebaseProvider as AuthProvider } from 'contexts/FirebaseContext';
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
// import { Auth0Provider as AuthProvider } from 'contexts/Auth0Context';

function loadLocaleData(locale) {
  switch (locale) {
    case 'fr':
      return import('utils/locales/fr.json');
    case 'ro':
      return import('utils/locales/ro.json');
    case 'zh':
      return import('utils/locales/zh.json');
    default:
      return import('utils/locales/en.json');
  }
}

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);
  const { locale, rtlLayout } = customization;
  const [messages, setMessages] = useState();

  useEffect(() => {
    loadLocaleData(locale).then((d) => {
      setMessages(d.default);
    });
  }, [locale]);

  useEffect(() => {
    document.dir = rtlLayout ? 'rtl' : 'ltr';
  }, [rtlLayout]);

  const cacheRtl = createCache({
    key: rtlLayout ? 'rtl' : 'css',
    prepend: true,
    stylisPlugins: rtlLayout ? [rtlPlugin] : []
  });

  return (
    <>
      {messages && (
        <IntlProvider locale={customization.locale} defaultLocale="en" messages={messages}>
          <NavigationScroll>
            <StyledEngineProvider injectFirst>
              <ThemeProvider theme={theme(customization)}>
                <CssBaseline />
                <CacheProvider value={cacheRtl}>
                  <AuthProvider>
                    <ThemeRoutes />
                    <Snackbar />
                  </AuthProvider>
                </CacheProvider>
              </ThemeProvider>
            </StyledEngineProvider>
          </NavigationScroll>
        </IntlProvider>
      )}
    </>
  );
};

export default App;
