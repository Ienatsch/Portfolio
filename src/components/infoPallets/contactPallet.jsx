import React from 'react';
import "../infoPallets/pallet.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '../../../node_modules/@fortawesome/free-solid-svg-icons/faEnvelope';

function ContactPallet() {
    return (
        <div className="pallet">
            <h3>Contact <span className="titleAccent">Me</span></h3>
            <div className="formContainer">
                <form>
                    <input type="text" id="firstName" placeholder="First Name" disabled/>
                    <input type="text" id="lastName" placeholder="Last Name" disabled/>
                    <input type="text" id="userEmail" placeholder="Email" disabled/>
                    <textarea type="text" id="userText" placeholder="Message" disabled/>
                    <p id="message">This form is currently under construction. <br /> I am able to be reached through LinkedIn.</p>
                    <button type="button" id="submitButton" disabled>Send <FontAwesomeIcon className="submitIcon" icon={faEnvelope} /></button>
                </form>
            </div>
        </div>
    )
}

export default ContactPallet;