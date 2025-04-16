import React from "react";
import './AdminPage.css'; // Đảm bảo bạn có file CSS này

import Nav from "../nav/Nav";
import Header from "../header/Header";
import Overview from "../overview/Overview";
import Detailed from "../detailed/Detailed";

function AdminPage() {
  return (
    <div className="admin-page">
      <div className="nav-site">
        <Nav />
      </div>
      <div className="main-site">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Overview />
          <Detailed />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;