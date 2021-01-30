import React from 'react'

import Button from "./Button"
import Heading from "./Heading"
import Paragraph from "./Paragraph"
import Shape from "./Shape"

export default function CardContent({title, author, description, url}) {
    return (
        <div className="CardContent">
            <Shape>
                <Heading type="small">
                    {title}
                </Heading>

                {
                    author ? (
                        <Heading type="subtitle">
                            {author}
                        </Heading>
                    ): null
                }
                
                <Paragraph>
                    {description}
                </Paragraph>
                <Button href={url}>
                    Leia mais
                </Button>
            </Shape>
        </div>

    )
}
