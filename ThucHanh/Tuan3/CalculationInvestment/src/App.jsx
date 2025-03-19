import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [invest, setInvest] = useState('');
  const [rate, setRate] = useState('');
  const [goal, setGoal] = useState('');

  const Addlist = () => {
    let newList = [];
    let year = 0;

    while (invest < goal) {
      let result = invest + (invest * rate) / 100;
      year++;
      newList.push({year, invest, rate, result});
      setInvest(result);
    }
    setList(newList);
  }

  return (
    <>
      <h3>Calculation Investment</h3>
      <h7>Invest: </h7>
      <input type="text" onChange={(e) => setInvest(e.target.value)}/>
      <br />
      <h7>Rate: </h7>
      <input type="text" onChange={(e) => setRate(e.target.value)}/>
      <br />
      <h7>Goal: </h7>
      <input type="text" onChange={(e) => setGoal(e.target.value)}/>
      <br />
      <button onClick={Addlist}>Submit</button>
      {list.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Year</th>
              <th>Invest</th>
              <th>Rate</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
          {list.map((item, index) => (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{item.invest}</td>
                <td>{item.rate}</td>
                <td>{item.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default App
