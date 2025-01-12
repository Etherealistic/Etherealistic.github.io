import React from 'react';
import '../Profile.css';
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
                    <h1 style={{ fontSize: "4vw"}}>Francesco Giorcelli</h1>
                    <h2 style={{ fontSize: "2vw"}}>UX Designer and Communication Expert</h2>
                </div>
            </div>
        </div>
    );
}
