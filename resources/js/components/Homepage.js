import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'
import Navbar from './Inculdes/Navbar'
import Footer from './Inculdes/Footer'

function Homepage() {
  
    return (
        <div>
<div className="page-wrapper">
        <Navbar/>
        <Main/>
        <div className="clearfix"></div>
        <Footer/>
</div>
  <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
  <div className="mobile-menu-container">
    <div className="mobile-menu-wrapper">
      <span className="mobile-menu-close"><i className="icon-cancel" /></span>
      <nav className="mobile-nav">
        <ul className="mobile-menu">
          <li className="active"><a href="#">Home</a></li>
          <li className="active"><a href="#">About</a></li>
          <li className="active"><a href="#">Services</a></li>
          <li className="active"><a href="#">Portfolio</a></li>

        </ul>
      </nav>{/* End .mobile-nav */}
      <div className="social-icons">
        <a href="#" className="social-icon" target="_blank"><i className="icon-facebook" /></a>
        <a href="#" className="social-icon" target="_blank"><i className="icon-twitter" /></a>
        <a href="#" className="social-icon" target="_blank"><i className="icon-instagram" /></a>
      </div>{/* End .social-icons */}
    </div>{/* End .mobile-menu-wrapper */}
  </div>{/* End .mobile-menu-container */}

  <a id="scroll-top" href="#top" title="Top" role="button"><i className="icon-angle-up" /></a>

</div>
    );
}

export default Homepage;

if (document.getElementById('homepage')) {
    ReactDOM.render(<Homepage />, document.getElementById('homepage'));
}
