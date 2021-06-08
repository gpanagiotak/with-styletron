import { Block } from 'baseui/block'
import { LabelMedium } from 'baseui/typography'

const Footer = () => {
    return (
        <Block
            padding={['10px']}
            overrides={{
                Block: {
                    style: ({ $theme }) => {
                        return {
                            borderTop: `1px solid ${$theme.colors.invertColor}`,
                        }
                    },
                },
            }}
        >
            <LabelMedium>This is the footer</LabelMedium>
        </Block>
    )
}

export default Footer
