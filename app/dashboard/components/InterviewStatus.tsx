"use client";


import React from 'react';

import { Box, Typography, Paper, Stack } from '@mui/material';

const InterviewStatusComponent = ({ title }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 435,
                    height: 250,
                },
            }}
        >
            <Paper elevation={5} sx={{ padding: "2px" }}>
                <Stack sx={{
                    backgroundColor: "primary.light", height: 33, lineHeight: 33, paddingLeft: 1,
                    fontSize: 15, fontWeight: "bold", color: "primary.contrastText",
                    display: "flex", justifyContent: "center", alignItems: "flex-start"
                }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                </Stack>
            </Paper>
        </Box>
    )
};

export default InterviewStatusComponent;
