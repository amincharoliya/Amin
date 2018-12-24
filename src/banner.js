import React, { Component } from 'react';
import ProfilePhoto from './images/DSC_0983.jpg';

class Banner extends Component {
    render() {
        return (
            <>
            <div className="Banner">
                <div className="Avatar-frame">
                    <img className="Avatar" src={ProfilePhoto} alt="avatar" />
                </div>
                <h1>Amin Charoliya</h1>
                <p>Hey, I’m a Frontend Developer based in India.<br/> You might find me Playing games <span role="img" aria-label="Gamepad">🕹️</span> if I'm not working.</p>
                <ul className="social">
                    <li><a href="https://twitter.com/amincharoliya" target="_blank" rel="noopener noreferrer" >Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/amin-charoliya-392bab81" target="_blank" rel="noopener noreferrer" >LinkedIn</a></li>
                    <li><a href="https://codepen.io/aminhaider/" target="_blank" rel="noopener noreferrer" >Codepen</a></li>
                </ul>
            </div>
            </>
        );
    }
}

export default Banner;
