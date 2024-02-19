import React, { useState, useEffect } from 'react';
import '../css/QuadContainer.css';

export default function Countdown({ expiryDate }) {
    const calculateTimeLeft = () => {
        const difference = +new Date(expiryDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {timeLeft.days !== undefined ? (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span className="badge text-bg-danger font-size-small">Up to 15% off</span>
                    <span className="font-size-small gradient-text" style={{marginLeft: '10px'}}> 
                        Ends in: {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
                    </span>
                </div>
            ) : (
                <p>Deal Expired</p>
            )}
        </div>
    );
}