import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import Cart from "./component/Cart";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage"; 
import { CartProvider } from "./context/CartContext";
import NotFound from "./component/NotFound";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header/>
        <Cart/> {/* 🛒 Hiển thị giỏ hàng trên màn hình */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Homepage" element={<BookList />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NotFound" element={<NotFound />} />    
        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

export default App;