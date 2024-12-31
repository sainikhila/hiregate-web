"use client";

import React, { useState } from 'react';
import { Collapse } from '@mui/material';
import InnerLayout from '@shared/InnerLayout';
import "@content/scss/session.scss";

const CandidateComponent = () => {

    const [blockName, setBlockName] = useState(null);

    const handleClick = (e, name) => {
        e.preventDefault();
        if (name === blockName) name = null;
        setBlockName(name);
    }

    return (
        <InnerLayout>
            <div className="session_pg_container">
                <div className="sessionLayout">
                    <div className="pageHead">
                        <div className="pgHeadText">Interview Sessions</div>
                        <div className="headingRight" style={{ display: 'none' }}>
                            <div className="canSearch">
                                <div className="canSearch_container">
                                    <input type="text" name="search" placeholder="Search by Title"
                                        title="Search by Title" />
                                </div>
                            </div>
                            <div className="selectsmall">
                                <select name="filterJobID" required>
                                    <option value="">Session Id</option>
                                    <option value="#">M0209001</option>
                                    <option value="#">M0209002</option>
                                </select>
                            </div>
                            <div className="selectmedium">
                                <select name="filterStatus" required>
                                    <option value="" >Status</option>
                                    <option value="#">Scheduled</option>
                                    <option value="#">Completed</option>
                                    <option value="#">No Show</option>
                                    <option value="#">Cancelled</option>
                                </select>
                            </div>
                            <input type="button" value="Schedule New Interview"
                                title="Create New Requirement" />
                        </div>
                    </div>
                    <div className="filterBlock">
                        <div className="filter"><b>Session Id:</b> M0209771<div className="closeicon"><a href="#" title="Close">&#215;</a></div>
                        </div>
                        <div className="filter"><b>Status:</b> Active<div className="closeicon"><a href="#" title="Close">&#215;</a></div>
                        </div>
                        <div className="filter"><b>Candidate Name:</b> Mukesh<div className="closeicon"><a href="#" title="Close">&#215;</a></div>
                        </div>
                        <input type="button" value="Clear All" />
                    </div>
                    <div className="noContent" style={{ display: 'none' }}>No results found</div>

                    <div className="sessionContentBlock">
                        <div className="sessionParentBlock">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Session ID</td>
                                        <td>Candidate Name</td>
                                        <td>Interviewer Name</td>
                                        <td>Interview Date & Time</td>
                                        <td>Raised By</td>
                                        <td>Status</td>
                                        <td>Ratings</td>
                                        <td rowSpan={2}>
                                            <a href="#" title="Refresh">
                                                <div className="refreshIcon"></div>
                                            </a>
                                            <a href="#" title="Download Report">
                                                <div className="downloadIcon"></div>
                                            </a>
                                        </td>
                                        <td rowSpan={2}><input type="button" value="View" className="buttonToggle" onClick={(e) => handleClick(e, 'block1')} /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">M0209777</a></td>
                                        <td>Kishor Kalakata</td>
                                        <td>Binoy Thomas Mathew</td>
                                        <td>Sep/10/2018</td>
                                        <td>Manu</td>
                                        <td>Completed</td>
                                        <td>
                                            <div className="rating">
                                                <div className="rating_sprite_blue_m">
                                                    <span style={{ width: "80%" }} className="rating_sprite_blue_m_bg" title="4 of 5"></span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Collapse in={blockName === 'block1' ? true : false} timeout="auto" unmountOnExit>
                            <div className="childBlock">
                                <div className="childContentLayout">

                                    <div className="genericDetailsBlock">
                                        <div className="label10">
                                            <div className="childHead">Start Time:</div>
                                            <div className="childResult">10:00 AM</div>
                                            <div className="childHead">End Time:</div>
                                            <div className="childResult">10:55 AM</div>
                                        </div>
                                        <div className="label10">
                                            <div className="childHead">Duration:</div>
                                            <div className="childResult">55 Minute</div>
                                        </div>
                                        <div className="label10">
                                            <div className="childHead">Overall Rating:</div>
                                            <div className="overallRatingLayout">
                                                <div className="rating_sprite_blue_m" title="3.5 of 5"><span style={{ width: "70%" }} className="rating_sprite_blue_m_bg"></span></div>
                                            </div>
                                        </div>
                                        <div className="label10">
                                            <div className="childHead">Recorded Interview Link:</div>
                                            <div className="childResult"><a >View Interview Recording</a></div>
                                        </div>
                                    </div>

                                    <div className="rateNoteBlock">
                                        <div className="topicHead">Interview Topic -</div>
                                        <div className="topicResult">AWS IoT</div>
                                        <div className="ratingHead">Ratings -</div>
                                        <div className="ratingContainer">
                                            <div className='ratingBlock'>
                                                <div className="ratingLabel">Technical Skills:</div>
                                                <div className="ratingStar"><div className="rating_sprite_blue_s"><span style={{ width: "40%" }} className="rating_sprite_blue_s_bg"></span></div></div>
                                            </div>
                                            <div className='ratingBlock'>
                                                <div className="ratingLabel">Interpersonal Skills:</div>
                                                <div className="ratingStar"><div className="rating_sprite_blue_s"><span style={{ width: "60%" }} className="rating_sprite_blue_s_bg"></span></div></div>
                                            </div>
                                            <div className='ratingBlock'>
                                                <div className="ratingLabel">Subject Knowledge:</div>
                                                <div className="ratingStar"><div className="rating_sprite_blue_s"><span style={{ width: "60%" }} className="rating_sprite_blue_s_bg"></span></div></div>
                                            </div>
                                            <div className='ratingBlock'>
                                                <div className="ratingLabel">Communication Skills:</div>
                                                <div className="ratingStar"><div className="rating_sprite_blue_s"><span style={{ width: "100%" }} className="rating_sprite_blue_s_bg"></span></div></div>
                                            </div>
                                            <div className='ratingBlock'>
                                                <div className="ratingLabel">Communication Skills:</div>
                                                <div className="ratingStar"><div className="rating_sprite_blue_s"><span style={{ width: "100%" }} className="rating_sprite_blue_s_bg"></span></div></div>
                                            </div>
                                            <div className='ratingBlock'>
                                                <div className="ratingLabel">Communication Skills:</div>
                                                <div className="ratingStar"><div className="rating_sprite_blue_s"><span style={{ width: "100%" }} className="rating_sprite_blue_s_bg"></span></div></div>
                                            </div>
                                            <div className='ratingBlock'>
                                                <div className="ratingLabel">Communication Skills:</div>
                                                <div className="ratingStar"><div className="rating_sprite_blue_s"><span style={{ width: "100%" }} className="rating_sprite_blue_s_bg"></span></div></div>
                                            </div>
                                            <div className='ratingBlock'>
                                                <div className="ratingLabel">Communication Skills:</div>
                                                <div className="ratingStar"><div className="rating_sprite_blue_s"><span style={{ width: "100%" }} className="rating_sprite_blue_s_bg"></span></div></div>
                                            </div>
                                        </div>
                                        <div className="noteHead">Interviewer Comment:</div>
                                        <div className="noteResult">The candidate has very good communication skill but he is not so sound technically.</div>
                                    </div>

                                </div>
                                <div className="childButtonLayout">
                                    <input type="button" value="Download Report" title="Download Report" />
                                    <input type="button" value="Interviewer Notes" title="Interviewer Notes" />
                                    <input type="button" value="Share Session" title="Share Session" />
                                </div>

                                <div className="sharedSession">
                                    <div className="sharedSessionHead">Shared With -
                                        <div className="note">Uncheck and update to remove sharing from the email id</div>
                                    </div>
                                    <div className="shareBlk">
                                        <div className="shareDisplay">
                                            <ul>
                                                <li>
                                                    <input type="checkbox" id="cb_shremail" onChange={() => console.log("changed")} /><label htmlFor="cb_shremail">monangku@gmail.com</label>
                                                </li>
                                                <li>Philips</li>
                                                <li>Approval Pending</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="shareBlk">
                                        <div className="shareDisplay">
                                            <ul>
                                                <li>
                                                    <input type="checkbox" id="cb_shremail" checked onChange={() => console.log("changed")} /><label htmlFor="cb_shremail">ramakrishna@gmail.com</label>
                                                </li>
                                                <li>Swazuna Technologies</li>
                                                <li>Approved</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="childButtonLayout">
                                    <input type="button" value="Update" title="Update" />
                                </div>

                            </div>
                        </Collapse >
                    </div >

                </div >
            </div >
        </InnerLayout>
    );
};

export default CandidateComponent;
