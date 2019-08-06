import React from 'react';
import "../infoPallet/pallet.css";
function ContactPallet() {
    return (
        <div className="pallet">
            <div className="formContainer">
                <form>
                    <label htmlFor="userName">Name:</label>
                    <input type="text" id="userName" />
                    <label htmlFor="userEmail">Email:</label>
                    <input type="text" id="userEmail" />
                    <label htmlFor="userText">Message:</label>
                    <textarea type="text" id="userText" />
                    <button type="button" id="submitButton">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPallet;