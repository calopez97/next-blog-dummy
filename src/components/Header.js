import React from 'react'
import { GoogleLogout } from 'react-google-login';

const Header = ({profile}) => {
    
    const data = profile ? profile : [];
    const GoogleId = process.env.GOOGLE_CLIENT_ID;

   
    const logOut = (e) =>{ 
        e.preventDefault();
        e.view.localStorage.removeItem('loginData');
        e.view.window.open('/', '_self');
    }
    return (
        <div className="header-dummy">
            <div className="container">
                <div className="navigation">
                    <div className="brand-user">
                        <div className="image-profile">
                            <img title={data.name} 
                                alt={data.name}
                                src={data.picture ? data.picture.data.url : "" } />
                        </div>
                        <div className="info-profile">
                            <p>{data.name}</p>
                            <span>{data.email}</span>
                        </div>
                    </div>
                    <div className="logout">
                            <button className="btn-google-logout" onClick={logOut} >Log out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
