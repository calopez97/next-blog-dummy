
import { GoogleLogin } from 'react-google-login';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';

const Index = () => {
  const GoogleId = process.env.GOOGLE_CLIENT_ID;
  const URL = process.env.API_GOOGLE;

  const [loginData, setLoginData] = useState([]);
  const [login, setLogin] = useState(false);

  const handleFail = (res)=> { 
        console.error(res);
        setLoading(true)
  }

  // const responseGoogle = async (googleData) => {

  //   const res = await axios.post(URL,{
  //       token: googleData.tokenId,
  //   });

  //   const data = await res;
  //   setLoginData(JSON.stringify(data));
  //   localStorage.setItem('loginData', JSON.stringify(data));
  //   window.open('/home', '_self');
  // }

  const responseFacebook = (response) =>{
    console.log(response);
    setLoginData(JSON.stringify(response));
    localStorage.setItem('loginData', JSON.stringify(response));
    if(response.accessToken){ 
      setLogin(true)
    }else setLogin(false);
  }

  if(login) window.open('/home', '_self')
  else null;

  const componentClicked = (data) =>{ 
    console.log(data);
  }

  return (
    <>
          <div className="container">
              <div className="login">
                <div >
                  <h1 className="login-title">WELCOME TO DUMMY.IO TEST <span>Log in to start</span> </h1>
                  
                </div>
                {/* <GoogleLogin
                    clientId={GoogleId}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={handleFail}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                      <button className="btn-google" onClick={renderProps.onClick} disabled={renderProps.disabled}></button>
                    )}
                  />  */}
                  <FacebookLogin
                    appId="739774490748049"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook} />
                  
            </div>  
         </div> 
    </>
  )
}


export default Index;
