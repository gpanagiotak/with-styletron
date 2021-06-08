import { Block } from 'baseui/block'
import { useStyletron } from 'baseui'
import RoundedSquare from '../../components/items/roundedSquare'

const RoundedSquares = () => {
    const [css, theme] = useStyletron()

    return (
        <div>
            <Block display="flex">
                <Block width={['420px']} display="flex" flexWrap="wrap">
                    <RoundedSquare
                        size="140px"
                        color={theme.colors.mainColor}
                        fill={theme.colors.accentColor}
                    >
                        #yourSuccessStory
                    </RoundedSquare>
                    <RoundedSquare
                        size="140px"
                        rotate="0"
                        color={theme.colors.accentColor}
                        fill={theme.colors.mainColor}
                    >
                        #iekOrizo
                    </RoundedSquare>
                    <RoundedSquare
                        size="140px"
                        rotate="180deg"
                        color="#ffffff"
                        fill={theme.colors.auxColor}
                    >
                        #hashtag
                    </RoundedSquare>
                    <RoundedSquare
                        size="140px"
                        color={theme.colors.mainColor}
                        fill={theme.colors.accentColor}
                    >
                        #hashtag
                    </RoundedSquare>
                    <RoundedSquare
                        size="140px"
                        rotate="-90deg"
                        color={theme.colors.accentColor}
                        fill={theme.colors.mainColor}
                    >
                        #hashtag
                    </RoundedSquare>
                    <RoundedSquare
                        size="140px"
                        rotate="0deg"
                        color="#ffffff"
                        fill={theme.colors.auxColor}
                    >
                        #hashtag
                    </RoundedSquare>
                </Block>
            </Block>
        </div>
    )
}

export default RoundedSquares
