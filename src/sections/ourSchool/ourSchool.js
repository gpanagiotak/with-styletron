import Wrapper from '../../components/items/wrapper/wrapper'
import { styled, useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import Circle from '../../components/items/circle'
import { SchoolCard } from './schoolCard'
import Title from '../../components/items/title/title'

const CircleBlock = styled(Block, ({ $theme }) => {
    return {
        zIndex: '1',
        position: 'absolute',
        left: '-200px',
        top: '0',
    }
})

const OurSchool = () => {
    const [css, theme] = useStyletron()

    return (
        <Wrapper marginTop={['120px']}>
            <Block
                className={css({ 'z-index': '90' })}
                display="block"
                position="relative"
            >
                <Title bgTitle="OUR SCHOOL" mainTitle="Get to know us better" />
            </Block>
            <CircleBlock
                display={['block']}
                className={css({ 'z-index': '0' })}
            >
                <Circle
                    width="1000"
                    fill={theme.colors.auxColor}
                    thickness="0"
                />
            </CircleBlock>
            <Block
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                flexWrap="wrap"
            >
                <Block
                    display={['block']}
                    className={css({
                        'z-index': '90',
                        width: '100%',
                        marginRight: '0',
                        [theme.mediaQuery.medium]: {
                            width: 'calc(60%  - 15px)',
                            marginRight: '15px',
                        },
                    })}
                    position="relative"
                    // width={['100%', '100%', '100%', '50%', '60%']}
                    margin={['7px 0']}
                    minHeight={['360px', '440px', '400px', '400px', '500px']}
                >
                    <SchoolCard
                        ctaText="READ ABOUT OUR PHILOSOPHY"
                        title="OUR SCHOOL"
                        ctaLink="/school/our-school"
                    />
                </Block>
                <Block
                    display={['block']}
                    className={css({
                        'z-index': '90',
                        width: '100%',
                        marginRight: '0',
                        [theme.mediaQuery.medium]: {
                            width: '40%',
                        },
                    })}
                    position="relative"
                    margin={['7px 0']}
                    minHeight={['360px', '440px', '400px', '400px', '500px']}
                >
                    <SchoolCard
                        ctaText="YOUR CAREER STARTS HERE"
                        title="CAREER OFFICE"
                        ctaLink="/school/career-office"
                    />
                </Block>
                <Block
                    display={['block']}
                    className={css({
                        'z-index': '90',
                        width: '100%',
                        marginRight: '0',
                        [theme.mediaQuery.medium]: {
                            width: '40%',
                        },
                    })}
                    position="relative"
                    margin={['7px 0']}
                    minHeight={['360px', '440px', '400px', '400px', '500px']}
                >
                    <SchoolCard
                        ctaText="LEARNING IS FUN"
                        title="CAMPUS LIFE"
                        ctaLink="/school/learning-is-fun"
                    />
                </Block>
                <Block
                    display={['block']}
                    className={css({
                        'z-index': '90',
                        width: '100%',
                        marginLeft: '0',
                        [theme.mediaQuery.medium]: {
                            width: 'calc(60%  - 15px)',
                            marginLeft: '15px',
                        },
                    })}
                    position="relative"
                    margin={['7px 0']}
                    minHeight={['360px', '440px', '400px', '400px', '500px']}
                >
                    <SchoolCard
                        ctaText="SUCCESS STORIES FROM OUR STUDENTS"
                        title="#ORIZON STORIES"
                        ctaLink="/school/orizon-stories"
                    />
                </Block>
            </Block>
        </Wrapper>
    )
}

export default OurSchool
