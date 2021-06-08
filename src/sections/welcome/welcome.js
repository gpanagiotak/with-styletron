import Wrapper from '../../components/items/wrapper/wrapper'
import { Block } from 'baseui/block'
import { styled, useStyletron } from 'baseui'
import { Button, SIZE } from 'baseui/button'
import Circle from '../../components/items/circle'
import RoundedSquares from '../roundedSquares/roundedSquares'

const BigTitle = styled('div', ({ $theme }) => {
    return {
        fontSize: '32px',
        maxWidth: '490px',
        lineHeight: '28px',
        color: $theme.colors.mainColor,
        fontFamily: `'Jura', 'sans-serif'`,
        fontWeight: 'bold',
        zIndex: '99',
        [$theme.mediaQuery.small]: {
            fontSize: '40px',
            lineHeight: '40px',
        },
        [$theme.mediaQuery.medium]: {
            fontSize: '50px',
            lineHeight: '48px',
        },
    }
})

const Welcome = () => {
    const [css, theme] = useStyletron()

    return (
        <Wrapper marginTop={['0']}>
            <Block
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                position="relative"
                flexWrap="wrap"
            >
                <Block
                    position="absolute"
                    top={['0']}
                    left={['-160px']}
                    className={css({ 'z-index': '0' })}
                >
                    <Circle
                        stroke={theme.colors.accentColor}
                        thickness="8"
                        width="500"
                        className={css({ 'z-index': '0' })}
                    />
                </Block>
                <Block
                    display="flex"
                    padding="100px 0"
                    justifyContent="flex-start"
                    flexWrap="wrap"
                    flexDirection="column"
                    alignItems="flex-start"
                    width={['100%', '100%', '100%', '40%', '50%']}
                    className={css({
                        'z-index': '199',
                    })}
                >
                    <BigTitle>Γράψε τη δική σου ιστορία επιτυχίας</BigTitle>
                    <Block
                        maxWidth="490px"
                        padding="20px 0"
                        color={theme.colors.textColor}
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime mollitia, molestiae quas vel sint commodi
                        repudiandae consequuntur voluptatum laborum.
                    </Block>
                    <Button
                        overrides={{
                            BaseButton: {
                                style: ({ $theme }) => ({
                                    backgroundColor: $theme.colors.mainColor,
                                    color: $theme.colors.accentColor,
                                }),
                            },
                        }}
                        size={SIZE.compact}
                    >
                        Διάβασε Περισσότερα
                    </Button>
                </Block>
                <Block
                    width={['100%', '100%', '100%', '60%', '50%']}
                    display={['none', 'block', 'block', 'block', 'block']}
                >
                    <RoundedSquares />
                </Block>
            </Block>
        </Wrapper>
    )
}

export default Welcome
