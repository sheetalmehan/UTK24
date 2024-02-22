import React, { useEffect } from 'react';
import './member.css';
import VanillaTilt from './Vanillatilt.js'; // Import the default export from VanillaTilt.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

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
                            <img src="https://nitj.irins.org/assets/profile_images/60657.jpg" alt="director" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                {/* <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a> */}
                                <a href="https://www.linkedin.com/in/prof-binod-kumar-kanaujia-42430762/?originalSubdomain=in" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                {/* <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a> */}
                            </div>
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
                            <h2>02</h2>
                            <div>
                                {/* <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a> */}
                                <a href="https://www.linkedin.com/in/anish-sachdeva-9683436/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                {/* <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a> */}
                            </div>
                        </div>
                    </div>

                    <div className="card4545 card1">
                        <h3>Dr Jaspreet Kaur</h3>
                        <h4>ADSW</h4>
                        <span>
                            <img src="https://www.nitj.ac.in/images/faculty/18030588474.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>03</h2>
                            <div>
                               
                                <a href="https://www.linkedin.com/in/jaspreet-kaur-8a93a056/?originalSubdomain=in" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                
                            </div>
                        </div>
                    </div>


                   
                </div>
            </div>


            <div className="container1">
                <h2 className='teamheading' style={{ textAlign: 'center', }}>Faculty Coordinators</h2>
                <div className="cont">
                    <div className="card4545 card1 main-card">
                        <h3>Prof Binod Kumar Kanaujia</h3>
                        <h4>Director</h4>
                        <span>
                            <img src="https://nitj.irins.org/assets/profile_images/60657.jpg" alt="director" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                {/* <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a> */}
                                <a href="https://www.linkedin.com/in/prof-binod-kumar-kanaujia-42430762/?originalSubdomain=in" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                {/* <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a> */}
                            </div>
                        </div>
                    </div>


                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>

                    </div>
                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container1">
                <h2 className='teamheading' style={{ textAlign: 'center', }}>Faculty Coordinators</h2>
                <div className="cont">
                    <div className="card4545 card1 main-card">
                        <h3>Prof Binod Kumar Kanaujia</h3>
                        <h4>Director</h4>
                        <span>
                            <img src="https://nitj.irins.org/assets/profile_images/60657.jpg" alt="director" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                {/* <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a> */}
                                <a href="https://www.linkedin.com/in/prof-binod-kumar-kanaujia-42430762/?originalSubdomain=in" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                {/* <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a> */}
                            </div>
                        </div>
                    </div>


                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>

                    </div>
                    <div className="card4545 card1">
                        <h3>Lovish Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                                <a href="https://github.com/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacultyCoordinators;
