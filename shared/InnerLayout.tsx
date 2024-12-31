"use client";

import { Container } from '@mui/material';
import Header from './Header';

const InnerLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Container maxWidth="xl">
                {children}
            </Container>
        </>
    );
}

export default InnerLayout;