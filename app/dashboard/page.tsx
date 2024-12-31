"use client";

import { Grid2 as Grid, Box } from '@mui/material';
import InnerLayout from '@shared/InnerLayout';
import InterviewStatusComponent from "./components/InterviewStatus";

const DashboardComponent = () => {
    return (
        <InnerLayout>

            <Box sx={{ width: "100%" }}>
                <Box sx={{ backgroundColor: "primary.light", width: "auto", float: "left" }}>
                    <Grid container columns={16} spacing={2}>
                        <Grid>
                            <InterviewStatusComponent title={"Panel 1"} />
                        </Grid>
                        <Grid>
                            <InterviewStatusComponent title={"Panel 1"} />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ backgroundColor: "green" }}>
                    <Grid container spacing={2}>
                        <Grid>
                            <InterviewStatusComponent title={"Panel 1"} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </InnerLayout>
    );
}

export default DashboardComponent;
