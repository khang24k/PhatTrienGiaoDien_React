import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Container } from 'react-bootstrap'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container className='customContainer'>
        <div className="header">
          <h2>My Header</h2>
        </div>
        <div className="menu">
          <a href="#">Link 1</a><br />
          <a href="#">Link 2</a><br />
          <a href="#">Link 3</a>
        </div>
        <div className="content">
          <div className="topContent">
            {/* <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ridiculus sit nisl laoreet facilisis aliquet.
              Potenti dignissim litora eget montes rhoncus sapien neque urna. Cursus libero sapien integer magnis ligula lobortis quam ut.</p> */}
          </div>
          <div className="bottomContent">

          </div>

        </div>
        <div class="footer">
          <h4>Footer</h4>
        </div>
      </Container>
    </>
  )
}

export default App
