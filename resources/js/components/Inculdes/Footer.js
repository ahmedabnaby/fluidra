import React from 'react';
import ReactDOM from 'react-dom';

function Footer() {
    return (
<footer className="footer appear-animate">
    <div className="container-fluid">
      <div className="footer-top">
        <div className="widget widget-newsletter">
          <div className="row">
            <div className="col-lg-4">
              <h4 className="widget-title">Subscribe newsletter</h4>
              <p>Get all the latest information on Events, Sales and Offers. Sign up for newsletter today.</p>
            </div>{/* End .col-lg-6 */}
            <div className="col-lg-6 d-flex align-items-center">
              <form action="#" className="d-flex w-100 p-b-1">
                <input type="email" className="form-control mb-0" placeholder="Enter Your Email address" required />
                <button type="submit" className="btn btn-primary text-white">Subscribe</button>
              </form>
            </div>{/* End .col-lg-6 */}
            <div className="col-lg-2 widget-social d-flex align-items-center justify-content-lg-end justify-content-start mt-3 mt-lg-0">
              <div className="social-icons p-b-1">
                <a href="#" className="social-icon" target="_blank"><i className="icon-instagram" /></a>
                <a href="#" className="social-icon" target="_blank"><i className="icon-twitter" /></a>
                <a href="#" className="social-icon" target="_blank"><i className="icon-facebook" /></a>
              </div>{/* End .social-icons */}
            </div>{/* End .col-md-3 */}
          </div>{/* End .row */}
        </div>{/* End .widget */}
      </div>{/* End .footer-top */}
    </div>{/* End .container-fluid */}
    <div className="footer-middle">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div className="widget">
              <h4 className="widget-title m-b-3">Contact Info</h4>
              <ul className="contact-info">
                <li>
                  <span className="contact-info-label">Address:</span>1234 Street Name, City, England
                </li>
                <li>
                  <span className="contact-info-label">Phone:</span>Toll Free <a href="tel:">(123) 456-7890</a>
                </li>
                <li>
                  <span className="contact-info-label">Email:</span> <a href="mailto:mail@example.com">mail@example.com</a>
                </li>
              </ul>
            </div>{/* End .widget */}
          </div>{/* End .col-lg-3 */}
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-4">
                <div className="widget">
                  <h4 className="widget-title">My Account</h4>
                  <div className="row">
                    <div className="col-sm-6">
                      <ul className="links">
                        <li><a href="about.html">About us</a></li>
                        <li><a href="contact.html">Contact us</a></li>
                        <li><a href="my-account.html">My Account</a></li>
                      </ul>
                    </div>{/* End .col-sm-6 */}
                    <div className="col-sm-6">
                      <ul className="links">
                        <li><a href="#">Order history</a></li>
                        <li><a href="#">Advanced search</a></li>
                        <li><a href="#" className="login-link">Login</a></li>
                      </ul>
                    </div>{/* End .col-sm-6 */}
                  </div>{/* End .row */}
                </div>{/* End .widget */}
              </div>{/* End .col-md-4 */}
              <div className="col-lg-5">
                <div className="widget">
                  <h4 className="widget-title">Main Features</h4>
                  <div className="row">
                    <div className="col-sm-6">
                      <ul className="links">
                        <li><a href="#">Super Fast Wordpress Theme</a></li>
                        <li><a href="#">1st Fully working Ajax Theme</a></li>
                        <li><a href="#">33 Unique Shop Layouts</a></li>
                      </ul>
                    </div>{/* End .col-sm-6 */}
                    <div className="col-sm-6">
                      <ul className="links">
                        <li><a href="#">Powerful Admin Panel</a></li>
                        <li><a href="#">Mobile &amp; Retina Optimized</a></li>
                      </ul>
                    </div>{/* End .col-sm-6 */}
                  </div>{/* End .row */}
                </div>{/* End .widget */}
              </div>{/* End .col-md-5 */}
              <div className="col-lg-3">
                <div className="widget">
                  <h4 className="widget-title">Working Days/Hours</h4>
                  <ul className="contact-info">
                    <li>
                      Mon - Sun / 9:00AM - 8:00PM
                    </li>
                  </ul>
                </div>{/* End .widget */}
              </div>{/* End .col-md-33 */}
            </div>{/* End .row */}
            <div className="footer-bottom d-block d-md-flex justify-content-between align-items-center">
              <p className="footer-copyright mb-0">Porto eCommerce. ©  2020  All Rights Reserved</p>
              <img src="assets/images/payments.png" alt="payment methods" width={240} height={32} className="footer-payments" />
            </div>{/* End .footer-bottom */}
          </div>{/* End .col-lg-9 */}
        </div>{/* End .row */}
      </div>{/* End .container-fluid */}
    </div>{/* End .footer-middle */}
  </footer>
      );
    }

export default Footer;

if (document.getElementById('footer')) {
    ReactDOM.render(<Footer />, document.getElementById('footer'));
}
