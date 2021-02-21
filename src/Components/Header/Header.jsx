import React from 'react'
import "./Header.css"

const fontWeightEstimator = (weightStr) => {
    switch (weightStr) {
        case "light":
        return 300

        case "regular":
            return 400

            case "semiBold":
                return 500
                case "bold":
                    return 700
            default:
                return 400;
    }
}

const Header = ({children, fontSize = 16, fontWeight = "bold", color = "black", style = {}}) => {
    let fontWeightValue =fontWeightEstimator(fontWeight)
    let fontSizeValue = fontSize/10;

    return (
        <div className = "header" style={{fontWeight:fontWeightValue, fontSize: `${fontSizeValue}em`, color,  ...style}}>
         {  children}
        </div>
    )
}

export default Header
