import React from 'react'
import {useParams} from 'react-router-dom';

function Paramater() {
    const {arry,color,bgColor} = useParams();
return (
    <div>
        {
            isNaN(arry)?
            <h1 style={
                color?
                {color: color , backgroundColor: bgColor}
                : null
            }>
                The word is: {arry}
            </h1>
            :
            <h1>The number is: {arry} </h1>
        }
    </div>
)
}

export default Paramater;