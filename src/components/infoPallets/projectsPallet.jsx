import React from 'react';
import "../infoPallets/pallet.css";
import Config from "../../config.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function ProjectsPallet() {

    function routeToProject(link){
        window.open(link, '_blank');
    }

    return (
        <div className="pallet">
            <h3>My <span className="titleAccent">Projects</span></h3>
            <div className="projectsContainer">
                <figure>
                    <img src="https://ienatsch.github.io/Portfolio/images/seekerImg.png" alt="Seeker-Project" />
                    <figcaption>
                        SEEKER
                        <div className="figIcons">
                            <FontAwesomeIcon icon={faEye} onClick={() => routeToProject(Config.projectUrls.SEEKER)}/>    
                            <FontAwesomeIcon icon={faGithub} onClick={() => routeToProject(Config.repoUrls.SEEKER)}/>
                        </div>   
                    </figcaption>
                </figure>
                <figure>
                    <img src="https://ienatsch.github.io/Portfolio/images/natpkImg.png" alt="NATPK-Project" />
                    <figcaption>
                        NATPK
                        <div className="figIcons">
                            <FontAwesomeIcon icon={faEye} onClick={() => routeToProject(Config.projectUrls.NATPK)}/>    
                            <FontAwesomeIcon icon={faGithub} onClick={() => routeToProject(Config.repoUrls.NATPK)}/>
                        </div>                     
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default ProjectsPallet;