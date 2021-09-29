import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Main() {
    return (
        
<main className="main">
    <div className="home-slider-container">
      <div className="home-slider owl-carousel owl-theme dot-inside slide-animate" data-owl-options="{
              'dots': false,
              'nav': false
          }">
        <div className="home-slide home-slide-1 banner banner-h-100 banner-md-vw-small">
          <img className="slide-bg owl-lazy h-100" src="assets/images/fluridra/bg_img.gif" data-src="assets/images/fluridra/bg_img.gif" />{/* End .slide-bg */}
          <div className="banner-layer banner-layer-middle text-center">
            <h3 className="text-center m-b-1 text-uppercase appear-animate" data-animation-delay={800} data-animation-duration={1200} data-animation-name="blurIn">Lorem ipsum dolor sit amet</h3>
            <h5 className="d-inline-block m-r-3 text-left text-uppercase appear-animate" data-animation-delay={2200} data-animation-duration={1200} data-animation-name="fadeIn">Proin bibendum placerat libero a porttitor. Donec vestibulum at augue venenatis aliquam. Donec dolor elit, lacinia nec purus eget, fringilla fringilla massa. <br/>

Phasellus congue metus vel lorem faucibus, eget vulputate elit iaculis.</h5>
            <div className="row">
              <div className="col appear-animate" data-animation-delay={2200} data-animation-duration={1200} data-animation-name="fadeIn">
                <div className="card card_custom_margin text-center">
                  <div className="card-body">
                    <img src="assets/images/fluridra/chat.png" />
                      <h2>Chat</h2>
                  </div>
                  </div>
                </div>
                <div className="col appear-animate" data-animation-delay={2300} data-animation-duration={1200} data-animation-name="fadeIn">
                <div className="card card_custom_margin text-center">
                  <div className="card-body">
                  <img src="assets/images/fluridra/phone.png" />
                      <h2>Call</h2>
                  </div>
                  </div>
                </div>
                <div className="col appear-animate" data-animation-delay={2400} data-animation-duration={1200} data-animation-name="fadeIn">
                <div className="card card_custom_margin text-center">
                  <div className="card-body">
                  <img src="assets/images/fluridra/email.png" />
                      <h2 className="mt-1">Email</h2>
                  </div>
                  </div>
                </div>
                <div className="col appear-animate" data-animation-delay={2500} data-animation-duration={1200} data-animation-name="fadeIn">
                <div className="card card_custom_margin text-center">
                  <div className="card-body">
                  <img src="assets/images/fluridra/address.png" />
                      <h2>Address</h2>
                  </div>
                  </div>
                </div>
              </div>
          </div>{/* End .home-slide-content */}
        </div>{/* End .home-slide */}
      </div>
    </div>{/* End .home-slider-container */}
    <div className="half-section">
      <div className="d-flex flex-wrap">
        <div className="col-md-6 col-12 order-md-last half-img banner banner-md-vw-small d-flex align-items-center appear-animate" data-animation-duration={1200} data-animation-name="blurIn">
          <img src="assets/images/fluridra/section_2_img.png" className="section2_img"/>
        </div>{/* End .col-md-6 */}
        <div className="col-md-6 col-12 half-content appear-animate" data-animation-delay={1200} data-animation-duration={1200} data-animation-name="fadeIn">
				<div className="about-section">
					<h2 className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
					<p>Nullam quis dui ut ante sodales volutpat. Pellentesque pulvinar hendrerit libero, sit amet tristique metus vestibulum sit amet. Sed quam enim, aliquam malesuada eleifend quis, cursus eget ante. In tempor nibh purus, at hendrerit nibh faucibus vel. Sed sollicitudin lacus tellus, a dictum tellus cursus non.</p>
          <input type="submit" className="btn btn-custom" value="See More"/>
			</div>
        </div>{/* End .col-md-6 */}
      </div>{/* End .no-gutters */}
    </div>{/* End .half-section */}
    <div className="container-fluid m-b-5 p-b-3">
      <div className="feature-boxes-container text-center">
        <h1>Lorem ipsum dolor sit amet</h1>
        <h3>Proin bibendum placerat libero a porttitor. Donec vestibulum at augue venenatis aliquam. Donec dolor elit, lacinia nec purus eget, fringilla fringilla massa. Donec dapibus pulvinar posuere. Ut at est nulla.</h3>
      <Carousel showStatus={false} showThumbs={false} renderIndicator={(clickHandler, isSelected,i) =>
                (<div className="custom_indicators">
                    {i===0&& (
                        <div>
                            {isSelected?
                    <button style={{border:'none', backgroundColor:'white', cursor:'pointer'}} onClick={clickHandler}>
                        <img src="assets/images/fluridra/green.png" onClick={clickHandler}  role="..."/>
                    </button>
                    :
                    <button style={{border:'none', backgroundColor:'white', cursor:'pointer'}} onClick={clickHandler}>
                        <img src="assets/images/fluridra/gray.png" onClick={clickHandler}  role="..."/>
                    </button>                            
                    }
                    </div>
                     )}
                     {i===1&& (
                       <div className="custom_indicators_2">
                        {isSelected?
                <button style={{border:'none', backgroundColor:'white', cursor:'pointer'}} onClick={clickHandler}>
                    <img src="assets/images/fluridra/green.png" onClick={clickHandler}  role="..."/>
                </button>
                :
                <button style={{border:'none', backgroundColor:'white', cursor:'pointer'}} onClick={clickHandler}>
                    <img src="assets/images/fluridra/gray.png" onClick={clickHandler}  role="..."/>
                </button>                            
                }
                </div>
                 )}
                 
                 {i===2&& (
                   <div className="custom_indicators_3">
                       {isSelected?
               <button style={{border:'none', backgroundColor:'white', cursor:'pointer'}} onClick={clickHandler}>
                   <img src="assets/images/fluridra/green.png" onClick={clickHandler}  role="..."/>
               </button>
               :
               <button style={{border:'none', backgroundColor:'white', cursor:'pointer'}} onClick={clickHandler}>
                   <img src="assets/images/fluridra/gray.png" onClick={clickHandler}  role="..."/>
                </button>                            
                }
                </div>
                )}
                    </div>
                )
            }>
                <div className="feature-boxes-container text-center">
                  <img src="assets/images/fluridra/lock.png" style={{width:'75px'}} role="..."/>
                  <h5>Lorem ipsum</h5>
                  <h3>Sed porttitor erat non libero aliquam, sed aliquam nisl semper. Phasellus quis sapien in elit auctor malesuada. Vivamus nec imperdiet velit. Vivamus dapibus dapibus felis, sed euismod eros finibus ac.</h3>
                </div>
                <div className="feature-boxes-container text-center">
                  <img src="assets/images/fluridra/24.png" style={{width:'75px'}} role="..."/>
                  <h5>Lorem ipsum</h5>
                  <h3>Sed porttitor erat non libero aliquam, sed aliquam nisl semper. Phasellus quis sapien in elit auctor malesuada. Vivamus nec imperdiet velit. Vivamus dapibus dapibus felis, sed euismod eros finibus ac.</h3>
                </div>
                <div className="feature-boxes-container text-center">
                  <img src="assets/images/fluridra/heart.png" style={{width:'75px'}} role="..."/>
                  <h5>Lorem ipsum</h5>
                  <h3>Sed porttitor erat non libero aliquam, sed aliquam nisl semper. Phasellus quis sapien in elit auctor malesuada. Vivamus nec imperdiet velit. Vivamus dapibus dapibus felis, sed euismod eros finibus ac.</h3>
                </div>
                </Carousel>
      </div>
      <div className="products-bottom appear-animate">
        <div className="title-group text-center m-b-4 mt-4 p-t-3">
          <h2 className="section-title text-uppercase ls-n-10">Featured Products</h2>
        </div>
        <div className="featured-products owl-carousel owl-theme" data-owl-options="{
                  'dots': false,
                  'margin': 20,
                  'responsive' : {
                      '992' : {
                          'items' : 4
                      },
                      '1200': {
                          'items':5
                      }
                  }
              }">
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="assets/images/products/product-5.jpg" width={400} height={400} alt="product" />
                <img src="assets/images/products/product-4.jpg" width={400} height={400} alt="product" />
              </a>
              <div className="btn-icon-group">
                <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
              </div>
              <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">clothing</a>,
                  <a href="category.html" className="product-category">trousers</a>
                </div>
                <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
              </div>
              <h2 className="product-title">
                <a href="product.html">Blue Jacket</a>
              </h2>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>{/* End .product-ratings */}
              </div>{/* End .product-container */}
              <div className="price-box">
                <span className="product-price">$149.00</span>
              </div>{/* End .price-box */}
            </div>{/* End .product-details */}
          </div>
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="assets/images/products/product-6.jpg" width={400} height={400} alt="product" />
                <img src="assets/images/products/product-3.jpg" width={400} height={400} alt="product" />
              </a>
              <div className="btn-icon-group">
                <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
              </div>
              <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">headphone</a>,
                  <a href="category.html" className="product-category">trousers</a>
                </div>
                <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
              </div>
              <h2 className="product-title">
                <a href="product.html">Product Red Bag</a>
              </h2>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>{/* End .product-ratings */}
              </div>{/* End .product-container */}
              <div className="price-box">
                <span className="product-price">$101.00</span>
              </div>{/* End .price-box */}
            </div>{/* End .product-details */}
          </div>
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="assets/images/products/product-7.jpg" width={400} height={400} alt="product" />
                <img src="assets/images/products/product-2.jpg" width={400} height={400} alt="product" />
              </a>
              <div className="btn-icon-group">
                <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
              </div>
              <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">headphone</a>,
                  <a href="category.html" className="product-category">trousers</a>
                </div>
                <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
              </div>
              <h2 className="product-title">
                <a href="product.html">Product Black Bag</a>
              </h2>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>{/* End .product-ratings */}
              </div>{/* End .product-container */}
              <div className="price-box">
                <span className="product-price">$99.00 – $109.00</span>
              </div>{/* End .price-box */}
            </div>{/* End .product-details */}
          </div>   
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="assets/images/products/product-8.jpg" width={400} height={400} alt="product" />
                <img src="assets/images/products/product-4.jpg" width={400} height={400} alt="product" />
              </a>
              <div className="btn-icon-group">
                <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
              </div>
              <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">clothing</a>,
                  <a href="category.html" className="product-category">t-shirts</a>
                </div>
                <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
              </div>
              <h2 className="product-title">
                <a href="product.html">Summer T-Shirt</a>
              </h2>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>{/* End .product-ratings */}
              </div>{/* End .product-container */}
              <div className="price-box">
                <span className="product-price">$209.00 – $259.00</span>
              </div>{/* End .price-box */}
            </div>{/* End .product-details */}
          </div>
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="assets/images/products/product-9.jpg" width={400} height={400} alt="product" />
                <img src="assets/images/products/product-1.jpg" width={400} height={400} alt="product" />
              </a>
              <div className="btn-icon-group">
                <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
              </div>
              <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">caps</a>,
                  <a href="category.html" className="product-category">shoes</a>
                </div>
                <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
              </div>
              <h2 className="product-title">
                <a href="product.html">Men Black jacket</a>
              </h2>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>{/* End .product-ratings */}
              </div>{/* End .product-container */}
              <div className="price-box">
                <span className="product-price">$101.00</span>
              </div>{/* End .price-box */}
            </div>{/* End .product-details */}
          </div>
          <div className="product-default inner-quickview inner-icon">
            <figure>
              <a href="product.html">
                <img src="assets/images/products/product-10.jpg" width={400} height={400} alt="product" />
                <img src="assets/images/products/product-4.jpg" width={400} height={400} alt="product" />
              </a>
              <div className="btn-icon-group">
                <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag" /></button>
              </div>
              <a href="ajax/product-quick-view.html" className="btn-quickview" title="Quick View">Quick View</a> 
            </figure>
            <div className="product-details">
              <div className="category-wrap">
                <div className="category-list">
                  <a href="category.html" className="product-category">caps</a>,
                  <a href="category.html" className="product-category">shoes</a>
                </div>
                <a href="#" className="btn-icon-wish"><i className="icon-heart" /></a>
              </div>
              <h2 className="product-title">
                <a href="product.html">Porto Sport Shirts</a>
              </h2>
              <div className="ratings-container">
                <div className="product-ratings">
                  <span className="ratings" style={{width: '0%'}} />{/* End .ratings */}
                  <span className="tooltiptext tooltip-top" />
                </div>{/* End .product-ratings */}
              </div>{/* End .product-container */}
              <div className="price-box">
                <span className="product-price">$101.00</span>
              </div>{/* End .price-box */}
            </div>{/* End .product-details */}
          </div>                                      
        </div>{/* End .featured-products */}
      </div>
    </div>{/* End .container-fluid */}
  </main>

);
}

export default Main;

if (document.getElementById('main')) {
ReactDOM.render(<Main />, document.getElementById('main'));
}
