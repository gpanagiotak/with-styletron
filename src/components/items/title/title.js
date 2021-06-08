import React from 'react'
import { styled, useStyletron } from 'baseui'

const BgTitle = styled('div', ({ $theme }) => {
    return {
        fontSize: '42px',
        lineHeight: '36px',
        color: $theme.colors.transparentColor,
        fontWeight: 'normal',
        zIndex: '98',
        [$theme.mediaQuery.small]: {
            fontSize: '48px',
            lineHeight: '38px',
        },
        [$theme.mediaQuery.medium]: {
            fontSize: '64px',
            lineHeight: '54px',
        },
        [$theme.mediaQuery.large]: {
            fontSize: '74px',
            lineHeight: '70px',
        },
    }
})

const MainTitle = styled('div', ({ $theme }) => {
    return {
        fontSize: '30px',
        maxWidth: '300px',
        lineHeight: '28px',
        color: $theme.colors.mainColor,
        fontWeight: '800',
        zIndex: '99',
        transform: 'translateY(-35%)',
        [$theme.mediaQuery.small]: {
            maxWidth: '360px',
            fontSize: '38px',
            lineHeight: '36px',
        },
        [$theme.mediaQuery.medium]: {
            maxWidth: '420px',
            fontSize: '44px',
            lineHeight: '42px',
        },
        [$theme.mediaQuery.large]: {
            maxWidth: '460px',
            fontSize: '50px',
            lineHeight: '46px',
        },
    }
})

const Title = ({ bgTitle, mainTitle }) => {
    const [css, theme] = useStyletron()

    return (
        <>
            <BgTitle>{bgTitle}</BgTitle>
            <MainTitle>{mainTitle}</MainTitle>
        </>
    )
}

export default Title
