import { NavLink } from 'react-router-dom';

import './Nav.css';
import Logodau from '../assets/Image 1858.png';
import Dash from '../assets/Squares four 1.png';
import Folder from '../assets/folder.png';
import Groups from '../assets/Groups.png';
import Piechart from '../assets/Pie chart.png';
import Chat from '../assets/Chat.png';
import Code from '../assets/Code.png';
import Group from '../assets/Group.png';

function Nav() {
    return (
        <div className="nav">
            <img src={Logodau} alt="Biểu tượng nhỏ" className="logodaulogodau" />
            <ul>
                <li>
                    <NavLink to="/overview" className={({ isActive }) => isActive ? "active" : ""}>
                        <div className="view">
                            <img src={Dash} alt="Overview" />
                            <p>Dashboard</p>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
                        <div className="view">
                            <img src={Folder} alt="Projects" />
                            <p>Projects</p>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/team" className={({ isActive }) => isActive ? "active" : ""}>
                        <div className="view">
                            <img src={Groups} alt="Team" />
                            <p>Team</p>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/analytics" className={({ isActive }) => isActive ? "active" : ""}>
                        <div className="view">
                            <img src={Piechart} alt="Analytics" />
                            <p>Analytics</p>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/messages" className={({ isActive }) => isActive ? "active" : ""}>
                        <div className="view">
                            <img src={Chat} alt="Messages" />
                            <p>Messages</p>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/integrations" className={({ isActive }) => isActive ? "active" : ""}>
                        <div className="view">
                            <img src={Code} alt="Integrations" />
                            <p>Integrations</p>
                        </div>
                    </NavLink>
                </li>
            </ul>
            <div className='trynow'>
                <img src={Group} alt="Update" className="update-image" />
                <div className="update-text">V2.0 is available</div>
                <button className='trybutton'>Try now</button>
            </div>
        </div>
    );
}

export default Nav;