import React from 'react'
import "./Paragraph.css"

const fontWeightEstimator = (weightStr) => {
    switch (weightStr) {
        case "light":
        return 300

        case "regular":
            return 400

            case "semiBold":
                return 600
                case "bold":
                    return 700
            default:
                return 400;
    }
}

const Paragraph = ({children, fontSize = 16, fontWeight = "regular", color = "black", style = {}}) => {
    let fontWeightValue =fontWeightEstimator(fontWeight)
    let fontSizeValue = fontSize/10;
    console.log(fontSizeValue)

    return (
        <div className = "paragraph" style={{fontWeight:fontWeightValue, fontSize: `${fontSizeValue}em`, color,  ...style}}>
         {  children}
        </div>
    )
}

export default Paragraph
