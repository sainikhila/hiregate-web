"use client";

import { Container, Toolbar } from '@mui/material';
import Header from './Header';

const InnerLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Container maxWidth="xl">
                <Toolbar />
                {children}
            </Container>
        </>
    );
}

export default InnerLayout;