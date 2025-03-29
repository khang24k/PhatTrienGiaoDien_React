import React, { useState } from 'react';

export default function Bai02() {
    const [invest, setInvest] = useState(0);
    const [rate, setRate] = useState(0);
    const [goal, setGoal] = useState(0);
    const [arr, setArr] = useState([]);

    const handleClick = () => {
        const newArr = [];
        let result = invest * (1 + rate / 100);
        let year = new Date().getFullYear();

        newArr.push([year, invest, rate, result]);

        while (result < goal) {
            year++;
            result *= (1 + rate / 100); 
            newArr.push([year, invest, rate, result]);
        }

        setArr(newArr);
    }

    return (
        <div>
            <h3>Calculate Investment</h3>
            <span>Invest</span>
            <input type="number" onChange={(e) => { setInvest(Number(e.target.value)) }} />
            <br />
            <span>Rate</span>
            <input type="number" onChange={(e) => { setRate(Number(e.target.value)) }} />
            <br />
            <span>Goal</span>
            <input type="number" onChange={(e) => { setGoal(Number(e.target.value)) }} />
            <br />
            <button onClick={handleClick}>Calculate</button>

            {arr.length > 0 && (
                <table border="1" style={{ marginTop: '20px', width: '100%' }}>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Investment</th>
                            <th>Rate (%)</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.map((row, index) => (
                            <tr key={index}>
                                <td>{row[0]}</td>
                                <td>{row[1]}</td>
                                <td>{row[2]}</td>
                                <td>{row[3].toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
