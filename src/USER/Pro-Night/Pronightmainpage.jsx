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
               
                <button className='revelbutton1' onClick={this.handleClick}>Live Band</button>
                <button className='revelbutton2' onClick={this.handleClick}>Kavi Sammelan</button>
                <button className='revelbutton3' onClick={this.handleClick}>Bollywood Dance Music</button>
                <button className='revelbutton4' onClick={this.handleClick}>Faishon Show</button>
                <button className='revelbutton5' onClick={this.handleClick}>Star Night</button>
                {/* </div> */}</div>
            </>
        );
    }
}

export default ProNightSection;
