import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
// import Image from 'next/image';
// import Logo  from "../public/SF.png";
// import Img5 from "../assets/img/louis-06.png";
import { NavLink } from 'react-router-dom';
import "../Footer.css";

 export const Footer = () => (
   <>
     <div className="footer-container">
       <div className="column">
         <h4>About Us</h4>
         <hr />
         {/* <div className='logContainer'>
           <div className='log'>
             <Image src={ Logo } width={110} height={100} alt="pic" />

           </div>
         </div> */}
         <p>We are Truckage Dispatch Services. Experienced trucking
           company operating in 48 U.S continental states. We are an
           Illinois asset based over the road transportation company. We
           service all 48 states, and specialize in expedite full
           truckload and LTL freight. We are a service based company, we
           sell our transportation services to shippers, customers,
           brokers, etc. We also can provide dedicated service for your
           dedicated lanes if needed.</p>
       </div>
       <div className="column">
         <h4>Quick Links</h4>
         <hr />

         <NavLink to="/"><p style={{color:"white"}}>Home</p></NavLink>
          <NavLink to="/aboutus"><p style={{color:"white"}}>Explore About Us</p ></NavLink>
         <NavLink to="/pricing"><p style={{color:"white"}}>Our Pricing</p></NavLink>
         <NavLink to="/faqs"><p style={{color:"white"}}>Frequently Asked Question's</p></NavLink>
         <NavLink to="/agreement"><p style={{color:"white"}}> Sign an Agreement</p></NavLink>
         <NavLink to="/blogs"><p style={{color:"white"}}> Read our Blogs</p></NavLink>

       </div>
       <div className="column">
         <h4>Our Location</h4>
         <hr />
         <p>Connect with us on Facebook</p>
       </div>
       <div className="column">
         <h4>Contact Us</h4>
         <hr />
         <p><b>Contact us or WhatsApp:</b><br />
           <a href="tel:+19804855274" style={{textDecoration:"none", color:"white"}}>+1 (980) 485-5274</a></p>
         <hr />
         <p><b>Email:</b><br />
           
           <a href="mailto:truckage.dispatch@gmail.com" style={{textDecoration:"none", color:"white"}} >truckage.dispatch@gmail.com</a></p>

         <p><b>Monday-Saturday</b>: 9am to 5pm<br />
           <b>Sunday</b>: Closed</p>

         <p><b>Address</b>: 4-km, Main G.T Road Muridke. (39000), Punjab, Pakistan.</p>
         <p>
           <b>UK Address </b>: Salt land LTD
           84 Katherine road London E6 1EN United Kingdom</p>
       </div>
     </div>

     {/* Strip */}

     <div className="strip">
       <div>All Rights Reserved © Copyright 2023 - Trukage Dispatch Services

         <p className='jack'> <AiFillInstagram style={{ float: "right", marginLeft: "10px" }} />
           <AiOutlineTwitter style={{ float: "right", marginLeft: "10px" }} />
           <AiFillFacebook style={{ float: "right", marginLeft: "10px" }} />
           <AiFillYoutube style={{ float: "right", marginLeft: "10px" }} />
           <AiFillLinkedin style={{ float: "right", marginLeft: "10px" }} /></p>  </div>



     </div>
   </>
 )
