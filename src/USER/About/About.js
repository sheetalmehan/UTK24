import React from 'react';
import './About.css'
const AboutUsSection = () => {
  return (
    <section>
      <div className="">
        <h2 className="titla" >
          About Us
        </h2>

        <div className="responsive-container-block Container bottomContainer">

          <div className="ultimateImg" style={{ marginTop: '0px' }}>
            <video id="aftermovie3" className="img-fluid crousel_video_mdn" controls autoPlay muted loop controlsList="nodownload">
              <source src="https://res.cloudinary.com/dijzvijky/video/upload/v1681062129/homepagevideo/UTKANSH_19_Official_Aftermovie_NIT_Jalandhar_1_xahn1s.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="allText bottomText">
            <p className="text-blk subHeadingText" style={{ color: '#ffffff' }}>UTKANSH</p>
            <p className="text-blk description " style={{ color: '#ffffff', textAlign: 'justify' }}>
              Utkansh is the annual cultural festival of NITJ, recognized as one of the greatest cultural festivals of North India and is entirely organized by the NITJ students' association and serves as a perfect launch pad for artistic enthusiasts to showcase their intelligence and inventiveness. 
              The fest is an amalgamation of music, dance, drama, comedy. Students from all over the country come to participate in various competitions and enjoy the three-day cultural fiesta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
