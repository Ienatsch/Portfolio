import React from 'react';
import "../infoPallet/pallet.css";
import Config from "../../config.json";

function ProjectsPallet() {

    function routeToProject(link){
        window.open(link, '_blank');
    }

    return (
        <div className="pallet">
            <div className="projectsContainer">
                <figure onClick={() => routeToProject(Config.projectUrls.SEEKER)}>
                    <img src="https://ienatsch.github.io/Portfolio/images/seekerImg.png" alt="Seeker-Project" />
                    <figcaption>SEEKER</figcaption>
                </figure>
                <figure onClick={() => routeToProject(Config.projectUrls.NATPK)}>
                    <img src="https://ienatsch.github.io/Portfolio/images/natpkImg.png" alt="NATPK-Project" />
                    <figcaption>NATPK</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default ProjectsPallet;