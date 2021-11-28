import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { getUserInfo } from "../../actions/user-info.actions";


const UserModal = ({onClose, userId}) => {

    const [user, setUser] = useState([]);
    const [errors, setErrors] = useState(true);

    useEffect(() =>{
        getUser();
    },[ setUser ]);

    const getUser = async () =>{
        try {
            const { user, errorUser } = await getUserInfo(userId);
            setUser(user);
            setErrors(errorUser);
        } catch (error) {
            console.error(`Error in getUser: ${error}`);
        }
    }


    let options = {
        year: "numeric", 
        month: "long", 
        day: "numeric"
    };

    let getDate = new Date(user.publishDate);
    let creationDate = getDate.toLocaleDateString("en-US", options);  
    
    let birthDay = new Date(user.dateOfBirth);
    let birthDate = birthDay.toLocaleDateString("en-US", options);  

    const { location } = user;

    return (
        <>
        {
            !errors ? ( 
                    <div className="modalBackground">        
                        <div className="modalContainer">
                            <div className="title">
                                <button  onClick={() => onClose(false)}>
                                    X
                                </button>
                            </div>
                            <div className="body">
                                <div className="image-modal-profile">
                                    <img alt={user.title}  title={user.title} src={user.picture}/>
                                </div>
                                <div className ="modal-profile">
                                    <small className="prefix">{user.title}</small>
                                    <h3 className="first-name">{user.firstName}</h3>
                                    <p className="last-name">{user.lastName}</p>
                                </div>
                            </div>
                            <div className="footer">
                                <ul className="info-list">
                                    <li className="field">Gender
                                        <p className="data">{user.gender}</p>
                                    </li>
                                    <li className="field">Date of Birth
                                        <p className="data">{birthDate}</p>
                                    </li>
                                    <li className="field">Register Date
                                        <p className="data">{creationDate}</p>
                                    </li>
                                    <li className="field">Email
                                        <p className="data">{user.email}</p>
                                    </li>
                                    <li className="field">Phone
                                        <p className="data">{user.phone}</p>
                                    </li>
                                </ul>
                                <ul className="info-list">
                                    <li className="field">State
                                        <p className="data">{location.state}</p>
                                    </li>
                                    <li className="field">Street
                                        <p className="data">{location.street}</p>
                                    </li>
                                    <li className="field">Country
                                        <p className="data">{location.country}</p>
                                    </li>
                                    <li className="field">City
                                        <p className="data">{location.city}</p>
                                    </li>
                                    <li className="field">Timezone
                                        <p className="data">{location.timezone}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            ) : (
                null
            )
        }
        </>
        

    )
}

export default UserModal
