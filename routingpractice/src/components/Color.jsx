import React from 'react'
import { useParams } from "react-router";

const Color = () => {
        const { color, bg, word } = useParams();

        return (
        <div style={{color: color, background: bg}}>
            <p>{word}</p>
        </div>
        );
}

export default Color;