import React from 'react';
import '../sidebar/sidebar.css';
import Button from './sidebarButtons/sidebarButton';
import { faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';
import { faComment} from '@fortawesome/free-solid-svg-icons';
import { faCode} from '@fortawesome/free-solid-svg-icons';

function SideBar(props) {
  return (
    <div className="sideBarContainer">
        <Button icon={faUser} text={"About"} showPallets={props.showPallets[0]} toggle={props.toggle}/>
        <Button icon={faCode} text={"Skills"} showPallets={props.showPallets[1]} toggle={props.toggle}/>
        <Button icon={faCodeBranch} text={"Projects"} showPallets={props.showPallets[2]} toggle={props.toggle}/>
        <Button icon={faComment} text={"Contact"} showPallets={props.showPallets[3]} toggle={props.toggle}/>
    </div>
    );
}

export default SideBar;