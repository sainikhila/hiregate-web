"use client";

import React from 'react';
import InnerLayout from '@shared/InnerLayout';
import CustomDataGrid from "@shared/controls/datagrid";
import CustomDialog from "@shared/controls/customdialog";
import { Typography } from '@mui/material';
import "@content/scss/schedules.scss";

import PopupContactComponent from "@shared/popups/popcontact";
import PopupNotesComponent from '@shared/popups/popnotes';

const columns = [
    { field: 'jobId', headerName: 'Job Id', width: 90, sortable: false },
    { field: 'candidateName', headerName: 'Candidate Name', flex: 1, sortable: false },
    { field: 'interviewerName', headerName: 'Interviewer Name', flex: 1, sortable: false },
    { field: 'candidateResume', headerName: 'Candidate Resume', flex: 1, sortable: false },
    { field: 'jobDescription', headerName: 'Job Description', flex: 1, sortable: false },
    { field: 'scheduledAt', headerName: 'Date & Time', flex: 1, sortable: false },
    { field: 'sessionStatus', headerName: 'Status', flex: 1, sortable: false }
];

const rows = [
    {
        jobId: 'M020671',
        candidateName: 'Aarudhra Auto',
        interviewerName: 'Aarudhra Auto',
        candidateResume: 'Resume',
        jobDescription: "JD Profile",
        scheduledAt: "2024-12-20T10:20:00",
        sessionStatus: "Scheduled"
    },
    {
        jobId: 'M020672',
        candidateName: 'Aarudhra Auto',
        interviewerName: 'Aarudhra Auto',
        candidateResume: 'Resume',
        jobDescription: "JD Profile",
        scheduledAt: "2024-12-20T10:20:00",
        sessionStatus: "Cancelled"
    },
    {
        jobId: 'M020673',
        candidateName: 'Aarudhra Auto',
        interviewerName: 'Aarudhra Auto',
        candidateResume: 'Resume',
        jobDescription: "JD Profile",
        scheduledAt: "2024-12-20T10:20:00",
        sessionStatus: "Completed"
    },
    {
        jobId: 'M020674',
        candidateName: 'Aarudhra Auto',
        interviewerName: 'Aarudhra Auto',
        candidateResume: 'Resume',
        jobDescription: "JD Profile",
        scheduledAt: "2024-12-20T10:20:00",
        sessionStatus: "No-Show"
    },
    {
        jobId: 'M020675',
        candidateName: 'Aarudhra Auto',
        interviewerName: 'Aarudhra Auto',
        candidateResume: 'Resume',
        jobDescription: "JD Profile",
        scheduledAt: "2024-12-20T10:20:00",
        sessionStatus: "In-Progress"
    },
    {
        jobId: 'M020676',
        candidateName: 'Aarudhra Auto',
        interviewerName: 'Aarudhra Auto',
        candidateResume: 'Resume',
        jobDescription: "JD Profile",
        scheduledAt: "2024-12-20T10:20:00",
        sessionStatus: "Pending"
    },
];


const InterviewScheduledComponent = () => {

    const [gridAction, setGridAction] = React.useState(null);

    const OnActionClicked = (id, action) => {
        setGridAction(action);
    }

    const OnCloseClicked = async () => {
        setGridAction(null);
    }

    return (
        <InnerLayout>
            <div className="schedule_pg_container">
                <div className="schedule">
                    <div className="headBlock">
                        <div className="pgHeadText">Schedule / Re-Schedule Interview</div>
                        <div className="headingRight">
                            <input type="button" value="Download CSV Format" />
                            <input type="button" value="Bulk Import using CSV" />
                        </div>
                        <div className="filterLayout" style={{ display: "none" }}>
                            <div className="statuslabel">
                                <select name="filterType" required>
                                    <option value="">Status</option>
                                    <option value="#">Scheduled</option>
                                    <option value="#">In Progress</option>
                                    <option value="#">Cancelled</option>
                                    <option value="#">Completed</option>
                                    <option value="#">No Show</option>
                                </select>
                            </div>
                            <div className="jobidlabel">
                                <select name="filterType" required>
                                    <option value="">Job Id</option>
                                    <option value="#">M0209001</option>
                                    <option value="#">M0209002</option>
                                </select>
                            </div>
                            <div className="intcanDisplayBox">
                                <div className="filterLabelText">Candidate Name</div>
                                <div className="intcanlabel"><input type="text" /></div>
                            </div>
                            <div className="intcanDisplayBox">
                                <div className="filterLabelText">Interviewer Name</div>
                                <div className="intcanlabel"><input type="text" /></div>
                            </div>
                            <div className="dateDisplayBox">
                                <div className="filterLabelText">Interview Date</div>
                                <input type="text" id="datepicker" placeholder="From Date" />
                                <input type="text" id="datepicker" placeholder="To Date" />
                            </div>
                            <input type="button" className="filterButton" title="Filter Selection" />
                        </div>
                    </div>
                    <div className="filterBlock" style={{ display: "none" }}>
                        <div className="filter"><b>Job Id:</b> M0209771<div className="closeicon"><a href="#" title="Close">&#215;</a></div></div>
                        <div className="filter"><b>Candidate Name:</b> Kishor Kalakata<div className="closeicon"><a href="#" title="Close">&#215;</a></div></div>
                        <div className="filter"><b>Status:</b> Scheduled<div className="closeicon"><a href="#" title="Close">&#215;</a></div></div>
                        <div className="filter"><b>Interview Date:</b> Jan 12, 2017 &nbsp;To&nbsp; Jan 25, 2017<div className="closeicon"><a href="#" title="Close">&#215;</a></div></div>
                        <input type="button" value="Clear All" />
                    </div>
                    <div className="noContent" style={{ display: "none" }}>No results found</div>

                    <div className="scheduleContainer" style={{ height: 540, width: '100%' }}>

                        <CustomDataGrid keyId={'jobId'} columns={columns} rowHeight={40} columnHeight={40}
                            rowsCount={rows ? rows.length : 0} rows={rows || []}
                            noActions={false} onActionClicked={OnActionClicked} />
                    </div>
                </div>
            </div>

            <CustomDialog open={gridAction === 'delete'} action={'delete'} title={"Confirmation"} onCloseClicked={OnCloseClicked}>
                <Typography gutterBottom>
                    You want to delete the pending scheduled interview?
                </Typography>
            </CustomDialog>

            <CustomDialog open={gridAction === 'cancel'} action={'delete'} title={"Confirmation"} onCloseClicked={OnCloseClicked}>
                <Typography gutterBottom>
                    You want to cancel the scheduled interview?
                </Typography>
            </CustomDialog>

            <CustomDialog open={gridAction === 'reschedule'} action={'delete'} title={"Confirmation"} onCloseClicked={OnCloseClicked}>
                <Typography gutterBottom>
                    You want to re-schedule the interview session
                </Typography>
            </CustomDialog>

            <CustomDialog open={gridAction === 'contact'}
                action={'close'} title={"Contact Details"} onCloseClicked={OnCloseClicked}>
                <PopupContactComponent />
            </CustomDialog>

            <CustomDialog open={gridAction === 'notes'}
                action={'submit'} title={"Add Notes"} onCloseClicked={OnCloseClicked}>
                <PopupNotesComponent />
            </CustomDialog>
        </InnerLayout>
    );
};

export default InterviewScheduledComponent;
