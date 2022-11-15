import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./navbar.scss";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <Link to="/" className='home-items'>HorizonFlix</Link> 
                    <Link to="/" className='items'>
                        Homepage
                    </Link>
                    <Link to="/series" className='items'>
                        Series
                    </Link>
                    <Link to="/movies" className='items'>
                        Movies
                    </Link>
                    <Link to="/" className='items'>
                        New and Popular
                    </Link>
                    <Link to="/" className='items'>
                        My list
                    </Link>
                </div>
                <div className="right">
                    <SearchIcon className="icon" />
                    <span>USER</span>
                    <NotificationsIcon className="icon" />
                    <img
                        src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png"
                        alt=""
                    />
                    <div className="profile">
                        <ArrowDropDownIcon className="icon" />
                        <div className="options">
                            <Link to="" className='setting'>
                                Settings
                            </Link>
                            <Link to="/login" className='login'>
                                Logout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;