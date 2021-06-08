import React from 'react'
import propTypes from 'prop-types'

const Circle = ({ width, fill, stroke, thickness }) => {
    return (
        <svg
            width={width}
            viewBox="0 0 1406 1289"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M154.434 434.067C-43.277 717.526 -35.7468 821.884 102.963 960.078C241.673 1098.27 253.809 1090.6 330.466 1136.88C426.286 1194.74 617.493 1274.13 901.485 1286.69C1185.48 1299.25 1404 930.569 1404 729.636C1404 528.703 1241.41 389.665 1161.2 223.715C1080.99 57.766 956.55 -95.6251 645.242 79.7431C384.45 226.654 401.572 79.7431 154.434 434.067Z"
                stroke={stroke}
                strokeWidth={thickness}
            />
        </svg>
    )
}

Circle.propTypes = {
    width: propTypes.string,
    stroke: propTypes.string,
    thickness: propTypes.string,
    fill: propTypes.string,
}

Circle.defaultProps = {
    width: '500',
    stroke: '#000',
    thickness: '5',
    fill: 'transparent',
}

export default Circle
