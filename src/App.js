import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconInstagram } from './assets/icons/instagram.svg';
import { ReactComponent as IconInstagram_ } from './assets/icons/instagram-svg.svg';

import logo from './assets/images/Bi-Youth.Innovators new march 2023.png';
import QRCode from './assets/images/burundi_youth QR.png';

import './App.css';

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <img style={{ width: 35, height: 35 }} src={logo} alt="logo" />
          </div>
          <div className="social">
            <a
              href="https://facebook.com//burundi_youth"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconFacebook className="icon" />
            </a>
            <a
              href="https://twitter.com/burundi_youth"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconTwitter className="icon" />
            </a>
            <a
              href="https://instagram.com/burundi_youth"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconInstagram className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>
              We are #YouthInnovators #ChangeMakers <br></br> Website coming
              soon - Scan the QR Code
            </p>
          </div>
          <div className="qrcard">
            <img
              style={{ width: 180, height: 180 }}
              src={QRCode}
              alt="react logo"
            />
          </div>

          <a href="mailto:bi.youth.innovators@gmail.com">
            <div className="cta">Or shoot us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>
            made with love by{' '}
            <a
              className="underlined"
              href="https://bluetec.bi"
              target="_blank"
              rel="noopener noreferrer"
            >
              bluetec
            </a>
          </span>
        </div>
      </div>
    );
  };
}

export default App;
