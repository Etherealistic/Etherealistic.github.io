import React from 'react';
<<<<<<< HEAD
import '../Profile.css';
=======
import './Profile.css';
>>>>>>> a6cfd4b3f356568a40ed5db6df67df67647641d4
import logo from '../images/me.png';

const profileImage = {
    name: "Francesco Giorcelli",
};

export default function Profile() {
    return (
        <div>
            <div className='imgBox'>
                <img className="avatar" src={logo} alt={'Photo of ' + profileImage.name} />
                <div className='titleBox'>
                    <h1 style={{fontSize:"48px"}}>Francesco Giorcelli</h1>
                    <h2>Designer and innovator</h2>
                </div>
            </div>
        </div>
    );
}
