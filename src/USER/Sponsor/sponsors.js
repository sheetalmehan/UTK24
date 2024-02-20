
import './sponsor.css'
import React from 'react';

class SponsorSection extends React.Component {
    constructor(props) {
        super(props);
        this.marqueeRef = React.createRef();
    }

    render() {
        return (
            <section>
                <h2 className="titl" >Our Sponsors</h2>
                <div className="sponsor" id="spon" style={{ font: '1em sans-serif' }}>
                    <marquee behavior="scroll" direction="left" ref={this.marqueeRef} onMouseOver={() => this.marqueeRef.current.stop()} onMouseOut={() => this.marqueeRef.current.start()}>
                        {/* <a href="https://www.coca-colacompany.com/" target="_blank"><img src="img/Coca-Cola-logo.png" alt="sponsor" height="90px" /></a>
                        <a href="https://www.onlinesbi.sbi/" target="_blank"><img src="img/SBI-Logo.png" alt="sponsor2" height="90px" /></a> */}
                        <h1>To be revealed soon</h1>
                    </marquee>
                    {/* <marquee behavior="scroll" direction="">coca cola</marquee> */}
                </div>
            </section>
        );
    }
}

export default SponsorSection;
