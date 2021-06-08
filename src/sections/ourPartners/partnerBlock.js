import { Block } from 'baseui/block'
import { styled, useStyletron } from 'baseui'

const ImageBlock = styled('div', () => {
    padding: '20px'
})

export const PartnerBlock = () => {
    const [css, theme] = useStyletron()
    return (
        <Block
            width={['140px', '140px', '140px', '200px']}
            height={['140px', '140px', '140px', '200px']}
            padding={['20px']}
            backgroundColor="#fff"
            margin={['15px']}
            display="flex"
            alignItems="center"
            justifyContent="center"
            className={css({
                borderRadius: '500px',
                boxShadow: '0 0 10px #aaa',
            })}
        >
            <ImageBlock>
                <img src="https://www.elite.com.gr/wp-content/uploads/sites/128/2019/03/logo.svg" />
            </ImageBlock>
        </Block>
    )
}

PartnerBlock.defaultProps = {}
