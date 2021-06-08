import { createDarkTheme } from 'baseui'

const breakpoints = {
    xSmall: 320,
    small: 480,
    medium: 768,
    large: 1240,
}

const primitives = {}

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
        backgroundPrimary: '#0A0056',
        buttonPrimaryFill: '#292493',
        buttonPrimaryHover: '#0A0056',
        buttonPrimaryText: '#63D7E2',
        textColor: '#ffffff',
        backgroundColor: '#0A0056',
        transparentColor: '#494E99',
        oppositeColor: '#eeeeee',
        mainColor: '#63D7E2',
        accentColor: '#292493',
        auxColor: '#FC9E92',
        logo1: '#f1f1f1',
        logo2: '#6DCCDA',
    },
    customTexts: {
        dimText: 'Switch ON the lights',
    },
}

const YorgoDarkTheme = createDarkTheme(primitives, overrides)

export default YorgoDarkTheme
