import React from 'react';
import './Homepage.css'; // Import your component-specific CSS file here
import AboutUsSection from '../About/About';
import ContactSection from '../Contact/Contact';
import FallingText from '../Backgroundtext/FallingText';
import Gallery from '../clubs and event/Gallery';
import Pronightmainpage from '../Pro-Night/Pronightmainpage';
import LabTabs from '../schedule/Horizontaltab';
import Sponsors from '../Sponsor/sponsors';
const Homepage = () => {
    return (
        <>
            <div className="homepage">
                <video className="background-video" autoPlay muted loop>
                    <source src='https://res.cloudinary.com/dijzvijky/video/upload/v1708782614/InShot_20240221_192422896_xbfzpf.mp4' type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <FallingText />
                <AboutUsSection />
                <Gallery />
                <LabTabs />
                <Pronightmainpage />
                <Sponsors/>
                <ContactSection />
            </div>
        </>
    );
}

export default Homepage;
