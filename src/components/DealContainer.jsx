import React from 'react';
import JamImage from '/jam-image.png';

export default function DealContainer(){
    return( 
        <div>
            <h5 className="card-title">Jammiest Deal of the Day</h5>
            <img src="jam-image.png" style="width: 370px;"/>
            <p className="card-text"><span className="badge text-bg-danger">Up to 15% off</span> Ends in: </p>
            <p className="card-text">Up to 15% off on all banana & jam products</p>
        </div>
    );
}