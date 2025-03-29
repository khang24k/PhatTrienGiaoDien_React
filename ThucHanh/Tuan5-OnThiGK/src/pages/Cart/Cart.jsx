import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./Cart.css";

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://67c822500acf98d070850b7d.mockapi.io/food")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-filter">
        <img src={assets.filter} alt="Filter" />
      </div>

      <div className="cart-content">
        <div className="cart-header">
          <h1>Món ăn ({data.length})</h1>
          <select>
            <option value="a-z">A-Z</option>
          </select>
        </div>

        <div className="cart-grid">
          {data.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.title} className="cart-item-img" />
              <div className="cart-item-info">
                <h4>{item.title}</h4>
                <img src={assets.save} alt="Save" className="cart-item-save" />
              </div>
              <p className="cart-item-price">{item.price} đ</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
