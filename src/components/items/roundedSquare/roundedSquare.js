import propTypes from 'prop-types'
import { styled } from 'baseui'

const RoundedSquareDiv = styled('div', (props) => {
    return {
        transform: `rotate(${props.rotate})`,
        width: props.size,
        height: props.size,
        display: 'block',
        position: 'relative',
    }
})

const TextDiv = styled('div', (props) => {
    return {
        color: props.color,
        fontSize: props.fontSize,
        display: 'block',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '99',
    }
})

const RoundedWrapper = styled('div', () => {
    return {
        position: 'relative',
        display: 'inline-block',
    }
})

const RoundedSquare = ({ fill, color, fontSize, size, rotate, children }) => (
    <RoundedWrapper>
        <RoundedSquareDiv rotate={rotate} size={size}>
            <svg
                height={size}
                viewBox="0 0 230 230"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 230L-1.00536e-05 1.52588e-05L110 1.04505e-05C176.274 7.5536e-06 230 53.7258 230 120L230 230L0 230Z"
                    fill={fill}
                />
            </svg>
        </RoundedSquareDiv>
        <TextDiv color={color} fontSize={fontSize}>
            {children}
        </TextDiv>
    </RoundedWrapper>
)

RoundedSquare.defaultProps = {
    fill: '#000000',
    color: '#000000',
    size: '115px',
    rotate: '90deg',
    fontSize: '12px',
}

RoundedSquare.propTypes = {
    fill: propTypes.string,
    color: propTypes.string,
    size: propTypes.string,
    deg: propTypes.string,
    fontSize: propTypes.string,
}

export default RoundedSquare
