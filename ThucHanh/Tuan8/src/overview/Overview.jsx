import React, { useState, useEffect } from 'react';
import Card from './Card';
import './Overview.css'; // Tạo file CSS cho section
import Dash from '../assets/Squares four 1.png';

function Overview() {
    const [overviewData, setOverviewData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOverviewData = async () => {
            try {
                const response = await fetch('../../data/overview.json'); // Thay YOUR_API_ENDPOINT bằng URL API thực tế
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setOverviewData(data); // Giả sử API trả về một mảng các object chứa label, value, trend, icon
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchOverviewData();
    }, []);

    if (loading) {
        return <div>Loading overview data...</div>;
    }

    if (error) {
        return <div>Error fetching overview data: {error}</div>;
    }

    return (
        <div className="overview-section">
            <div className='overview-header'>
                <img src={Dash} alt="Overview" />
                <h2>Overview</h2> {/* Tiêu đề Overview */}
            </div>
            
            <div className="overview-cards-container">
                {overviewData.map((item, index) => (
                    <Card
                        key={index}
                        label={item.label}
                        value={item.value}
                        trend={item.trend}
                        icon={item.icon}
                    />
                ))}
            </div>
        </div>
    );
}

export default Overview;