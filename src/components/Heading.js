import React from 'react'

export default function Heading({type, children}) {
    
    const choosedHeading = (type, content) => {
        let Heading = "";

        switch (type) {
            case "small":
                Heading = (
                    <h4 className="Heading Heading--small">{content}</h4>
                )
            break;
    
            case "medium":
                Heading = (
                    <h3 className="Heading Heading--medium">{content}</h3>
                )
            break;
    
            case "large":
                Heading = (
                    <h2 className="Heading Heading--large">{content}</h2>
                )
            break;

            case "subtitle":
                Heading = (
                    <h2 className="Heading Heading__subtitle">{content}</h2>
                )
            break;
        
            default:
                Heading = (
                    <h4 className="Heading Heading--small">{content}</h4>
                )
            break;
        }

        return Heading;
    }

    return (
        choosedHeading(type, children)
    )
}
