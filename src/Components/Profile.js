import React from 'react';
import './Profile.css';
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
