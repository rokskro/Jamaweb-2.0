import React from 'react';
import '../css/QuadContainer.css';
import HomeCard from './HomeCard';
import ImageContainer from '../components/ImageContainer';

export default function QuadContainer(){
    return(
        <div className="container">
                <hr className="clear"/>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <HomeCard title="Jammiest Deal of the Day">
                        {/* Content for card 1 */}
                    </HomeCard>
                    <HomeCard title="Jamazon Essentials">
                        {<ImageContainer />}
                    </HomeCard>
                    <HomeCard title="Sign in for the best experience">
                        <p className="font-size-13px">Enjoy the best Jamazon has to offer by tracking your orders, saving your basket and getting shopping reccomendations from FunkAI</p>
                        <button className="btn amazonButton" type="submit">Login</button>
                        <p className="card-text font-size-small">Dont have an account? Go register here</p>
                    </HomeCard>
            </div>
        </div>
    )
}