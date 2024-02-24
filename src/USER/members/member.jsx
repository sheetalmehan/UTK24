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
        <div className='members'>

            <div className="container1">
                <h2 className='teamheading' style={{ textAlign: 'center', }}>Members</h2>
                <div className="cont">
                   
                    <div className="card4545 card1">
                        <h3>Aditya Chopra</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798011/IMG_8756_ov3u9c.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                              
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Abhishek Garg</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708799192/abhisheksir_kq9k4k.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>02</h2>
                            <div>
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                             

                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Manav Jindal</h3>
                        <h4>Convenor</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708797993/SAVE_20230327_224540_cymphj.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>03</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                              
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Sameep  </h3>
                        <h4>Cultural Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708803901/sameepsir_f26kqg.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>03</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                             
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Isha </h3>
                        <h4>Cultural Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708803559/isha.._j4iagf.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>03</h2>
                            <div>
                                <a href="https://www.instagram.com/ishabatra786?igsh=MXFqOHltd2xzeDF1bw==" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="http://www.linkedin.com/in/17isha" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                             
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Purushottam </h3>
                        <h4>Finance Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708804101/IMG_20240223_235529_z9kbom.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>03</h2>
                            <div>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/home" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                           1
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Mandeep </h3>
                        <h4>Marketing Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708804086/20240120_113755_zlo74a.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>03</h2>
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
                        <h3>Surendra</h3>
                        <h4>Public Relation Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1676977602/core_members/lovish_garg_e2rvqt.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>03</h2>
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
                        <h3>Tannu</h3>
                        <h4>Social  Media & Publicity Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798005/IMG_20240222_145612_hstzjy.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>03</h2>
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
                        <h3>Harman</h3>
                        <h4>Deccoration Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708797993/IMG_4794_ts3sx2.heic" alt="" />
                        </span>
                        <div className="content">
                            <h2>03</h2>
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
                        <h3>Jasan </h3>
                        <h4>Refreshment Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708797996/IMG_9932_abiwgh.heic" alt="" />
                        </span>
                        <div className="content">
                            <h2>03</h2>
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
                        <h3>Tanya </h3>
                        <h4>Website Development Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798005/B612_20231006_194738_445_gsqxbd.jpg" alt="" />
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
                        <h3>Hardik</h3>
                        <h4>Event Management Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708797996/IMG_20230416_000133_zk07mn.jpg" alt="" />
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
                        <h3>Ankit Agrawal</h3>
                        <h4>Registration Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798006/20231114_173618_jggxhh.jpg" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/ankii_g?igsh=MXBydHl1eXlrdHVvZA==" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/ankit-agarwal-a282a9244" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                               
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Sushant</h3>
                        <h4>Purchase Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798010/IMG_20211209_231540_eobagn.jpg" alt="" />
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
                        <h3>Gurkirat Singh</h3>
                        <h4>Hospitality Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708797996/224557_hnarj4.jpg" alt="" />
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
                        <h3>Kohil Godara</h3>
                        <h4>Discipline Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798003/IMG_4349_nktqid.heic" alt="" />
                        </span>
                        <div className="content">
                            <h2>01</h2>
                            <div>
                                <a href="https://www.instagram.com/kohil_godara?igsh=MWtiNXliNzRvMDlpag==" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: 'black' }} /></a>
                                <a href="https://www.linkedin.com/in/kohil-godara-187921257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" style={{ color: 'black' }} />
                                </a>
                               
                            </div>
                        </div>
                    </div>
                    <div className="card4545 card1">
                        <h3>Abhishek Agrawal</h3>
                        <h4>Digital Content Head</h4>
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
                        <h3>Prajawal Wankhade</h3>
                        <h4>Digital Content Head</h4>
                        <span>
                            <img src="https://res.cloudinary.com/dijzvijky/image/upload/v1708798002/DSC_0248_copy_1_hcenvs.jpg" alt="" />
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
