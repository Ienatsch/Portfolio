import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button(props) {
    return (
    <button type="button" className="sidebarButton" onClick={() => props.toggle(props.showPallets)}>
        <FontAwesomeIcon icon={props.icon}/>
        <p>{props.text}</p>
    </button>
    );
  }

export default Button;