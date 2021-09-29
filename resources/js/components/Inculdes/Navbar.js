import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu'

class Navbar extends Component {
  render() { 
      return (   

<div>
<header className="header header-transparent appear-animate">
    <div className="header-middle">
      <div className="container-fluid">
      <div className="header-left flex-1 d-none d-lg-flex">
          <nav className="main-nav">
            <ul className="menu">
              <li className="active">
                <a href="/" className="logo logo-transition">
                  <img src="assets/images/fluridra/logo.png" alt="Fluridra" />
                 </a>
              </li>
            </ul>
          </nav>
        </div>{/* End .header-left */}
        <div className="header-center ml-0">
        <button className="mobile-menu-toggler" type="button">
          <i className="icon-menu" style={{color:'white'}}/>
        </button>   
        <a href="/" className="d-md-none d-xl-none logo logo-transition">
          <img src="assets/images/fluridra/logo.png" alt="Fluridra" />
        </a>
      </div>{/* End .header-center */}
        <div className="header-right d-none d-lg-flex"> 
          <nav className="main-nav">
            <ul className="menu">
              <li><a className="d-none d-xl-inline-block" href="#">About</a></li>
              <li><a className="d-none d-xl-inline-block" href="#">Services</a></li>
              <li><a className="d-none d-xl-inline-block" href="#">Portfolio</a></li>
              <li><a className="d-none d-xl-inline-block" href="#">                        
                <div className="header-search header-search-popup header-search-category d-none d-sm-block">
                  <a href="#" className="search-toggle " role="button"><i className="icon-magnifier" style={{color:'white'}}></i></a>
                    <div className="header-search-wrapper">
                        <input type="search" className="form-control" name="q" id="q" placeholder="I'm searching for..." required=""/>
                        <div className="select-custom">
                            <select id="cat" name="cat">
                                <option value="">All Categories</option>
                            </select>
                        </div>
                      </div>
                  </div>
                  </a>
              </li>
              <li>
              <a className="d-none d-xl-inline-block cutom_margin_navbar" href="#">   
              <Menu customBurgerIcon={<img src="assets/images/fluridra/menu.png"/>}>
                <a href="/" className="menu-item">Home</a>
                <a href="/" className="menu-item">About</a>
                <a href="/" className="menu-item">Services</a>
                <a href="/" className="menu-item">Portfolio</a>
              </Menu>
              </a>
              </li>
            </ul>
          </nav>
        </div>{/* End .header-right */}

      </div>{/* End .container-fluid */}
    </div>{/* End .header-middle */}
  </header>{/* End .header */}
</div>
    );
}
}

export default Navbar;

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}