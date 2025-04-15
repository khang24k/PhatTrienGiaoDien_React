import { useState } from 'react'
import './App.css'

import AdminPage from './pages/AdminPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AdminPage/>
    </>
  )
}

export default App
