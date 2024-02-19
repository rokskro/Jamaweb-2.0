/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';


export default function HomeCard({title,children}){
    return(
        <div className="card">
            <div className='card-body'>
                <h5 className="card-title">{title}</h5>
                {children}


            </div>
        </div>
    )
}