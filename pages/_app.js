/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import "../styles/globals.css";
import { React, useEffect, useState } from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider } from "baseui";
import { styletron } from "../styletron";
import YorgoLightTheme from "../src/themes/yorgoLightTheme";
import YorgoDarkTheme from "../src/themes/yorgoDarkTheme";
import Layout from "../src/layout";

const currentThemeLocalStorageName = "site-theme";
const defaultThemeName = "light";
const darkThemeName = "dark";
const allowedThemes = [defaultThemeName, darkThemeName];

function MyApp({ Component, pageProps }) {
  // only set the theme if passed theme value belongs to allowedThemes list
  const setTheme = (theme) => {
    if (allowedThemes.includes(theme)) {
      localStorage.setItem(currentThemeLocalStorageName, theme);
    }
  };

  const getCurrentThemeStyle = () => {
    return localStorage.getItem(currentThemeLocalStorageName);
  };
  const getCurrentTheme = () => {
    const currentThemeStyle = getCurrentThemeStyle();

    if (currentThemeStyle === darkThemeName) {
      return YorgoDarkTheme;
    } else {
      return YorgoLightTheme;
    }
  };
  const toggleTheme = () => {
    const currentThemeStyle = getCurrentThemeStyle();

    if (currentThemeStyle === darkThemeName) {
      setTheme(defaultThemeName);
      setCurrentTheme(YorgoLightTheme);
    } else {
      setTheme(darkThemeName);
      setCurrentTheme(YorgoDarkTheme);
    }
  };

  const [currentTheme, setCurrentTheme] = useState(YorgoLightTheme);
  useEffect(() => {
    setCurrentTheme(getCurrentTheme());
  }, []);
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={currentTheme}>
        <Layout currentTheme={currentTheme} toggleTheme={() => toggleTheme()}>
          <Component {...pageProps} />
        </Layout>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
