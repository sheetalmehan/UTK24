// src/components/BhangraClub.js

import React, { useState } from 'react';

import '../css/event.css';
import '../css/bootstrap.min.css';
import '../css/fontawesome-all.min.css';
import '../css/swiper.min.css';
import '../css/style.css';
import '../css/div_comming_css.css';
import { useNavigate } from 'react-router-dom';

const BhangraClub = () => {
    const navigate = useNavigate();


    const [activeTab, setActiveTab] = useState('step-one');


    const [eventdetails, setEventdetails] = useState({
        eventId: '65d5d754a5858e4145844248',
        minParticipants: 1,
        maxParticipants: 100,
        price: 200,

    });


    const handleTabClick = (tabId) => {
        console.log("tabId", tabId);
        setActiveTab(tabId);
        if (tabId === "step-one") {
            setEventdetails({
                eventId: '65d5d754a5858e4145844248',
                minParticipants: 1,
                maxParticipants: 100,
                price: 200,
            });
        }


    };
    const handleClick = () => {
        console.log("clicked", eventdetails);
        navigate("/event/registerinevent", { state: { ...eventdetails } });
    };




    return (
        <div>
            <section className="our-schedule-area">

                <h1 style={{ marginTop: '', paddingBottom: '' }} className="text-center">
                    Bhangra And Giddha Club
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="schedule-tab">
                                <ul className="nav nav-tabs wow fadeInUp" data-wow-delay="300ms" id="conferScheduleTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="tab-one" data-toggle="tab" href="#step-one" role="tab"
                                            aria-controls="step-one" aria-expanded="true">BHANGRA FIESTA </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content" id="conferScheduleTabContent">
                                <div className="tab-pane fade show active" id="step-one" role="tabpanel" aria-labelledby="monday-tab">
                                    <div className="single-tab-content">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="single-schedule-area single-page d-flex flex-wrap justify-content-between align-items-center wow fadeInUp"
                                                    data-wow-delay="300ms">
                                                    <div className="single-schedule-tumb-info d-flex align-items-center">
                                                        {/* <!-- Single Schedule Info --> */}
                                                        <div className="single-schedule-info">
                                                            <h3> BHANGRA FIESTA </h3>
                                                            <p>
                                                                One of the main events of Utkansh. BHANGRA FIESTA is the event that brings participation in the form of folk dances. The folk of our regions bring us close to our roots and give us the feeling of belongingness and identity.<br /><br />
                                                            </p>
                                                            <h6 style={{ color: 'white' }}>Rules:</h6>
                                                            <p>
                                                                <li>Only Bachelor degree students are allowed (College ID required).</li>
                                                                <li>Stage setting and clearance time: 3 minutes Time limit: 8-12 minutes.</li>
                                                                <li>Exceeding the time limit will lead to penalization in marks of 5 marks for every 10 seconds exceeded.</li>
                                                                <li>Minimum 8 members of a team must be present on the
                                                                    stage.</li>
                                                                <li>No other forms of Bhangra are allowed.</li>
                                                                <li>Audio Track to be submitted via Google form (will be
                                                                    shared later).</li>
                                                                <li>Audio track must be a compilation of songs. Recorded
                                                                    dhol beats and boliya will not be permitted.</li>
                                                                <li>Teams will bring their own props.</li>
                                                                <li>Any damage to Stage will lead to disqualification.</li>
                                                                <li>All decisions are at the sole discretion of the organizing
                                                                    committee.</li>
                                                                <li>Any kind of vulgarity shall not be tolerated.</li>
                                                                <li>Teams must bring their soundtrack (if required) in a pen
                                                                    drive and submit it before the competition. (The track
                                                                    should be in .mp3 format)</li>
                                                                <li>There will be only one round.</li>
                                                                <li>Every team should have their id cards and photocopy of
                                                                    the bank passbook for prize money transfer.</li> <br /><br />

                                                                <span style={{ color: 'white' }}><b>Prize Pool: INR 60,000/-</b></span><br /><br />
                                                                <span style={{ color: 'white' }}>Date: 9<sup>th</sup> March</span><br />
                                                                <span style={{ color: 'white' }}>*Reach 1 day prior to your event. </span><br /><br />
                                                                <span style={{ color: 'white' }}>Entry Fee: 200/- per person(for external participant)<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0/- per student(for NITJ student) </span><br /><br />
                                                            </p>
                                                        </div>

                                                    </div>
                                                    <a className="btn confer-btn" onClick={handleClick}>Register </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="d-flex justify-content-around mb-3">
                {/* Contact information */}
            </div>

            {/* **** All JS Files ***** */}
            <script src="../js/jquery.min.js"></script>
            <script src="../js/bootstrap.min.js"></script>
            <script src="../js/confer.bundle.js"></script>
            <script src="../js/active.js"></script>
            <script src="../js/jquery-2.1.1.js"></script>
            <script src="../js/velocity.min.js"></script>
            <script src="../js/main.js"></script>

            {/* Resource jQuery */}
            {/* <script type='text/javascript' src='../js/jquery.js'></script>
            <script type='text/javascript' src='../js/masonry.pkgd.min.js'></script>
            <script type='text/javascript' src='../js/jquery.collapsible.min.js'></script>
            <script type='text/javascript' src='../js/swiper.min.js'></script>
            <script type='text/javascript' src='../js/jquery.countdown.min.js'></script>
            <script type='text/javascript' src='../js/circle-progress.min.js'></script>
            <script type='text/javascript' src='../js/jquery.countTo.min.js'></script>
            <script type='text/javascript' src='../js/custom.js'></script> */}
        </div>
    );
};

export default BhangraClub;
