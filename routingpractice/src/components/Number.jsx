import React from 'react'
import { useParams } from "react-router";

const Number = () => {
    const { input } = useParams();

    if(!isNaN(input))  {
    return (
        <div>
            <p className="numpara">
                The number is: {input}
            </p>
        </div>)
        } 
        return (
        <div>
            <p className="wordpara">
                The word is: {input}
            </p>
        </div>
        )
}

export default Number;