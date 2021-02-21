import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import "./Button.css"
const Button = ({children, background = "purple", color = "white",  fontSize, fontWeight, style={}, ...restProps}) => {
    return (
        <button {...restProps} style={{background, color, ...style}} className = "button">
           <Paragraph color = {color} fontSize = {fontSize} fontWeight = {fontWeight}>{children}</Paragraph> 
        </button>
    )
}

export default Button
