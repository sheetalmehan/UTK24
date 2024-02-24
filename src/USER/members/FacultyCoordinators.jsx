import React, { useEffect } from 'react';
import './member.css';
import VanillaTilt from './Vanillatilt.js'; // Import the default export from VanillaTilt.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPerson, faUser } from '@fortawesome/free-solid-svg-icons';

const FacultyCoordinators = () => {
    // useEffect(() => {
    //     VanillaTilt.init(document.querySelectorAll(".card4545"), {
    //         max: 11,
    //         speed: 1200
    //     });
    // }, []);

    return (
        <div className='facultycoordinator'>
            <div className="container1">
                <h2 className='teamheading' style={{ textAlign: 'center', }}>Faculty Coordinators</h2>
                <div className="cont">
                    <div className="card4545 card1 main-card">
                        <h3>Prof Binod Kumar Kanaujia</h3>
                        <h4>Director</h4>
                        <span>
                            <img src="https://v1.nitj.ac.in/images/admin_page/Director/Director.jpg" alt="director" />
                        </span>
                        <div className="content">
                            {/* <h2>01</h2> */}
                            <div>
                                {/* <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a> */}
                                <a href="https://departments.nitj.ac.in/dept/ece/Faculty/6430446f38bff038a7808ab6" target="_blank">
                                <FontAwesomeIcon icon={faUser} size="3x" style={{ color: 'black' }} />
                                </a>
                               

                            </div>
                            <h7>Profile</h7>
                        </div>
                    </div>



                </div>
            </div>

            <div className="container1">

                <div className="cont">
                    <div className="card4545 card1">
                        <h3>Prof Anish Sachdeva</h3>
                        <h4>DSW</h4>
                        <span>
                            <img src="https://lh5.googleusercontent.com/-TCCtWppa9GY/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reHGIkUvU97e2PGpkPi2ULDvnCXHw/mo/photo.jpg" alt="" />
                        </span>
                        <div className="content">
                            {/* <h2>02</h2> */}
                            <div>
                                {/* <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a> */}
                                <a href="https://departments.nitj.ac.in/dept/ipe/Faculty/6430445738bff038a780609d" target="_blank">
                                <FontAwesomeIcon icon={faUser} size="3x" style={{ color: 'black' }} />
                                </a>
                               

                            </div>
                            <h7>Profile</h7>
                        </div>
                    </div>

                    <div className="card4545 card1">
                        <h3>Dr Jaspreet Kaur</h3>
                        <h4>ADSW</h4>
                        <span>
                            <img src="https://www.nitj.ac.in/images/faculty/18030588474.jpg" alt="" />
                        </span>
                        <div className="content">
                            {/* <h2>03</h2> */}
                            <div>

                                <a href="https://departments.nitj.ac.in/dept/cy/Faculty/6430445238bff038a7805070" target="_blank">
                                <FontAwesomeIcon icon={faUser} size="3x" style={{ color: 'black' }} />
                                </a>
                               

                            </div>
                            <h7>Profile</h7>
                        </div>
                    </div>



                </div>
            </div>

            <div className="container1">

                <div className="cont">
                    <div className="card4545 card1">
                        <h3>Dr Indu Saini</h3>
                        <h4>Chair person</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708782165/18011954316_ubz5aj.png" alt="" />
                        </span>
                        <div className="content">
                            {/* <h2>04</h2> */}
                            <div>
                                {/* <a href="https://www.instagram.com/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a> */}
                                <a href="https://departments.nitj.ac.in/dept/ece/Faculty/6430445538bff038a7805caf" target="_blank">
                                <FontAwesomeIcon icon={faUser} size="3x" style={{ color: 'black' }} />
                                </a>
                               

                            </div>
                            <h7>Profile</h7>
                        </div>
                    </div>

                    <div className="card4545 card1">
                        <h3>Dr Afzal Sikandar</h3>
                        <h4>Deputy Chair Person</h4>
                        <span>
                            <img src="https://www.nitj.ac.in/images/faculty/18020663191.jpg" alt="" />
                        </span>
                        <div className="content">
                            {/* <h2>05</h2> */}
                            <div>

                                <a href="https://departments.nitj.ac.in/dept/ice/Faculty/6430446838bff038a7807deb" target="_blank">
                                <FontAwesomeIcon icon={faUser} size="3x" style={{ color: 'black' }} />
                                </a>
                               

                            </div>
                            <h7>Profile</h7>
                        </div>
                    </div>


                    <div className="card4545 card1">
                        <h3>Dr Narendra Kumar</h3>
                        <h4>Deputy Chair Person</h4>
                        <span>
                            <img src="https://v1.nitj.ac.in/nitj_files/links/Photo_69247.jpeg" alt="" />
                        </span>
                        <div className="content">
                            {/* <h2>06</h2> */}
                            <div>

                                <a href="https://departments.nitj.ac.in/dept/ipe/Faculty/6430446d38bff038a780895c" target="_blank">
                                    <FontAwesomeIcon icon={faUser} size="3x" style={{ color: 'black' }} />
                                </a>
                               

                            </div>
                            <h7>Profile</h7>
                            
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default FacultyCoordinators;
