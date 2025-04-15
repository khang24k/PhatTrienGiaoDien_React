import React from "react";
import './AdminPage.css'; // Đảm bảo bạn có file CSS này

function AdminPage() {
  return (
    <div className="admin-page">
      <div className="nav-site">
        {/* Khu vực cho sidebar */}
      </div>
      <div className="main-site">
        <div className="header">
          {/* Khu vực cho header */}
        </div>
        <div className="content">
          {/* Khu vực cho nội dung chính */}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;