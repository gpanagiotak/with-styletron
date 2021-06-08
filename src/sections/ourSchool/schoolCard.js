import { Card, StyledAction } from 'baseui/card'
import { useRouter } from 'next/router'
import { useStyletron } from 'baseui'
import { Button, SIZE } from 'baseui/button'

const handleClick = (e, router, path) => {
    e.preventDefault()
    router.push(path)
}

export const SchoolCard = ({ title, ctaText, ctaLink }) => {
    const [css, theme] = useStyletron()
    const router = useRouter()

    return (
        <Card
            onClick={(e) => handleClick(e, router, ctaLink)}
            className={css({
                ':hover': {
                    cursor: 'pointer',
                },
            })}
            overrides={{
                Root: {
                    style: ({ $theme }) => ({
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        display: 'block',
                        outline: `${$theme.colors.mainColor} solid`,
                        backgroundImage: 'url("https://picsum.photos/800/600")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'block',
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
                        left: '0',
                        right: '0',
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
            <StyledAction>
                <Button
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
    )
}

SchoolCard.defaultProps = {
    title: 'this is the title',
    ctaText: 'ctaText',
    ctaLink: 'http://www.google.com',
}
