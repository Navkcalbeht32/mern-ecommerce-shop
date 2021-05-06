import React from 'react'
import products from '../../products'
import './Button.scss'

const Button = ({btnStyle, title}) => {
    return (
        <button className={`btn ${btnStyle}`}>
            {title}
        </button>
    )
}

export default Button
