import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./navbar.scss";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { dispatch } = useContext(AuthContext);

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
                        <span>Homepage</span>
                    </Link>
                    <Link to="/series" className='items'>
                        <span className="navbarmainLinks">Series</span>
                    </Link>
                    <Link to="/movies" className='items'>
                        <span className="navbarmainLinks">Movies</span>
                    </Link>
                    <Link to="/" className='items'>
                        <span>Contact</span>
                    </Link>
                    <Link to="/" className='items'>
                        <span>Setting</span>
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
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;