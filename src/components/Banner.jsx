// eslint-disable-next-line no-unused-vars
import React from 'react';
import BannerImage from '/jamazon-nexus.png';

export default function Banner(){
    return (
        <img className="d-flex" src={BannerImage}
        style={{maxWidth: "100%"}} alt="Banner"/>

    );
}