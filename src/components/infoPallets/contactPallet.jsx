import React from 'react';
import "../infoPallet/pallet.css";
function ContactPallet() {
    return (
        <div className="pallet">
            <div className="formContainer">
                <form>
                    <input type="text" id="firstName" placeholder="First Name"/>
                    <input type="text" id="lastName" placeholder="Last Name"/>
                    <input type="text" id="userEmail" placeholder="Email"/>
                    <textarea type="text" id="userText" placeholder="Message"/>
                    <button type="button" id="submitButton">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPallet;