import React from "react";
import { Link } from "react-router-dom";
import bgImage from '../component/image/nhasach.jpg';

function Home() {
  return (
    <div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundPosition: 'center',
      }} 
      className="d-flex justify-content-center align-items-center vh-100"
    >
      {/* <h1 style={{color: 'white'}}>Chào mừng bạn đến với chúng tôi</h1> */}
    </div>
  );
}

export default Home;
