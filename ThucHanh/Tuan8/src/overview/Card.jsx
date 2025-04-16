import React from 'react';
import './Card.css';

function Card({ label, value, trend, trendType, icon }) {
    return (
        <div className="overview-card">
            <p className="overview-label">{label}</p>
            <h2 className="overview-value">{value}</h2>
            <p className={"overview-trend"}>
                <span className={"up-arrow"}>▲</span>
                {trend} period of change
            </p>
            <div className="overview-icon"><img src={icon} alt="Bieu tuong" /></div>
        </div>
    );
}

export default Card;