import { Block } from 'baseui/block'
import { styled, useStyletron } from 'baseui'
import Title from '../../components/items/title/title'
import Circle from '../../components/items/circle'
import AnimatedCard from '../../components/items/animatedCard/animatedCard'
import Wrapper from '../../components/items/wrapper/wrapper'

const CircleBlock = styled(Block, ({ $theme }) => {
    return {
        zIndex: '1',
        position: 'absolute',
        right: '-100px',
        top: '0',
    }
})

const CircleBlock2 = styled(Block, ({ $theme }) => {
    return {
        zIndex: '1',
        position: 'absolute',
        top: '10px',
        right: '-120px',
    }
})

const CareerBox = styled(Block, ({ $theme }) => {
    return {
        zIndex: '10',
        display: 'block',
        position: 'relative',
    }
})

const PickCareer = () => {
    const [css, theme] = useStyletron()
    const numbers = [1, 2, 3, 4, 5, 6, 7]
    return (
        <Wrapper>
            <CircleBlock display={['none', 'none', 'none', 'block']}>
                <Circle
                    width="800"
                    fill={theme.colors.mainColor}
                    thickness="0"
                />
            </CircleBlock>
            <CircleBlock2>
                <Circle
                    width="830"
                    stroke={theme.colors.auxColor}
                    thickness="5"
                />
            </CircleBlock2>
            <CareerBox>
                <Block>
                    <Title
                        bgTitle="STUDY WITH US"
                        mainTitle="Διάλεξε την καριέρα σου"
                    />
                </Block>
                <Block display="flex" flexDirection="row" flexWrap="wrap">
                    {numbers.map((number) => {
                        return (
                            <Block
                                key={number}
                                padding={['0 0', '0 7px']}
                                marginTop="15px"
                                width={[
                                    '100%',
                                    '100%',
                                    '50%',
                                    '33.33%',
                                    '33.33%',
                                ]}
                            >
                                <AnimatedCard ctaLink={`/studies/${number}`}>
                                    fadsf fasldkjf asdjfsla fsdjflasd jflasd
                                    jflasd jflasd jflasd fadsf fasldkjf asdjfsla
                                    fsdjflasd jflasd jflasd jflasd jflasdfadsf
                                    fasldkjf asdjfsla fsdjflasd jflasd jflasd
                                    jflasd jflasd
                                </AnimatedCard>
                            </Block>
                        )
                    })}
                </Block>
            </CareerBox>
        </Wrapper>
    )
}

export default PickCareer
