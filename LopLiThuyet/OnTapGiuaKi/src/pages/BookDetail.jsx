import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Card, Button } from "react-bootstrap";
import anh1 from "../component/image/hinh1.png";
import anh2 from "../component/image/hinh2.png";
import anh3 from "../component/image/hinh3.png";
import anh4 from "../component/image/hinh4.png";
import anh5 from "../component/image/hinh5.png";
import anh6 from "../component/image/hinh6.png";

const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", price: 300, description: "A guide to writing clean code.", img: anh1 },
  { id: 2, title: "The Pragmatic Programmer", author: "Andy Hunt", price: 250, description: "Best practices for software development.", img: anh2 },
  { id: 3, title: "The Pragmatic Programmer", author: "Andy Hunt", price: 250, description: "Best practices for software development.", img: anh3 },
  { id: 4, title: "The Pragmatic Programmer", author: "Andy Hunt", price: 250, description: "Best practices for software development.", img: anh4 },
  { id: 5, title: "The Pragmatic Programmer", author: "Andy Hunt", price: 250, description: "Best practices for software development.", img: anh5 },
  { id: 6, title: "The Pragmatic Programmer", author: "Andy Hunt", price: 250, description: "Best practices for software development.", img: anh6 },
  
];

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  const { addToCart } = useCart();

  if (!book) return <h2>Sách không tồn tại!</h2>;

  return (
    <Card>
      <Card.Img variant="top"  src={book.img}  style={{ width: "40%", height: "auto", margin: "0 auto" }} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>Tác giả: {book.author}</Card.Text>
        <Card.Text>Giá: {book.price} VND</Card.Text>
        <Card.Text>{book.description}</Card.Text>
        <Button variant="success" onClick={() => addToCart(book)}>Thêm vào giỏ hàng</Button>
      </Card.Body>
    </Card>
  );
};

export default BookDetail;
