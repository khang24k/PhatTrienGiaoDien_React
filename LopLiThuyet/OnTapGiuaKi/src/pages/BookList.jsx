import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa"; // Import icon giỏ hàng
import anh1 from "../component/image/hinh1.png";
import anh2 from "../component/image/hinh2.png";
import anh3 from "../component/image/hinh3.png";
import anh4 from "../component/image/hinh4.png";
import anh5 from "../component/image/hinh5.png";
import anh6 from "../component/image/hinh6.png";

const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", price: 300, img: anh1 },
  { id: 2, title: "The Pragmatic Programmer", author: "Andy Hunt", price: 250, img: anh2 },
  { id: 3, title: "You Don't Know JS", author: "Kyle Simpson", price: 200, img: anh3 },
  { id: 4, title: "Design Patterns", author: "Erich Gamma", price: 280, img: anh4 },
  { id: 5, title: "Refactoring", author: "Martin Fowler", price: 270, img: anh5 },
  { id: 6, title: "JavaScript: The Good Parts", author: "Douglas Crockford", price: 220, img: anh6 },
];

const BookList = () => {
  const { addToCart } = useCart();

  return (
    <Container>
      <Row>
        {books.map((book) => (
          <Col md={4} key={book.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Tác giả: {book.author}</Card.Text>
                <Card.Text><strong>{book.price} VND</strong></Card.Text>
                <Link to={`/book/${book.id}`} className="btn btn-primary me-2">Xem chi tiết</Link>
                <Button variant="success" onClick={() => addToCart(book)}>
                  <FaShoppingCart className="me-2" /> Thêm vào giỏ hàng
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
