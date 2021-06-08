import { createLightTheme } from 'baseui'

const primitives = {}

const breakpoints = {
    xSmall: 320,
    small: 480,
    medium: 768,
    large: 1240,
}

const overrides = {
    typography: {
        DisplayMedium: {
            fontFamily: `'Jura', 'sans-serif'`,
        },
        DisplayLarge: {
            fontFamily: `'Jura', 'sans-serif'`,
        },
    },
    breakpoints: breakpoints,
    colors: {
        backgroundPrimary: '#ffffff',
        buttonPrimaryFill: '#292493',
        buttonPrimaryHover: '#0A0056',
        buttonPrimaryText: '#63D7E2',
        textColor: '#000000',
        backgroundColor: '#ffffff',
        transparentColor: '#cccccc',
        oppositeColor: '#0A0056',
        mainColor: '#292493',
        accentColor: '#63D7E2',
        auxColor: '#FC9E92',
        logo1: '#2E348C',
        logo2: '#6DCCDA',
    },
    customTexts: {
        dimText: 'Switch OFF the lights',
    },
}

const YorgoLightTheme = createLightTheme(primitives, overrides)

export default YorgoLightTheme
