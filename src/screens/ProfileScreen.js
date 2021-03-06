import React from 'react';
import Nav from '../components/Nav';
import Plans from '../components/Plans'
import { useSelector } from "react-redux";
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import './ProfileScreen.scss';

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img
                     src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                     alt=""
                     />
                     <div className="profileScreen__details">
                         <h2>{user.email}</h2>
                         <div className="profileScreen__plans">
                             <h3>Plans</h3>
                             <Plans />
                             <button 
                             className="profileScreen__signOut"
                             onClick={() => auth.signOut()}
                             >
                                 Sign Out
                             </button>
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
