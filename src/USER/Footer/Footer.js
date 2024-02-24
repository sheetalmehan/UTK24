import React from 'react';
import './Footer.css';
import { MdOutlineModeEdit } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartO, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <ul className="ulik" style={{ listStyle: 'none' }} id="C">
        <li className="lin"><a className="anchor" href="https://www.facebook.com/utkansh" target="_blank"><FontAwesomeIcon icon={faFacebook} size="1x" style={{ color: 'blue' }} /></a></li>
        <li className="lin"><a className="anchor" href="https://www.youtube.com/@UtkanshNITJalandhar" target="_blank"><FontAwesomeIcon icon={faYoutube} size="1x" style={{ color: 'red' }} /></a></li>
        <li><a className="anchor" href="https://www.instagram.com/utkansh.nitj/" target="_blank"> <FontAwesomeIcon icon={faInstagram} size="1x" style={{ color: 'red' }} /></a></li>
        {/* <li><a className="anchor" href="https://www.linkedin.com/in/abhishek-kumar-992757211/"><FontAwesomeIcon icon={faTelegram} size="3x"/></a></li> */}
        {/* <li><a className="anchor" href="https://www.instagram.com/abhishek1108032022/"><FontAwesomeIcon icon={faTelegram} size="3x"/></a></li> */}
      </ul>
      {/* <div class="container"> */}
        <div className="row footer_bottom justify-content-center">
          <p className="">
            Made with <FontAwesomeIcon icon={faHeart} /> by <Link to ='/Developers'>WEB AND APP TEAM UTKANSH</Link>
            <br></br> Copyright &copy; Utkansh
            <script>document.write(new Date().getFullYear());</script>
          </p>
        </div>
      {/* </div> */}


    </footer>
  );
};

export default Footer;
