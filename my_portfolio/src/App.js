import React from 'react';
import SideBar from '../src/components/sidebar/sidebar';
import '../src/main.css';
import AboutPallet from '../src/components/infoPallet/aboutPallet';
import LanguagesPallet from '../src/components/infoPallet/languagesPallet';
import ProjectsPallet from '../src/components/infoPallet/projectsPallet';
import ContactPallet from '../src/components/infoPallet/contactPallet';
import Particles from "react-particles-js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const particlesOptions = {
  "particles": { "number": { "value": 10, "density": { "enable": true, "value_area": 1924.0944730386273 } }, "color": { "value": "#ffffff" }, "shape": { "type": "polygon", "stroke": { "width": 0, "color": "#19355c" }, "polygon": { "nb_sides": 3 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.4489553770423464, "random": true, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 71.02328774690454, "random": true, "anim": { "enable": false, "speed": 222.97702297702298, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1.603412060865523, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": false, "mode": "repulse" }, "onclick": { "enable": false, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": false
}


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0,
      showAboutPallet: false,
      showLanguagesPallet: false,
      showProjectsPallet: false,
      showContactPallet: false
    };

    window.addEventListener("resize", this.update);
  }

  componentDidMount() {
    this.update();
  }

  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth
    });
  };

  togglePallets = (pallet) => {
    this.setState({ showAboutPallet: false });
    this.setState({ showLanguagesPallet: false });
    this.setState({ showProjectsPallet: false });
    this.setState({ showContactPallet: false });

    const palletState = this.state[pallet] ? false : true;
    this.setState({ [pallet]: palletState });
  }

  render() {
    if (window.innerWidth < 800) {
      return (
        <div className="mainWrapper">
          <Particles className="particles" params={particlesOptions} />
          <div className="mainContainer">
            <div className="nameTitle">
              <h1>Dalan Ienatsch</h1>
              <h3>Software Developer</h3>
            </div>
            <div className="socialLinks">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faFilePdf} />
            </div>
          </div>
          <SideBar toggle={this.togglePallets} showPallets={["showAboutPallet", "showLanguagesPallet",
            "showProjectsPallet", "showContactPallet"]} />
          {this.state.showAboutPallet && <AboutPallet />}
          {this.state.showLanguagesPallet && <LanguagesPallet />}
          {this.state.showProjectsPallet && <ProjectsPallet />}
          {this.state.showContactPallet && <ContactPallet />}
        </div>
      );
    }
    else if (window.innerWidth < 1200) {
      return (
        <div className="mainWrapper">
          <Particles className="particles" params={particlesOptions} />
          <SideBar toggle={this.togglePallets} showPallets={["showAboutPallet", "showLanguagesPallet",
            "showProjectsPallet", "showContactPallet"]} />
          <div className="mainContainer">
            <div className="myImage">
              <img src="images/picture-of-me.jpg" alt="Me"></img>
            </div>
            <div className="nameTitle">
              <h1>Dalan Ienatsch</h1>
              <h3>Software Developer</h3>
            </div>
            <div className="socialLinks">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faFilePdf} />
            </div>
          </div>
          {this.state.showAboutPallet && <AboutPallet />}
          {this.state.showLanguagesPallet && <LanguagesPallet />}
          {this.state.showProjectsPallet && <ProjectsPallet />}
          {this.state.showContactPallet && <ContactPallet />}
        </div>
      );
    }
    else {
      return (
        <div className="mainWrapper">
          <Particles className="particles" params={particlesOptions} />
          <SideBar toggle={this.togglePallets} showPallets={["showAboutPallet", "showLanguagesPallet",
            "showProjectsPallet", "showContactPallet"]} />
          <div className="mainContainer">
            <div className="myImage">
              <img src="images/picture-of-me.jpg" alt="Me"></img>
            </div>
            <div className="nameTitle">
              <h1>Dalan Ienatsch</h1>
              <h3>Software Developer</h3>
            </div>
            <div className="socialLinks">
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faFilePdf} />
            </div>
          </div>
          {this.state.showAboutPallet && <AboutPallet />}
          {this.state.showLanguagesPallet && <LanguagesPallet />}
          {this.state.showProjectsPallet && <ProjectsPallet />}
          {this.state.showContactPallet && <ContactPallet />}
        </div>
      );
    }
  }
}

export default App;