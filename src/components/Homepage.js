import React from 'react';
import './style/Homepage.css';
import image_footer from './images/footerimg.png';
import rimage from './images/rotate.png';
import { useSpring,animated } from 'react-spring'



const data = [{image:image_footer,title:"WEB APPLICATION PENETRATION TESTING",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image_footer,title:"MOBILE APPLICATION PENETRATION TESTING",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image_footer,title:"API PENETRATION TESTING",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image_footer,title:"NETWORK PENETRATION TESTING",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image_footer,title:"SERVER AND CLOUD SECURITY AUDITS",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image_footer,title:"THICK CLIENT APPLICATION PENETRATION TESTING",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image_footer,title:"SOURCE CODE REVIEW",about:"Some quick example text to build on the card title and make up the bulk of the card's content."},
              {image:image_footer,title:"AUDITS OF SWITCHES ,ROUTERS AND FIREWALL RULES",about:"Some quick example text to build on the card title and make up the bulk of the card's content."}
            
            ]



const Homepage = (props) => {
    const styles = useSpring({
      loop: true,
      from: { rotateZ: 180 },
      to: { rotateZ: 360 },
    })
  return(
    <>
    
    <section className="container-fluid">
      <div className="row mt-4">
        <div className="row mt-5">
          
        </div>
      </div>
    </section>

    <section className="container">
    <div className="row my-5 py-5">
      <div className="col-lg-6 col-10 mx-auto">
        <h2 style={{color:"#20C20E"}}>Who we are ?</h2>
        <p>We are a Cyber Security Organization
            providing end-to-end security solutions and
            consultancy. We provide high end security
            services in Vulnerability Assessment and
            Penetration Testing.</p>
      </div>
      <div className="col-lg-4 col-7 my-lg-0 my-4 mx-lg-0 mx-auto">
        <animated.img
          src = {rimage}
          alt = "RotatingImage"
          style = {{ width:"200px",...styles,}}
        />
      </div>
    </div>
    </section>
   

    <section className="container">
      <div className="row my-4">
        <div className="col-lg-4 col-12">
          <h1 className="ms-3 ms-lg-0">OUR <span style= {{color:"#20C20E"}}>SERVICES</span></h1>
        </div>
      </div>
      <div className="row">
      { data.map((val,index)=>{
        return(
          <div className="col-lg-3 col-6 mx-lg-auto mx-0 shadow_effect my-lg-3 my-1" key={index}>
            <div className="card card_item py-3 my-lg-4 my-2 mx-lg-2 mx-0">
              <img src={val.image} className="card-img-top mx-auto" alt="Card1" style={{width:"100px"}}/>
              <div className="card-body text-center">
                <h6 className="card-title" style={{color:"#20C20E",fontWeight:"500"}}>{val.title}</h6>
                <p className="card-text d-lg-block d-none">{val.about}</p>
              </div>
            </div>
          </div>

        )
      })}        
      </div>
    </section>
    </>
   )

 }

export default Homepage;