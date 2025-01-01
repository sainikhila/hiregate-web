"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Collapse, Button, Stack, Typography, Paper, Divider, Grid2 as Grid } from '@mui/material';
import InnerLayout from '@shared/InnerLayout';
import { Add as AddIcon, Edit as EditIcon, Feedback as FeedbackIcon } from '@mui/icons-material';
import SearchInputComponent from '@shared/controls/inputsearch';
import RefreshIcon from '@mui/icons-material/Refresh';


import { List, ListItem, ListItemText, IconButton, Box } from '@mui/material';


const rowHeaders = [
    { title: 'Job Id', value: "M0209777", link: true, id: true },
    { title: 'Job Title', value: "Android Lead / Individual Contributor" },
    { title: 'Published By', value: "Binoy Thomas Mathew" },
    { title: 'Published Date', value: "Sep/10/2018" },
    { title: 'Closing Date', value: "Oct/10/2018" },
    { title: 'Status', value: "Active" }
];


const JobCardListComponent = ({ headers, children }) => {

    const [blockName, setBlockName] = useState('block3');

    const keyId = headers.find(header => header.id).value;

    const handleClick = (e, name) => {
        e.preventDefault();
        if (name === blockName) name = null;
        setBlockName(name);
    }

    return (
        <List dense={false} sx={{
            m: 0, p: 0, width: '100%', borderColor: "borderColor",
            borderWidth: "thin", borderStyle: "inset", backgroundColor: "#f2f5f7"
        }}>
            <ListItem alignItems="flex-start" sx={{ pt: 0, pb: 0 }}>
                {headers.map((header, index: number) => (
                    <ListItemText key={index}
                        primary={
                            <Typography variant="subtitle2" component="span">
                                {header.title}
                            </Typography>
                        }
                        secondary={
                            <React.Fragment>
                                <Typography component="span" variant={header.link ? "listLink" : "body2"}>
                                    {header.value}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                ))}
                <ListItemText
                    primary={
                        <Typography variant="subtitle2" component="span">
                            Job Title
                        </Typography>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography component="span" variant="body2">
                                Android Lead / Individual Contributor
                            </Typography>
                        </React.Fragment>
                    }
                />
                <ListItemText sx={{ mt: "10px", mb: "6px" }}>
                    <Box sx={{
                        display: 'flex', alignItems: 'center',
                        gap: 1, justifyContent: "flex-end"
                    }}>
                        <IconButton aria-label="menu" sx={{
                            backgroundColor: "primary.main",
                            borderRadius: '5px',
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            }
                        }}>
                            <RefreshIcon fontSize='small' sx={{ color: 'primary.contrastText' }} />
                        </IconButton>
                        <Button variant="contained" color="primary" onClick={(e) => handleClick(e, keyId)}>View</Button>
                    </Box>
                </ListItemText>
            </ListItem>
            <Collapse in={blockName === keyId ? true : false} timeout="auto" unmountOnExit sx={{ backgroundColor: "#ffffff" }}>
                <Divider sx={{ borderColor: "borderColor" }} />
                {children}
            </Collapse>
        </List>
    );
}

