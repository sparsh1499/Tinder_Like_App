import React from 'react'
import './header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img
                className="header__logo"
                src="https://www.searchpng.com/wp-content/uploads/2019/01/Cute-couple-clipart-png.png"
                alt="Tinder"
            />
            <IconButton>
            <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
            

        </div>
    )
}   

export default Header
