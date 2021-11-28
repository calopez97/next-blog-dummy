import React from 'react'
import { GoogleLogout } from 'react-google-login';

const Header = ({profile}) => {
    
    const data = profile ? profile : [];
    const GoogleId = process.env.GOOGLE_CLIENT_ID;

    const handleLogout = () =>{
        localStorage.removeItem('loginData');
        window.open('/', '_self');
    }
    return (
        <div className="header-dummy">
            <div className="container">
                <div className="navigation">
                    <div className="brand-user">
                        <div className="image-profile">
                            <img title={data.name} 
                                alt={data.name}
                                src={data.picture} />
                        </div>
                        <div className="info-profile">
                            <p>{data.name}</p>
                            <span>{data.email}</span>
                        </div>
                    </div>
                    <div className="logout">
                         <GoogleLogout
                            clientId={GoogleId}
                            buttonText="Logout"
                            onLogoutSuccess={(handleLogout)}
                            render={renderProps => (
                            <button className="btn-google-logout" onClick={renderProps.onClick} disabled={renderProps.disabled}>Log out</button>
                            )}
                        />    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
