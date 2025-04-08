import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { Button } from "react-bootstrap"; 

const Cart = () => {
  const { cart } = useCart();

  return (
    <div style={{ position: "fixed", top: 20, right: 20, zIndex: 1000 }}>
      <Link to="/cart">
        <Button variant="dark" className="position-relative">
          <FaShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
              {cart.length}
            </span>
          )}
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
