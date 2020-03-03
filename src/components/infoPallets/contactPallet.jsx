import React from 'react';
import "../infoPallets/pallet.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '../../../node_modules/@fortawesome/free-solid-svg-icons/faEnvelope';

function ContactPallet() {
    return (
        <div className="pallet">
            <h3>Contact <span className="titleAccent">Me</span></h3>
            <div className="formContainer">
                <form action="https://formcarry.com/s/mFRc8x2WcDT" method="POST" accept-charset="UTF-8" >
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" required/>
                    <input type="text" id="lastName" name="lastName" placeholder="Last Name" required/>
                    <input type="text" id="userEmail" name="userEmail" placeholder="Email" required/>
                    <textarea type="text" id="userText" name="userText" placeholder="Message" required/>
                    <p id="message"></p>
                    <button type="submit" id="submitButton">Send <FontAwesomeIcon className="submitIcon" icon={faEnvelope} /></button>
                </form>
            </div>
        </div>
    )
}

export default ContactPallet;