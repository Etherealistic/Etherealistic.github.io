import React from 'react';
import './Contact.css';
import DR from '../images/Davinci.png';

export default function Contact() {
    return (
        <div className='contactBox'>
            <h1>Contact and Links</h1>
            <p>Telephone: +31 6 13 00 61 20</p>
            <p>Email: giorci.francesco@gmail.com</p>
                <a className='coolButton' href='https://www.youtube.com/@EtherealSandwich/videos' target="_blank"><b>Youtube Channel</b></a>
        </div>
    )
}