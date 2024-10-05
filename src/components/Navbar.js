import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //for importing icons
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import logo from './Images/Logo.png'




const NavBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        // Handle search logic (e.g., redirect, filter results, etc.)
        console.log("Search Term:", searchTerm);
    };
    return (
        <nav id='hero'>
            <nav className="navbar">
                <img className='Logo' src={logo} alt="lg"></img>
                <ul className="nav-links">
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </form>
                    <li>
                        <NavLink to="/" end activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">About</NavLink>
                    </li>    
                </ul>
            </nav>
        </nav>
    );
};
export default NavBar;