import React from 'react'

export default function Button({href, children}) {
    let button = "";

    //BUTTON HAS LINK?
    if(href){
        button = <a className="Button" href={href} target="blank">{children}</a>
    } else{
        button = <button className="Button">{children}</button>
    }

    return (
        <div className="ButtonContainer">
            {
                button
            }
        </div>
    )
}
