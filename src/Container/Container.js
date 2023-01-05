import './Container.css';
import Profile from './Profile';
import NavContainer from './NavContainer';
import { useState, useEffect } from 'react';

function Container() {
    
	const [userData, setUserData] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/kalyansai99')
        .then((response) => response.json())
        .then((data) => setUserData(data))
    }, []);
        
    return (
        <div className="container">
            <Profile userProfileData={userData}></Profile>
            <NavContainer></NavContainer>
        </div>
    );
}

export default Container;