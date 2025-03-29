import { assets } from "../../assets/assets";
import "./Footer.css"; 

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <p>About Us</p>
                <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                <div className="footer-subscribe">
                    <input type="text" placeholder="Enter your email" />
                    <button>Send</button>
                </div>
                <div className="footer-bottom">
                    <img src={assets.logo} alt="logo" />
                    <p>2023 Chefify Company</p>
                    <p>Terms of Service Privacy Policy</p>
                </div>
            </div>
            <div className="footer-right">
                <div>
                    <div className="footer-section">
                        <h4>Learn More</h4>
                        <ul>
                            <li>Our Cooks</li>
                            <li>See Our Features</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Shop</h4>
                        <ul>
                            <li>Gift Subscription</li>
                            <li>Send Us Feedback</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Recipes</h4>
                    <ul>
                        <li>What to Cook This Week</li>
                        <li>Pasta</li>
                        <li>Dinner</li>
                        <li>Healthy</li>
                        <li>Vegetarian</li>
                        <li>Vegan</li>
                        <li>Christmas</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
