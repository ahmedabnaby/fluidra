import React from 'react';
import ReactDOM from 'react-dom';

function Footer() {
    return (
<footer className="my-footer appear-animate">
    <div className="container-fluid">
      <div className="row">
        <div className="my-footer-content col text-left pt-5">
          <p>70 Bowman St.</p>
          <p>South Windsor, CT 06074</p>
        </div>
        <div className="my-footer-content col pt-5">
          <img src="assets/images/fluridra/footer-logo.png" role="footer_logo"/>
          </div>
          <div className="my-footer-content col text-left pt-5">
            <p> 2017 Fluidra. All Rights Reserved.</p>
          </div>
      </div>
    </div>{/* End .container-fluid */}
  </footer>
      );
    }

export default Footer;

if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}
