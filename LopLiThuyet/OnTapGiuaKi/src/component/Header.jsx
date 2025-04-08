import React from "react";
import { Link } from "react-router-dom";

function Header() {     //sticky-top dùng để cho cái header cuộn theo thanh cuộn con lăn, bỏ nó vào cái thẻ header ngay bên dưới là được
  return (
    <header className="bg-white border-bottom shadow-sm py-3">  
      <nav className="navbar navbar-expand container">
        <ul className="navbar-nav">
          <li className="nav-item mx-3">
            <Link className="nav-link text-dark fw-semibold" to="/Home">
              Trang chủ
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link text-dark fw-semibold" to="/Homepage">
              Trang danh sách sách
            </Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link text-dark fw-semibold" to="/Contact">
              Liên hệ
            </Link>
          </li>
          {/* <li className="nav-item mx-3">
            <Link className="nav-link text-dark fw-semibold" to="/Notfound">
                             Not Found
           </Link>
           </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;