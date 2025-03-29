import { assets } from "../../assets/assets";
import "./Home.css"; // Import CSS

const Home = () => {
    return (
        <div className="home-container">
            {/* Bộ lọc bên trái */}
            <div className="home-left">
                <img src={assets.filter} alt="Filter" />
            </div>

            {/* Phần danh sách món ăn bên phải */}
            <div className="home-right">
                <h1 className="home-title">Sorry, no results were found for "cakescascsa"</h1>
                <p className="home-text">We have all your Independence Day sweets covered</p>

                <div className="food-gallery">
                    <img src={assets.food1} alt="Food 1" />
                    <img src={assets.food2} alt="Food 2" />
                    <img src={assets.food3} alt="Food 3" />
                </div>
            </div>
        </div>
    );
};

export default Home;
