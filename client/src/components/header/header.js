import React from 'react';
import './header.css';

function Header () {



    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitleSm'>React & Node</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg' src='https://imgs.search.brave.com/Xx_4VV7VELEdUG951hfRolsJsijaQXdy7FyaUMJnQSM/rs:fit:1200:1200:1/g:ce/aHR0cDovL3dhbGxw/YXBlcmNhdmUuY29t/L3dwL3JsVHJieWMu/anBn' alt=''></img>
        </div>
    )
}

export default Header;