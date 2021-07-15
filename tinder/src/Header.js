import React from 'react'
import './header.css';
import PersonIcon from '@material-ui/icons/Person';

function Header() {
    return (
        <div className="header">
            <h2>I am from Header</h2>   
            <PersonIcon fontSize="large" className="header__icon" />
        </div>
    )
}

export default Header
