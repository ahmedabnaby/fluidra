import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Main() {
  const [data , setData] = useState([])
  useEffect(()=>{
      axios.get('/api/blogs')
      .then(response=>{
          setData(response.data);
      });
  }, []);
  
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
          <a href="#lorem" className="btn btn-custom">See More</a>
			</div>
        </div>{/* End .col-md-6 */}
      </div>{/* End .no-gutters */}
    </div>{/* End .half-section */}
    <div className="container-fluid m-b-5 p-b-3">
      <div className="feature-boxes-container text-center" id="lorem">
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
      

      <div className="half-section">
      <div className="d-flex flex-wrap">
 
        <div className="col-md-6 col-12 half-content appear-animate" data-animation-delay={1200} data-animation-duration={1200} data-animation-name="fadeIn">
          <div className="greenBox">
            <h3>Integer porttitor, metus eu auctor consectetur </h3>
            <a href="#">Read More</a>
          </div>
            <img src="assets/images/fluridra/bg1.png" className="forest_img" />
        </div>{/* End .col-md-6 */}
        <div className="col-md-6 col-12 order-md-last half-img banner banner-md-vw-small align-items-center appear-animate author_custom_div" data-animation-duration={1200} data-animation-name="blurIn">
        {data.map(row=>(
          <div className="post-author" key={row.id}>
            <figure>
                <img src={"assets/images/fluridra/"+row.image} className="banner_img_custom" alt="author" />
            </figure>
            <div className="author-content">
              <h5 className="lead">{row.date}</h5>
              <p>{row.text}</p>
            </div>{/* End .author.content */}
          <Popup trigger={<button className="btn btn-sm btn-custom ml-5 p-3 update_div"> Update contents</button>} position="center">
            <div className="p-5">
            {/* <form action={"/blogs/update/"+row.id} method="get"> */}
            <form action={"/updates/"+row.id}>
							<div className="form-group required-field">
								<label htmlFor="contact-name">Text</label>
								<input type="text" className="form-control" name="text" required/>
							</div>

							<div className="form-group required-field">
								<label htmlFor="contact-email">Date</label>
								<input type="date" className="form-control" name="date" required/>
							</div>

							<div className="form-footer">
								<button type="submit" className="btn btn-primary">Submit</button>
							</div>
						</form>
            </div>
          </Popup>
          </div>
             ))} 

        </div>{/* End .col-md-6 */}
      </div>{/* End .no-gutters */}
    </div>{/* End .half-section */}

    <div className="half-section">
      <div className="d-flex flex-wrap">
        <div className="col-md-6 col-12 order-last order-xl-first half-content appear-animate iphone_img" data-animation-delay={1200} data-animation-duration={1200} data-animation-name="fadeIn">
            <img src="assets/images/fluridra/iphone.png" role="iphone"/>
        </div>
        <div className="col-md-6 col-12 half-img banner banner-md-vw-small align-items-center appear-animate" data-animation-duration={1200} data-animation-name="blurIn">
          <div className="last-section text-left">
            <h1>Download Now</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet semper finibus. Proin cursus porta ipsum, id euismod eros consequat vitae. Donec rutrum risus augue, consequat eleifend ipsum faucibus id.</h3>
            <div className="row">
            <img src="assets/images/fluridra/google.png" className="google_apple_img" role="iphone"/>
            <img src="assets/images/fluridra/apple.png" className="google_apple_img" role="iphone"/>
            </div>
          </div>
        </div>
      </div>
        
      </div>
    </div>{/* End .container-fluid */}
  </main>

);
}

export default Main;

if (document.getElementById('main')) {
ReactDOM.render(<Main />, document.getElementById('main'));
}
