import './Header.css';
import Search from '../assets/Search.png';
import Bell from '../assets/Bell 1.png';
import Question from '../assets/Question 1.png';
import Avatar from '../assets/Avatar 313.png';

function Header() {
    return (
        <div className="header">
            <span className="dashboard">Dashboard</span>
            <div className="icon-right">
                <div className="search-container">
                    <img src={Search} alt="Search Icon" className="search-icon" />
                    <input type="text" placeholder="Search..." className="search-input" />
                </div>
                <img src={Bell} alt="Notification Bell" className="icon notification" />
                <img src={Question} alt="Help Question Mark" className="icon help" />
                <img src={Avatar} alt="User Avatar" className="icon avatar" />
            </div>
        </div>
    );
}

export default Header;