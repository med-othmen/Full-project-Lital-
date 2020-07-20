import React from "react";
import logo from "./logo.png";
import "./LandingPage.css";

import LandingPageModal from "./LandingPageModal";
class LandingPage extends React.Component {
  render() {
    return (
      <div className="LandingPageAll">
        <div className="logo-btn">
          <img src={logo} className="logo" alt="team-picture" />
          <LandingPageModal />
        </div>
        <div className="text">
          <p className="p-everyone">Hello everyone!</p>
          <p className="p-atelier">
            L’Atelier Lital c’est aujourd’hui plus de 20 ans d’expérience dans
            la maroquinerie. <br />
            En 2015, L’Atelier Lital a rejoint le Groupe Meninx Holding.
          </p>
        </div>
        <div class="social">
          <ul>
            <a>
              <i class="fab fa-pinterest-p"></i>
            </a>
            <a>
              <i class="fab fa-facebook-f"></i>
            </a>
            <a>
              <i class="fab fa-instagram"></i>
            </a>
            <a>
              <i class="fab fa-twitter"></i>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}
export default LandingPage;
