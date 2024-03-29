import React from 'react';
import HomeCard from './HomeCard';

export default function QuadContainer(){
    return(
        <div className="container">
            <div className="card grey">
                <hr className="clear"/>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <HomeCard title="Jammiest Deal of the Day">
                        {/* Content for card 1 */}
                    </HomeCard>
                    <HomeCard title="Jamazon Essentials">
                        {/* Content for card 2 */}
                    </HomeCard>
                    <HomeCard title="Sign in for the best experience">
                        {/* Content for card 3 */}
                    </HomeCard>
                    <HomeCard title="Card title">
                        {/* Content for card 4 */}
                    </HomeCard>
                </div>
            </div>
        </div>
    )
}