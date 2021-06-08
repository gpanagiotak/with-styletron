import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useStyletron } from 'baseui'
import PickCareer from '../src/sections/pickCareer/pickCareer'
import Welcome from '../src/sections/welcome/welcome'
import OurSchool from '../src/sections/ourSchool/ourSchool'
import OurStaff from '../src/sections/ourStaff/ourStaff'
import OurPartners from '../src/sections/ourPartners/ourPartners'
import AcademicPartners from '../src/sections/academicPartners/academicPartners'
import { useRouter } from 'next/router'
import Link from 'next/link'

const TestLink = ({ children }) => {
    const [css, theme] = useStyletron()
    return (
        <a
            href="/my-link"
            className={css({
                fontSize: '20px',
                color: theme.colors.accentColor,
                fontFamily: `'Jura', 'sans-serif'`,
            })}
        >
            {children}
        </a>
    )
}

const THEME = {
    light: 'light',
    dark: 'dark',
}

export default function Home() {
    const [css, theme] = useStyletron()
    const router = useRouter()
    const { locale, locales, defaultLocale } = router

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Welcome />
            <PickCareer />
            <OurSchool />
            <AcademicPartners />
            <OurStaff />
            <OurPartners />
            {/* <StyledLink
                animateUnderline="true"
                target="_blank"
                href="https://baseweb.design"
            >
                Link to Base Web
            </StyledLink>

            <Title>This is a title</Title>
            <DisplayMedium>ΕΛΛΗΝΙΚΑ φαίνονται καλά</DisplayMedium>
            <TestLink>
                <DisplayLarge>dd</DisplayLarge>
            </TestLink>

            <TestLink>ddddddd</TestLink> */}
            <main></main>
            {/* <footer className={styles.footer}></footer> */}
        </div>
    )
}
