import React from 'react'
import Slider from 'react-slick'
import Title from '../../components/items/title/title'
import { styled, useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import Wrapper from '../../components/items/wrapper/wrapper'
import { StaffCard } from './staffCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Circle from '../../components/items/circle'

const CircleBlock = styled(Block, ({ $theme }) => {
    return {
        zIndex: '1',
        position: 'absolute',
        left: '-100px',
        top: '0',
    }
})

const OurStaff = () => {
    const [css, theme] = useStyletron()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 2,
        responsive: [
            {
                breakpoint: 1136,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    rows: 1,
                    variableWidth: true,
                },
            },
        ],
    }
    return (
        <div>
            <Wrapper marginTop={['120px']}>
                <CircleBlock>
                    <Circle
                        width="730"
                        stroke={theme.colors.accentColor}
                        thickness="5"
                    />
                </CircleBlock>

                <Block
                    className={css({ 'z-index': '90' })}
                    display="block"
                    position="relative"
                >
                    <Title
                        bgTitle="LEARN FROM THE BEST"
                        mainTitle="Meet our amazing staff"
                    />
                </Block>
                <Block
                    position="relative"
                    className={css({ 'z-index': '90' })}
                    minHeight="600px"
                >
                    <Slider {...settings}>
                        <StaffCard
                            fill={theme.colors.auxColor}
                            flow="row-reverse"
                            ctaLink="/staff/1"
                        />
                        <StaffCard
                            fill={theme.colors.mainColor}
                            ctaLink="/staff/2"
                        />
                        <StaffCard
                            fill={theme.colors.accentColor}
                            flow="row-reverse"
                            ctaLink="/staff/3"
                        />
                        <StaffCard
                            fill={theme.colors.auxColor}
                            ctaLink="/staff/4"
                        />
                        <StaffCard
                            fill={theme.colors.mainColor}
                            flow="row-reverse"
                            ctaLink="/staff/5"
                        />
                        <StaffCard
                            fill={theme.colors.accentColor}
                            ctaLink="/staff/6"
                        />
                        <StaffCard
                            fill={theme.colors.auxColor}
                            flow="row-reverse"
                            ctaLink="/staff/7"
                        />
                        <StaffCard
                            fill={theme.colors.mainColor}
                            ctaLink="/staff/8"
                        />
                        <StaffCard
                            fill={theme.colors.accentColor}
                            flow="row-reverse"
                            ctaLink="/staff/9"
                        />
                        <StaffCard
                            fill={theme.colors.auxColor}
                            ctaLink="/staff/10"
                        />
                        <StaffCard
                            fill={theme.colors.mainColor}
                            flow="row-reverse"
                            ctaLink="/staff/11"
                        />
                        <StaffCard
                            fill={theme.colors.accentColor}
                            ctaLink="/staff/12"
                        />
                    </Slider>
                </Block>
            </Wrapper>
        </div>
    )
}

export default OurStaff
