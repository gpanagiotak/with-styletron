import { Block } from 'baseui/block'
import { useStyletron } from 'baseui'

const Wrapper = ({ children, padding, marginTop, display }) => {
    const [css, theme] = useStyletron()
    return (
        <Block
            className={css({
                overflowX: 'hidden',
                [theme.mediaQuery.large]: {
                    overflowX: 'visible',
                },
            })}
            padding={padding}
            position="relative"
            marginTop={marginTop}
            display={display}
            marginLeft="auto"
            marginRight="auto"
            maxWidth="1440px"
        >
            {children}
        </Block>
    )
}

Wrapper.defaultProps = {
    padding: ['15px'],
    marginTop: ['80px'],
    display: ['block'],
}

export default Wrapper
