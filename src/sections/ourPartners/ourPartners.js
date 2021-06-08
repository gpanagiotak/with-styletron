import React from 'react'
import Slider from 'react-slick'
import Title from '../../components/items/title/title'
import { styled, useStyletron } from 'baseui'
import { Block } from 'baseui/block'
import Wrapper from '../../components/items/wrapper/wrapper'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Circle from '../../components/items/circle'
import { PartnerBlock } from './partnerBlock'

const CircleBlock = styled(Block, ({ $theme }) => {
    return {
        zIndex: '1',
        position: 'absolute',
        right: '-100px',
        top: '0',
    }
})

const OurPartners = () => {
    const [css, theme] = useStyletron()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        rows: 2,
        responsive: [
            {
                breakpoint: 1136,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    rows: 2,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    rows: 2,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    rows: 2,
                    variableWidth: true,
                },
            },
            {
                breakpoint: 320,
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
        <Wrapper marginTop={['120px']}>
            <CircleBlock>
                <Circle width="730" fill={theme.colors.auxColor} stroke="0" />
            </CircleBlock>

            <Block
                className={css({ 'z-index': '90' })}
                display="block"
                position="relative"
            >
                <Title
                    bgTitle="PARTNERS"
                    mainTitle="Strategic Business Partners"
                />
            </Block>
            <Block
                position="relative"
                className={css({ 'z-index': '90' })}
                display="block"
                minHeight="1000px"
            >
                <Slider {...settings}>
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                    <PartnerBlock />
                </Slider>
            </Block>
        </Wrapper>
    )
}

export default OurPartners
