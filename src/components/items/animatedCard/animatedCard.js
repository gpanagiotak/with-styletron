import { useState } from 'react'
import { useStyletron } from 'baseui'
import { Card, StyledBody, StyledAction, StyledHeaderImage } from 'baseui/card'
import { useRouter } from 'next/router'
import { Button, SIZE } from 'baseui/button'
import { styled } from 'baseui'
import { Paragraph3 } from 'baseui/typography'
import { Block } from 'baseui/block'

const CardBody = styled('span', ({ $theme }) => {
    return {
        letterSpacing: '1',
        fontWeight: '300',
        fontSize: '14px',
        lineHeight: '14px',
        maxHeight: '42px',
        overflow: 'hidden',
        [$theme.mediaQuery.small]: {
            fontSize: '14px',
            lineHeight: '14px',
            maxHeight: '42px',
            overflow: 'hidden',
        },
        [$theme.mediaQuery.medium]: {
            fontSize: '16px',
            lineHeight: '16px',
            maxHeight: '48px',
            overflow: 'hidden',
        },
        [$theme.mediaQuery.large]: {
            fontSize: '16px',
            lineHeight: '16px',
            maxHeight: '48px',
            overflow: 'hidden',
        },
    }
})

const CardBodyHovered = styled('span', ({ $theme }) => {
    return {
        letterSpacing: '1',
        fontWeight: '300',
        fontSize: '12px',
        lineHeight: '12px',
        maxHeight: '36px',
        overflow: 'hidden',
        color: '#fff',
        [$theme.mediaQuery.small]: {
            fontSize: '14px',
            lineHeight: '14px',
            maxHeight: '42px',
            overflow: 'hidden',
        },
        [$theme.mediaQuery.medium]: {
            fontSize: '16px',
            lineHeight: '16px',
            maxHeight: '48px',
            overflow: 'hidden',
        },
        [$theme.mediaQuery.large]: {
            fontSize: '16px',
            lineHeight: '16px',
            maxHeight: '48px',
            overflow: 'hidden',
        },
    }
})

const handleClick = (e, router, path) => {
    e.preventDefault()
    router.push(path)
}

const AnimatedCard = ({ title, ctaText, ctaLink, children }) => {
    const [hovered, sethovered] = useState(false)
    const [css, theme] = useStyletron()
    const router = useRouter()

    return (
        <Block
            onMouseEnter={() => sethovered(true)}
            onMouseLeave={() => sethovered(false)}
            position="relative"
            minHeight={['360px', '440px', '400px', '400px', '500px']}
        >
            <Card
                overrides={{
                    Root: {
                        style: ({ $theme }) => ({
                            width: '100%',
                            height: '100%',
                            display: `${hovered ? 'none' : 'block'}`,
                            position: 'absolute',
                            outline: `${$theme.colors.mainColor} solid`,
                            borderBottomWidth: '0',
                            borderTopWidth: '0',
                            borderLeftWidth: '0',
                            borderRightWidth: '0',
                        }),
                    },
                    Title: {
                        style: {
                            fontFamily: 'Jura, sans-serif',
                            fontWeight: 'bold',
                            letterSpacing: '-1px',
                            color: theme.colors.mainColor,
                        },
                    },
                    Contents: {
                        style: {
                            position: 'absolute',
                            bottom: '0',
                        },
                    },
                    HeaderImage: {
                        style: ({ $theme }) => ({}),
                    },
                }}
                headerImage={'https://source.unsplash.com/user/erondu/700x400'}
                title={title}
            >
                <StyledBody>
                    <Paragraph3>
                        <CardBody>{children}</CardBody>
                    </Paragraph3>
                </StyledBody>
                <StyledAction>
                    <Button
                        size={SIZE.compact}
                        overrides={{
                            BaseButton: {
                                style: ({ $theme }) => ({
                                    width: '100%',
                                    backgroundColor: $theme.colors.mainColor,
                                    color: $theme.colors.accentColor,
                                }),
                            },
                        }}
                    >
                        {ctaText}
                    </Button>
                </StyledAction>
            </Card>
            <Card
                overrides={{
                    Root: {
                        style: ({ $theme }) => ({
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            display: 'block',
                            outline: `${$theme.colors.mainColor} solid`,
                            backgroundImage:
                                'url("https://source.unsplash.com/user/erondu/700x400")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: `${hovered ? 'block' : 'none'}`,
                            position: 'absolute',
                        }),
                    },
                    Title: {
                        style: {
                            fontFamily: 'Jura, sans-serif',
                            fontWeight: 'bold',
                            letterSpacing: '-1px',
                            color: '#fff',
                        },
                    },
                    Contents: {
                        style: {
                            position: 'absolute',
                            color: '#fff',
                            bottom: '0',
                            marginTop: '0',
                            marginLeft: '0',
                            marginRight: '0',
                            marginBottom: '0',
                            padding: '15px',
                            background:
                                'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                        },
                    },
                }}
                title={title}
            >
                <StyledBody>
                    <Paragraph3>
                        <CardBodyHovered>{children}</CardBodyHovered>
                    </Paragraph3>
                </StyledBody>
                <StyledAction>
                    <Button
                        onClick={(e) => handleClick(e, router, ctaLink)}
                        size={SIZE.compact}
                        className={css({
                            ':hover': {
                                backgroundColor: theme.colors.accentColor,
                                color: theme.colors.mainColor,
                            },
                        })}
                        overrides={{
                            BaseButton: {
                                style: ({ $theme }) => ({
                                    width: '100%',
                                    backgroundColor: $theme.colors.mainColor,
                                    color: $theme.colors.accentColor,
                                }),
                            },
                        }}
                    >
                        {ctaText}
                    </Button>
                </StyledAction>
            </Card>
        </Block>
    )
}

AnimatedCard.defaultProps = {
    title: 'Example Title',
    ctaText: 'READ MORE',
    ctaLink: 'https://www.google.com',
}

export default AnimatedCard
