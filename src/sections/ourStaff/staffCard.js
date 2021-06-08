import { Block } from 'baseui/block'
import { Card, StyledAction, StyledBody } from 'baseui/card'
import { useRouter } from 'next/router'
import { styled, useStyletron } from 'baseui'
import { Button, SIZE, SHAPE } from 'baseui/button'
import { Paragraph4 } from 'baseui/typography'

const CardBody = styled('span', ({ $theme }) => {
    return {
        letterSpacing: '1',
        fontWeight: '300',
        fontSize: '14px',
        lineHeight: '14px',
        maxHeight: '42px',
        overflow: 'hidden',
        [$theme.mediaQuery.small]: {
            color: '#fff',
            fontSize: '14px',
            lineHeight: '14px',
            maxHeight: '42px',
            overflow: 'hidden',
        },
    }
})

const handleClick = (e, router, path) => {
    e.preventDefault()
    router.push(path)
}

export const StaffCard = ({
    children,
    fill,
    title,
    ctaText,
    ctaLink,
    flow,
}) => {
    const [css, theme] = useStyletron()
    const router = useRouter()

    return (
        <Block
            height={['350px']}
            display="flex"
            flexDirection={flow}
            position="relative"
            className={css({
                margin: '7px',
            })}
        >
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
                            margin: '7px',
                            width: '220px',
                            position: 'relative',
                            outline: `${fill} solid`,
                            backgroundImage:
                                'url("https://source.unsplash.com/user/erondu/700x400")',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            display: 'block',
                            position: 'relative',
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
                        shape={SHAPE.pill}
                        className={css({
                            ':hover': {
                                backgroundColor: '#fff',
                                color: fill,
                            },
                        })}
                        overrides={{
                            BaseButton: {
                                style: ({ $theme }) => ({
                                    backgroundColor: fill,
                                    color: '#fff',
                                }),
                            },
                        }}
                    >
                        {ctaText}
                    </Button>
                </StyledAction>
            </Card>
            <Card
                className={css({
                    display: 'none',
                    [theme.mediaQuery.medium]: {
                        display: 'block',
                    },
                })}
                overrides={{
                    Root: {
                        style: {
                            backgroundColor: fill,
                            margin: '7px',
                            width: '220px',
                            position: 'relative',
                            display: 'block',
                            outline: `${fill} solid`,
                        },
                    },
                    Title: {
                        style: {
                            color: '#fff',
                            maxWidth: '120px',
                            lineHeight: '90%',
                        },
                    },
                }}
                title={title}
            >
                <StyledBody>
                    <Paragraph4>
                        <CardBody>
                            {children} Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Maxime mollitia, molestiae quas
                            vel sint commodi repudiandae consequuntur voluptatum
                            laborum.
                        </CardBody>
                    </Paragraph4>
                </StyledBody>
            </Card>
        </Block>
    )
}

StaffCard.defaultProps = {
    title: 'Name of the Person',
    ctaLink: 'http://www.google.com',
    ctaText: 'chef',
    fill: '#000',
    flow: 'row',
}
