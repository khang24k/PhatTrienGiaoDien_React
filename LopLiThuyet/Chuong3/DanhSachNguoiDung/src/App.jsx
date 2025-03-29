import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import UserDetail from './components/UserDetail';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/user/:id" element={<UserDetail/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}
export default App;