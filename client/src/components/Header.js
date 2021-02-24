import React from 'react';

const Header = (props) => {

    return (
        <nav>
            <div className="nav-wrapper deep-purple accent-3">
                <a href="#" className="brand-logo center">Contacts App</a>
                <ul id="nav-mobile" className ="left">
                    {/*<li><a href="/auth/google">Login with Google</a></li>*/}
                </ul>
            </div>
        </nav>

    )
}



export default Header;