import { assets } from "../../assets/assets";
import "./Header.css"; 

const Header = () => {
    const menu = [
        { name: "What to cook", link: "#" },
        { name: "Recipes", link: "#" },
        { name: "Ingredients", link: "#" },
        { name: "Occasions", link: "#" },
        { name: "About Us", link: "#" }
    ];

    return (
        <div className="header">
            <div className="header-logo">
                <img src={assets.logo} alt="logo" />
                <p>Chefify</p>
            </div>

            <div className="header-search">
                <img src={assets.search_icon} alt="search_icon" />
                <input type="text" placeholder="Search..." />
            </div>

            <div className="header-menu">
                {menu.map((item, index) => (
                    <a href={item.link} key={index} className="header-menu-item">
                        {item.name}
                    </a>
                ))}
            </div>

            <div className="header-recipe-box">
                <img src={assets.tasklist} alt="tasklist" />
                <p>Your Recipe Box</p>
            </div>

            <img src={assets.user_icon} alt="user_icon" className="header-user-icon" />
        </div>
    );
};

export default Header;
