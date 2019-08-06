import React from 'react';
import "../infoPallet/pallet.css";

function LanguagesPallet() {
    return (
        <div className="pallet">
            <div className="palletList">
                <h4>Languages</h4>
                <ul>
                    <li>JavaScript</li>
                    <li>C#</li>
                    <li>Go</li>
                    <li>PHP</li>
                    <li>SQL</li>
                </ul>
            </div>
            <div className="palletList">
                <h4>Frameworks/Libraries</h4>
                <ul>
                    <li>React</li>
                    <li>Angular</li>
                    <li>ASP.NET MVC</li>
                    <li>jQuery</li>
                    <li>Bootstrap</li>
                    <li>SASS</li>
                </ul>
            </div>
            <div className="palletList">
                <h4>Software</h4>
                <ul>
                    <li>MS SQL Server</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Photoshop</li>
                    <li>Jira</li>
                </ul>
            </div>
        </div>
    )
}

export default LanguagesPallet;