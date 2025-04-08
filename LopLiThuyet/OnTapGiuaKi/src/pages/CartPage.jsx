import React from "react";
import { useCart } from "../context/CartContext";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const calculateTotalQuantity = () => {
    return cart.length;
  }

  if (cart.length === 0) {
    return (
      <Container className="mt-5">
      <p className="text-center fs-3">Giỏ hàng của bạn đang trống.</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>Giỏ hàng của bạn</h2>
      <Row>
        {cart.map((book) => (
          <Col md={4} key={book.cartItemId} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Giá: {book.price} VND</Card.Text>
                <Button variant="danger" onClick={() => removeFromCart(book.cartItemId)}>
                  Xóa
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <p>Tổng số lượng: {calculateTotalQuantity()} cuốn</p>
      <p>Tổng tiền: {calculateTotal()} VND</p>
      <Button
        variant="primary"
        onClick={() => {
          alert("Cảm ơn bạn đã mua hàng!");
        }}
      >
        Thanh toán
      </Button>
    </Container>
  );
};

export default CartPage;