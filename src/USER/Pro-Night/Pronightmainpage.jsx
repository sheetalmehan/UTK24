import React from 'react';
import './pronight.css';
import videoFile from './fast_clip_1.mp4'; // Import the video file
import arrow from './arrow-down-double-line.svg';

class ProNightSection extends React.Component {
    handleClick = () => {
        // Navigate to /megaevent
        window.location.href = '/megaevent';
    }

    render() {
        return (
            <>
                {/* pro-night */}
                {/* <div id="pro-night"> */}
                <h2 className="titlp" >
                    Pro Nite
                </h2>
                <div className='containerpro'>
                    <video src={videoFile} className="pro_video" loop autoPlay muted />
                    {/* <h1 className="pronighthome">ProNight</h1> */}

                    <button className='revelbutton1' onClick={this.handleClick}><h5 className="main_pro main_text">Live Band</h5></button >
                    <button className='revelbutton2' onClick={this.handleClick}><h5 className="main_pro main_text">Kavi Sammelan</h5></button>
                    <button className='revelbutton3' onClick={this.handleClick}><h5 className="main_pro main_text">Bollywood Dance Music</h5></button>
                    <button className='revelbutton4' onClick={this.handleClick}><h5 className="main_pro main_text">Faishon Show</h5></button>
                    <button className='revelbutton5' onClick={this.handleClick}><h5 className="main_pro main_text">Star Night</h5></button>
                    {/* </div> */}</div > 
            </>
        );
    }
}

export default ProNightSection;
