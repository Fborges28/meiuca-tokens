import React, { useState, useEffect } from 'react'
import CardContent from '../components/CardContent';
import * as GoogleService from "../services/GoogleService";

export default function Home() {

    const [cards, setCard] = useState([]);

    useEffect(() => {
        GoogleService.getGoogleNews().then(response => {
            setCard(response.data.articles);
        });
    }, []);


    return (
        <div className="Cards">
            {
                cards.map((card, index) => (
                    <CardContent {...card} key={"card" + index}></CardContent>
                ))
            }
        </div>
    )
}
