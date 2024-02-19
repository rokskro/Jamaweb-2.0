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
                        {/* Content for card 3 */}
                    </HomeCard>
                    <HomeCard title="Card title">
                        {/* Content for card 4 */}
                    </HomeCard>
            </div>
        </div>
    )
}