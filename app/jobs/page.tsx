"use client";

import React, { useState } from 'react';
import { Collapse } from '@mui/material';
import InnerLayout from '@shared/InnerLayout';
import "@content/scss/job.scss";

const CandidateComponent = () => {

    const [blockName, setBlockName] = useState(null);

    const handleClick = (e, name) => {
        e.preventDefault();
        if (name === blockName) name = null;
        setBlockName(name);
    }

    return (
        <InnerLayout>
            <div className="job_pg_container">
                <div className="jobLayout">
                    <div className="pageHead">
                        <div className="pgHeadText">Job Requirement - Active List</div>
                        <div className="headingRight">
                            <div className="canSearch">
                                <div className="canSearch_container">
                                    <input type="text" name="search" placeholder="Search by Title"
                                        title="Search by Title" />
                                </div>
                            </div>
                            <input type="button" value="&#65291; Create New Requirement"
                                title="Create New Requirement" />
                        </div>
                        <div className="filterLayout" style={{ display: 'none' }}>
                            <div className="statuslabel">
                                <select name="filterType" required>
                                    <option value="">Status</option>
                                    <option value="#">Active</option>
                                    <option value="#">Closed</option>
                                    <option value="#">Un-Published</option>
                                </select>
                            </div>
                            <div className="jobidlabel">
                                <select name="filterType" required>
                                    <option value="">Job Id</option>
                                    <option value="#">M0209001</option>
                                    <option value="#">M0209002</option>
                                </select>
                            </div>
                            <div className="publishedlabel">
                                <select name="filterType" required>
                                    <option value="" >Published By</option>
                                    <option value="#">Mukesh</option>
                                    <option value="#">Dinesh</option>
                                </select>
                            </div>
                            <div className="dateDisplayBox">
                                <div className="filterLabelText">Published Date</div>
                                <input type="text" id="datepicker" placeholder="From Date" />
                                <input type="text" id="datepicker" placeholder="To Date" />
                            </div>
                            <div className="dateDisplayBox">
                                <div className="filterLabelText">Closing Date</div>
                                <input type="text" id="datepicker" placeholder="From Date" />
                                <input type="text" id="datepicker" placeholder="To Date" />
                            </div>
                            <input type="button" title="Filter Selection" />
                        </div>
                    </div>
                    <div className="filterBlock">
                        <div className="filter"><b>Job Id:</b> M0209771<div className="closeicon"><a href="#" title="Close">&#215;</a></div>
                        </div>
                        <div className="filter"><b>Status:</b> Active<div className="closeicon"><a href="#" title="Close">&#215;</a></div>
                        </div>
                        <div className="filter"><b>Published By:</b> Mukesh<div className="closeicon"><a href="#" title="Close">&#215;</a>
                        </div>
                        </div>
                        <div className="filter"><b>Published Date:</b> Jan 12, 2017 &nbsp;To&nbsp; Jan 25, 2017<div className="closeicon"><a
                            href="#" title="Close">&#215;</a></div>
                        </div>
                        <input type="button" value="Clear All" />
                    </div>
                    <div className="noContent" style={{ display: 'none' }}>No results found</div>

                    <div className="contentBlock">
                        <div className="jobParentBlock">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Job ID</td>
                                        <td>Job Title</td>
                                        <td>Published By</td>
                                        <td>Published Date</td>
                                        <td>Closing Date</td>
                                        <td>Status</td>
                                        <td rowSpan={2}>
                                            <a href="#" title="Refresh">
                                                <div className="refreshIcon"></div>
                                            </a>
                                        </td>
                                        <td rowSpan={2}><input type="button" value="View" className="buttonToggle" onClick={(e) => handleClick(e, 'block1')} /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">M0209777</a></td>
                                        <td>Android Lead / Individual Contributor</td>
                                        <td>Binoy Thomas Mathew</td>
                                        <td>Sep/10/2018</td>
                                        <td>Oct/10/2018</td>
                                        <td>Active</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Collapse in={blockName === 'block1' ? true : false} timeout="auto" unmountOnExit>
                            <div className="childBlock">
                                <div className="childContentLayout">
                                    <div className="block-left">
                                        <div className="descHead">Job Title:</div>
                                        <div className="description">Android Lead / Individual Contributor</div>
                                        <div className="descHead">Key Skills:</div>
                                        <div className="description">JavaScript, JQuery, HTML5, CSS3, XML, XSLT, Web Programming Skills,
                                            E-Commerce, Web User Interface Design (UI), Security Principles,
                                            Object-Oriented Design, Web Services (REST/SOAP), APIs, Basics of Database
                                            &amp; SQL</div>
                                        <div className="descHead">Job Description:</div>
                                        <div className="description">Overall responsibility for understanding the concepts behind
                                            websites and mobile apps and converting them into appealing and highly
                                            usable interfaces. Engaging with the marketing and development teams to seek
                                            a deeper appreciation of the business problems/goals. Developing an
                                            understanding of the end users of the website/application through secondary
                                            and primary research (user interviews, traffic data). Capable of generating
                                            user personas and user scenarios. Preparing low fidelity prototypes of
                                            sites/features (ranging from paper-and-pencil concepts to wireframes or
                                            interactive prototypes) for internal review and brainstorming. Presenting
                                            high fidelity designs/mock-ups for review/iteration/approval. Desired
                                            Essential Skills</div>
                                    </div>
                                    <div className="block-right">
                                        <div className="descHead">Key Responsibilities:</div>
                                        <div className="description">Not Mentioned</div>
                                        <div className="descHead">Education Qualification:</div>
                                        <div className="description">Not Mentioned</div>
                                        <div className="descHead">Location:</div>
                                        <div className="description">Bangalore, Hyderabad, Mumbai</div>
                                        <div className="descHead">Work Experience:</div>
                                        <div className="description">9 - 11 Years</div>
                                        <div className="descHead">Salary Range:</div>
                                        <div className="description">5 - 10 Lakhs</div>
                                    </div>
                                    <div>
                                        <div className="descHead">Job Public Link:</div>
                                        <div className="description"><a href="#"
                                            target="_blank">https://www.hiregate.in/job/M0209777</a></div>

                                        <div className="block-left">
                                            <div className="descHead">Assigned To:</div>
                                            <div className="description"><b>Mukesh -</b> mukesh@abc.com, 9856789855,
                                                &nbsp;&nbsp;&nbsp;<b>Dinesh -</b> dinesh@abc.com, 9856789855
                                            </div>
                                        </div>
                                        <div className="block-right">
                                            <div className="descHead">Job Contact Details:</div>
                                            <div className="description"><b>Binoy Thomas Mathew -</b> binoy@abc.com, 9856789855
                                            </div>
                                        </div>
                                    </div>
                                </div >
                                <div className="childButtonLayout">
                                    <input type="button" value="Edit Job" title="Edit Job" />
                                    <input type="button" value="Feedback Form" />
                                </div>
                            </div>
                        </Collapse>
                    </div>

                    <div className="contentBlock">
                        <div className="jobParentBlock">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Job ID</td>
                                        <td>Job Title</td>
                                        <td>Published By</td>
                                        <td>Published Date</td>
                                        <td>Closing Date</td>
                                        <td>Status</td>
                                        <td rowSpan={2}>
                                            <a href="#" title="Refresh">
                                                <div className="refreshIcon"></div>
                                            </a>
                                        </td>
                                        <td rowSpan={2}><input type="button" value="View" className="buttonToggle" onClick={(e) => handleClick(e, 'block2')} /></td>
                                    </tr>
                                    <tr>
                                        <td><a href="#">M0209777</a></td>
                                        <td>Android Lead / Individual Contributor</td>
                                        <td>Binoy Thomas Mathew</td>
                                        <td>Sep/10/2018</td>
                                        <td>Oct/10/2018</td>
                                        <td>Active</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Collapse in={blockName === 'block2' ? true : false} timeout="auto" unmountOnExit>
                            <div className="childBlock">
                                <div className="childContentLayout">
                                    <div className="block-left">
                                        <div className="descHead">Job Title:</div>
                                        <div className="description">Android Lead / Individual Contributor</div>
                                        <div className="descHead">Key Skills:</div>
                                        <div className="description">JavaScript, JQuery, HTML5, CSS3, XML, XSLT, Web Programming Skills,
                                            E-Commerce, Web User Interface Design (UI), Security Principles,
                                            Object-Oriented Design, Web Services (REST/SOAP), APIs, Basics of Database
                                            &amp; SQL</div>
                                        <div className="descHead">Job Description:</div>
                                        <div className="description">Overall responsibility for understanding the concepts behind
                                            websites and mobile apps and converting them into appealing and highly
                                            usable interfaces. Engaging with the marketing and development teams to seek
                                            a deeper appreciation of the business problems/goals. Developing an
                                            understanding of the end users of the website/application through secondary
                                            and primary research (user interviews, traffic data). Capable of generating
                                            user personas and user scenarios. Preparing low fidelity prototypes of
                                            sites/features (ranging from paper-and-pencil concepts to wireframes or
                                            interactive prototypes) for internal review and brainstorming. Presenting
                                            high fidelity designs/mock-ups for review/iteration/approval. Desired
                                            Essential Skills</div>
                                    </div>
                                    <div className="block-right">
                                        <div className="descHead">Key Responsibilities:</div>
                                        <div className="description">Not Mentioned</div>
                                        <div className="descHead">Education Qualification:</div>
                                        <div className="description">Not Mentioned</div>
                                        <div className="descHead">Location:</div>
                                        <div className="description">Bangalore, Hyderabad, Mumbai</div>
                                        <div className="descHead">Work Experience:</div>
                                        <div className="description">9 - 11 Years</div>
                                        <div className="descHead">Salary Range:</div>
                                        <div className="description">5 - 10 Lakhs</div>
                                    </div>
                                    <div>
                                        <div className="descHead">Job Public Link:</div>
                                        <div className="description"><a href="#"
                                            target="_blank">https://www.hiregate.in/job/M0209777</a></div>

                                        <div className="block-left">
                                            <div className="descHead">Assigned To:</div>
                                            <div className="description"><b>Mukesh -</b> mukesh@abc.com, 9856789855,
                                                &nbsp;&nbsp;&nbsp;<b>Dinesh -</b> dinesh@abc.com, 9856789855
                                            </div>
                                        </div>
                                        <div className="block-right">
                                            <div className="descHead">Job Contact Details:</div>
                                            <div className="description"><b>Binoy Thomas Mathew -</b> binoy@abc.com, 9856789855
                                            </div>
                                        </div>
                                    </div>
                                </div >
                                <div className="childButtonLayout">
                                    <input type="button" value="Edit Job" title="Edit Job" />
                                    <input type="button" value="Feedback Form" />
                                </div>
                            </div>
                        </Collapse>
                    </div>

                </div>
            </div>
        </InnerLayout>
    );
};

export default CandidateComponent;