const JobCardComponent = ({ row }) => {

    return (
        <>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ m: 2, mt: 0 }}>
                <Grid size={6}>
                    <Stack direction="column" justifyContent="space-between" sx={{ marginBottom: '5px' }}>
                        <Typography variant="descriptionHeader">Job Title:</Typography>
                        <Typography variant="descriptionText">Job Requirement - Active List</Typography>
                        <Typography variant="descriptionHeader">Key Skills:</Typography>
                        <Typography variant="descriptionText">
                            JavaScript, JQuery, HTML5, CSS3, XML, XSLT, Web Programming Skills,
                            E-Commerce, Web User Interface Design (UI), Security Principles,
                            Object-Oriented Design, Web Services (REST/SOAP), APIs, Basics of Database
                            &amp; SQL
                        </Typography>
                        <Typography variant="descriptionHeader">Job Description:</Typography>
                        <Typography variant="descriptionText">
                            Overall responsibility for understanding the concepts behind
                            websites and mobile apps and converting them into appealing and highly
                            usable interfaces. Engaging with the marketing and development teams to seek
                            a deeper appreciation of the business problems/goals. Developing an
                            understanding of the end users of the website/application through secondary
                            and primary research (user interviews, traffic data). Capable of generating
                            user personas and user scenarios. Preparing low fidelity prototypes of
                            sites/features (ranging from paper-and-pencil concepts to wireframes or
                            interactive prototypes) for internal review and brainstorming. Presenting
                            high fidelity designs/mock-ups for review/iteration/approval. Desired
                            Essential Skills
                        </Typography>
                        <Typography variant="descriptionHeader">Job Public Link:</Typography>
                        <Typography variant="descriptionText">
                            <Link href="#" target="_blank" style={{ textDecoration: "none" }}>https://www.hiregate.in/job/M0209777</Link>
                        </Typography>
                        <Typography variant="descriptionHeader">Assigned To:</Typography>
                        <Typography variant="descriptionText">
                            <b>Mukesh -</b> mukesh@abc.com, 9856789855, <b>Dinesh -</b> dinesh@abc.com, 9856789855
                        </Typography>
                    </Stack>
                </Grid>
                <Grid size={6}>
                    <Stack direction="column" justifyContent="space-between" sx={{ marginBottom: '5px' }}>
                        <Typography variant="descriptionHeader">Key Responsibilities:</Typography>
                        <Typography variant="descriptionText">Not Mentioned</Typography>
                        <Typography variant="descriptionHeader">Education Qualification:</Typography>
                        <Typography variant="descriptionText">Not Mentioned</Typography>
                        <Typography variant="descriptionHeader">Location:</Typography>
                        <Typography variant="descriptionText">Bangalore, Hyderabad, Mumbai</Typography>
                        <Typography variant="descriptionHeader">Work Experience:</Typography>
                        <Typography variant="descriptionText">9 - 11 Years</Typography>
                        <Typography variant="descriptionHeader">Salary Range:</Typography>
                        <Typography variant="descriptionText">5 - 10 Lakhs</Typography>
                        <Typography variant="descriptionHeader">&nbsp;</Typography>
                        <Typography variant="descriptionText">&nbsp;</Typography>
                        <Typography variant="descriptionHeader">Job Contact Details:</Typography>
                        <Typography variant="descriptionText">
                            <b>Binoy Thomas Mathew -</b> binoy@abc.com, 9856789855
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Divider sx={{ borderColor: "borderColor", borderStyle: "dashed", ml: 2, mr: 2 }} />
            <Grid container columnSpacing={1} sx={{ m: 2 }}>
                <Button variant="contained" color="primary" startIcon={<EditIcon />}>Edit Job</Button>
                <Button variant="contained" color="primary" startIcon={<FeedbackIcon />}>Feedback Form</Button>
            </Grid>
        </>
    )

};

const CandidateComponent = () => {

    const rows = JSON.parse(JSON.stringify(rowHeaders));

    return (
        <InnerLayout>
            <Paper elevation={3} sx={{ padding: '20px' }}>
                <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ marginBottom: '5px' }}>
                    <Typography variant="panelHeader">Job Requirement - Active List</Typography>
                    <Grid container sx={{ display: 'flex', alignItems: 'center' }} columnGap={1}>
                        <SearchInputComponent />
                        <Button variant="contained" color="primary" startIcon={<AddIcon />}>Create New Requirement</Button>
                    </Grid>
                </Stack>
                <Divider sx={{ borderColor: "borderColor", mb: 2 }} />
                <JobCardListComponent headers={rows}>
                    <JobCardComponent row={rows} />
                </JobCardListComponent>
            </Paper>
        </InnerLayout>
    );
};

export default CandidateComponent;
