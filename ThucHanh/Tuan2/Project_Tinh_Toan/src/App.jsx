import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  function TinhToan(){
    var a = parseInt(num1);
    var b = parseInt(num2);

    // Kiểm tra đầu vào
    if (isNaN(a) || isNaN(b)) {
      alert('Vui lòng nhập đầy đủ số vào các trường');
      return;
    }

    
    var newresult;
    switch (operation) {
      case 'cong':
        newresult = a + b;
        break;
      case 'tru':
        newresult = a - b;
        break;
      case 'nhan':
        newresult = a * b;
        break;
      case 'chia':
        if(b == 0){
          alert("Khong the chia cho 0!!!!");
          return;
        }
        newresult = a / b;
        break;
      default:
        alert("Chon phep toan!!!!");
        return;
    }
    setResult(newresult);
  }



  return (
    <>
      <input placeholder='nhap a' type="text" id='num1' onChange={(e)=>setNum1(e.target.value)}/><br />
      <input placeholder='nhap b' type="text" id='num2' onChange={(e)=>setNum2(e.target.value)}/><br />
      <input type="radio" name="pheptinh" value="cong" onChange={(e)=>setOperation('cong')}/><span>+</span><br />
      <input type="radio" name="pheptinh" value="tru" onChange={(e)=>setOperation('tru')}/><span>-</span><br />
      <input type="radio" name="pheptinh" value="nhan" onChange={(e)=>setOperation('nhan')}/><span>*</span><br />
      <input type="radio" name="pheptinh" value="chia" onChange={(e)=>setOperation('chia')}/><span>/</span><br />
      <button onClick={TinhToan}>Tính</button><br />
      <span>Kết quả: {result}</span>

    </>
  )
}

export default App
