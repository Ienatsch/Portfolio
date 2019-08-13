import React from 'react';
import "../infoPallets/pallet.css";

function AboutPallet() {
    return (
        <div className="pallet">
            <h3>About <span className="titleAccent">Me</span></h3>
            <div className="aboutPallet">
                <div className="aboutWrapper">
                    <p>
                        Hello, my name is Dalan Ienatsch and I am a Software Developer.
                    <br />
                        My main focus is full-stack web development.
                    <br />
                        I enjoy creating highly efficient applications with great UI/UX so users have a positive experience each and every time.
                </p>
                </div>
            </div>
        </div>
    )
}

export default AboutPallet;