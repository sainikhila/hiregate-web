"use client";

import React from 'react';
import InnerLayout from '@shared/InnerLayout';
import "@content/scss/candidate.scss";

const CandidateComponent = () => {
    return (
        <InnerLayout>
            <div className="candidate_pgLayout">
                <form action="#" method="post" className="candidateSearch">
                    <div className="can_searchBlock" style={{ display: "none" }}>
                        <div className="horBlock">
                            <div className="headingText">Search Candidate</div>
                            <div className="inviteCan" style={{ display: "none" }}><a href="#" >Invite Candidate to Join</a></div>
                            <div className="addCan"><a href="#">Add New Candidate</a></div>
                        </div>
                        <div className="formField_bg">
                            <div className="skill_layout">
                                <input name="text" type="text" placeholder="Enter Skills  e.g. Java, PHP or Candidate Name" required />
                            </div>
                            <div className="loc">
                                <input name="text" type="text" placeholder="Location" />
                            </div>
                            <div className="expsal_layout">
                                <select name="exp" required>
                                    <option value="" >Experience</option>
                                    <option value="#">5 - 10 Years</option>
                                    <option value="#">10 - 15 Years</option>
                                </select>
                            </div>
                            <div className="expsal_layout">
                                <select name="sal" required>
                                    <option value="">Salary Range (p.a.)</option>
                                    <option value="#">01 Lakh - 04 Lakh</option>
                                    <option value="#">05 Lakh - 10 Lakh</option>
                                    <option value="#">11 Lakh - 15 Lakh</option>
                                </select>
                            </div>
                            <div className="button_layout">
                                <input type="button" className="buttonSearch" value="Search" />
                            </div>
                        </div>
                        <div className="countSearchOption">
                            <div className="resultOverview">
                                <div className="resultCount">
                                    <div className="headLabel">Searched for:</div>
                                    <div className="searchFor">Java, PHP</div>
                                    <div className="normalStyle">Candidates</div>
                                    <div className="normalStyle">in</div>
                                    <div className="location">Bangalore</div>
                                    <div className="line">|</div>
                                    <div className="count">14 </div>
                                    <div className="count">Results Found</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="can_resultBlock">
                        <div className="left_filter_block">
                            <div className="left_ContentArea" style={{ display: "none" }}>
                                <div className="leftBlockHead">Profile Preference</div>
                                <div id="profileStatus">
                                    <div className="filterHead">Profile Status</div>
                                    <div className="left_workarea">
                                        <input type="radio" id="radiorating1" name="rating" />
                                        <label htmlFor="radiorating1">Locked Profile</label>
                                        <input type="radio" id="radiorating2" name="rating" />
                                        <label htmlFor="radiorating2">Unlocked Profile</label>
                                    </div>
                                    <div className="filterHead">Profile Activity</div>
                                    <div className="left_workarea">
                                        <input type="checkbox" id="cb_process" /><label htmlFor="cb_process">Processed By Me</label>
                                        <input type="checkbox" id="cb_viewed" /><label htmlFor="cb_viewed">Already Viewed</label>
                                        <input type="checkbox" id="cb_notviewed" /><label htmlFor="cb_notviewed">Unviewed Profile</label>
                                        <input type="checkbox" id="cb_saved" /><label htmlFor="cb_saved">Saved Profile</label>
                                        <input type="checkbox" id="cb_discard" /><label htmlFor="cb_discard">Discarded Profile</label>
                                        <input type="checkbox" id="cb_discard" /><label htmlFor="cb_discard">Invited Candidate Profile</label>
                                    </div>
                                </div>
                                <div id="expandProfile" title="Expand"></div>
                                <div id="collapseProfile" title="Collapse"></div>
                            </div>

                            <div className="left_ContentArea">
                                <div className="leftBlockHead">Narrow Search Results</div>
                                <div className="leftheading" style={{ display: "block" }}><div className="iconcandidate" />Candidates</div>
                                <div className="left_workarea" style={{ display: "block" }}>
                                    <input type="checkbox" id="cb_can" /><label htmlFor="cb_can">Own Candidates</label>
                                    <input type="checkbox" id="cb_can1" disabled /><label htmlFor="cb_can1">FaceInterview Candidates</label>
                                    <input type="checkbox" id="cb_can1" /><label htmlFor="cb_can1">Archived Candidates</label>
                                </div>
                                <div className="leftheading"><div className="iconrating" />Candidate Rating</div>
                                <div className="left_workarea">
                                    <input type="radio" id="radiorating1" name="rating" />
                                    <label htmlFor="radiorating1">4+ Rating</label>
                                    <input type="radio" id="radiorating2" name="rating" />
                                    <label htmlFor="radiorating2">3+ Rating</label>
                                    <input type="radio" id="radiorating3" name="rating" />
                                    <label htmlFor="radiorating3">2+ Rating</label>
                                </div>
                                <div className="leftheading"><div className="iconexperience" />Work Experience</div>
                                <div className="left_workarea">
                                    <input type="radio" id="radioexp" name="exp" />
                                    <label htmlFor="radioexp">&gt; 15 Years</label>
                                    <input type="radio" id="radioexp1" name="exp" />
                                    <label htmlFor="radioexp1">10 Years - 15 Years</label>
                                    <input type="radio" id="radioexp2" name="exp" />
                                    <label htmlFor="radioexp2">05 Years - 10 Years</label>
                                    <input type="radio" id="radioexp3" name="exp" />
                                    <label htmlFor="radioexp3">&lt; 05 Years</label>
                                </div>
                                <div className="leftheading"><div className="iconprice" />Salary Range (p.a.)</div>
                                <div className="left_workarea">
                                    <input type="radio" id="radioprice" name="price" />
                                    <label htmlFor="radioprice">1 Lakh - 5 Lakh</label>
                                    <input type="radio" id="radioprice1" name="price" />
                                    <label htmlFor="radioprice1">6 Lakh - 10 Lakh</label>
                                    <input type="radio" id="radioprice2" name="price" />
                                    <label htmlFor="radioprice2">Over 10 Lakh</label>
                                    <div className="pricerange_label">
                                        <div className="textinput">
                                            <div className="rupeeicon" />
                                            <input name="fname" type="text" />
                                        </div>
                                        <div className="textlabel">To</div>
                                        <div className="textinput">
                                            <div className="rupeeicon" />
                                            <input name="fname" type="text" />
                                        </div>
                                        <div className="textinput">
                                            <input type="button" className="button_go" value="Go" />
                                        </div>
                                    </div>
                                </div>
                                <div className="leftheading"><div className="icongender" />Gender</div>
                                <div className="left_workarea">
                                    <input type="radio" id="radiogender" name="gender" />
                                    <label htmlFor="radiogender">Female</label>
                                    <input type="radio" id="radiogender1" name="gender" />
                                    <label htmlFor="radiogender1">Male</label>
                                </div>
                            </div>
                        </div>

                        <div className="right_results_block">
                            <div className="right_heading">
                                <div className="sortlabel-head">Sort By: </div>
                                <div className="sortlabel"><a href="#">Maximum Ratings</a></div>
                                <div className="sortlabel"><a href="#">Exp &ndash; High to Low</a></div>
                                <div className="sortlabel"><a href="#">Exp &ndash; Low to High</a></div>
                                <div className="sortlabel"><input type="button" className="button_sortlabel" value="Reset" /></div>
                            </div>
                            <div className="right_filter">
                                <div className="search-filter">Hibernate<div className="closeicon"><a href="#" title="Close">&#215;</a></div></div>
                                <div className="search-filter">PHP<div className="closeicon"><a href="#" title="Close">&#215;</a></div></div>
                                <div className="search-filter">Java<div className="closeicon"><a href="#" title="Close">&#215;</a></div></div>
                                <div className="search-filter">5 Rating<div className="closeicon"><a href="#" title="Close">&#215;</a></div></div>
                                <div className="search-filter">Kate<div className="closeicon"><a href="#" title="Close">&#215;</a></div></div>
                                <input type="button" className="button_clear" value="Clear All" />
                            </div>
                            <div className="result_container">
                                <div className="can_result">
                                    <div className="result_photo_container">
                                        <div className="photo">
                                            <div className="profile-pic">
                                                <img alt="photo" src="/photo_f.png" /></div>
                                        </div>
                                    </div>
                                    <div className="result_content_container">
                                        <div className="phone_label">
                                            <div className="phIcon" />
                                            <div className="statusTextHead">Phone:</div>
                                            <div className="statusText">+919900119876</div>
                                        </div>
                                        <div className="email_label">
                                            <div className="emailIcon" />
                                            <div className="statusTextHead">Email Id:</div>
                                            <div className="statusText">katewarnerkate@nikhilanalytics.com</div>
                                        </div>
                                        <div className="name">Kate Warner</div>
                                        <div className="rating-verify-label">
                                            <div className="ratingcontainer">
                                                <div className="ratingstar">
                                                    <div className="rating_sprite_blue_m" title="3.5 of 5"><span style={{ width: "69%" }} className="rating_sprite_blue_m_bg"></span></div>
                                                </div>
                                                <div className="ratingcount">2 Own Assessment(s)</div>

                                                <div className="ratingstar">
                                                    <div className="rating_sprite_blue_m" title="3.5 of 5"><span style={{ width: "69%" }} className="rating_sprite_blue_m_bg"></span></div>
                                                </div>
                                                <div className="ratingcount">5 FaceInterview Assessment(s)</div>
                                            </div>
                                            <div className="canresume">
                                                <div className="canresumeIcon" />
                                                <div className="canresumeText"><a href="#">Resume - N/A</a></div>
                                            </div>
                                        </div>
                                        <div className="rating-verify-divider" />
                                        <div className="horBlock-15">
                                            <div className="vBlock_canDetails">
                                                <div className="coIcon" />
                                                <div className="canDetailsHead">Company:</div>
                                                <div className="canDetailsText">Swazuna Technologies</div>
                                            </div>
                                            <div>
                                                <div className="desgIcon" />
                                                <div className="canDetailsHead">Designation:</div>
                                                <div className="canDetailsText">Project Manager</div>
                                            </div>

                                        </div>

                                        <div className="horBlock-15">
                                            <div className="vBlock_canDetails">
                                                <div className="expIcon" />
                                                <div className="canDetailsHead">Experience:</div>
                                                <div className="canDetailsText">9 Yr(s)</div>
                                                <div className="canDetailsText">6 Mth(s)</div>
                                            </div>
                                            <div className="vBlock_canDetails">
                                                <div className="locIcon" />
                                                <div className="canDetailsHead">Location:</div>
                                                <div className="canDetailsText">Bangalore, India</div>
                                            </div>
                                            <div className="vBlock_canDetails_last">
                                                <div className="salIcon" />
                                                <div className="canDetailsHead">CTC:</div>
                                                <div className="canDetailsText">00.00 Lacs (p.a.)</div>
                                            </div>
                                        </div>
                                        <div className="horBlock-15">
                                            <div className="skillHead">
                                                <div className="skillIcon" />
                                                <div className="canDetailsHead">Key Skills:</div>
                                            </div>
                                            <div className="skillText">PHP <span>- 3.5 Yr</span>, Javascript <span>- 6 Yr</span>, PHP <span>- 3 Yr</span>, Javascript <span>- 5.2 Yr</span>, Hibernate <span>- 1.5 Yr</span>, User Experience <span>- 6.3 Yr</span>, C++ <span>- 3.5 Yr</span>, Angular JS <span>- 0.5 Yr</span></div>
                                        </div>
                                        <div className="button_label">
                                            <input type="button" className="button_srPage" value="Assessment Video &amp; Profile" />
                                            <input type="button" className="button_srPage" value="Schedule Interview" />
                                            <input type="button" className="button_srPage" value="Link Candidate" />
                                        </div>
                                    </div>
                                </div>

                                <div className="can_result_divider"></div>

                                <div className="can_result">
                                    <div className="result_photo_container">
                                        <div className="photo">
                                            <div className='profile-pic'>
                                                <div className="deletePhoto"><a href="#" title="Delete Image">&#215;</a></div>
                                                <a className="photo_show" href="javascript:void(0);"><img src="/photo_add_m.png" title="Add a  photo" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="result_content_container">
                                        <div className="phone_label">
                                            <div className="phIcon"></div>
                                            <div className="statusTextHead">Phone:</div>
                                            <div className="statusText">+919900119876</div>
                                        </div>
                                        <div className="email_label">
                                            <div className="emailIcon"></div>
                                            <div className="statusTextHead">Email Id:</div>
                                            <div className="statusText">katewarner@katewarner.com</div>
                                        </div>
                                        <div className="name">John Rambo</div>
                                        <div className="rating-verify-label">
                                            <div className="ratingcontainer">
                                                <div className="ratingstar">
                                                    <div className="rating_sprite_blue_m" title="4 of 5"><span style={{ width: "80%" }} className="rating_sprite_blue_m_bg"></span></div>
                                                </div>
                                                <div className="ratingcount">3 Interview(s)</div>
                                            </div>
                                            <div className="canresume">
                                                <div className="canresumeIcon"></div>
                                                <div className="canresumeText"><a href="#">Resume View</a></div>
                                            </div>
                                        </div>
                                        <div className="rating-verify-divider"></div>
                                        <div className="horBlock-15">
                                            <div className="vBlock_canDetails">
                                                <div className="expIcon"></div>
                                                <div className="canDetailsHead">Experience:</div>
                                                <div className="canDetailsText">9 Yr(s)</div>
                                                <div className="canDetailsText">6 Mth(s)</div>
                                            </div>
                                            <div className="vBlock_canDetails">
                                                <div className="locIcon"></div>
                                                <div className="canDetailsHead">Location:</div>
                                                <div className="canDetailsText">Bangalore, India</div>
                                            </div>
                                            <div className="vBlock_canDetails_last">
                                                <div className="salIcon"></div>
                                                <div className="canDetailsHead">CTC:</div>
                                                <div className="canDetailsText">15.32 Lacs (p.a.)</div>
                                            </div>
                                        </div>
                                        <div className="horBlock-15">
                                            <div className="skillHead">
                                                <div className="skillIcon"></div>
                                                <div className="canDetailsHead">Key Skills:</div>
                                            </div>
                                            <div className="skillText">PHP <span>- 3.5 Yr</span>, Javascript <span>- 6 Yr</span>, PHP <span>- 3 Yr</span>, Javascript <span>- 5.2 Yr</span>, Hibernate <span>- 1.5 Yr</span>, User Experience <span>- 6.3 Yr</span>, C++ <span>- 3.5 Yr</span>, Angular JS <span>- 0.5 Yr</span></div>
                                        </div>
                                        <div className="button_label">
                                            <input type="button" className="button_srPage" value="Assessment Video &amp; Profile" />
                                            <input type="button" className="button_srPage" value="Schedule Interview" />
                                            <input type="button" className="button_srPage" value="Delete" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form >
            </div >
        </InnerLayout >
    );
};

export default CandidateComponent;
