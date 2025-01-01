import createTheme from '@mui/material/styles/createTheme';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        panelHeader: React.CSSProperties;
        descriptionHeader: React.CSSProperties;
        descriptionText: React.CSSProperties;
        listLink: React.CSSProperties;
    }
    interface TypographyVariantsOptions {
        panelHeader?: React.CSSProperties;
        descriptionHeader?: React.CSSProperties;
        descriptionText?: React.CSSProperties;
        listLink?: React.CSSProperties;
    }
    interface PaletteOptions {
        menuBarBackgroundColor: string;
        panelStyle: {
            backgroundColor: string;
            borderColor: string;
            color: string;
        },
        borderColor: string;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        panelHeader: true;
        descriptionHeader: true;
        descriptionText: true;
        listLink: true;
    }
}

const DefaultTheme = createTheme({
    cssVariables: true,
    palette: {
        background: {
            default: '#f2f5f7'
        },
        menuBarBackgroundColor: 'rgb(78, 162, 78)',
        panelStyle: {
            backgroundColor: "rgb(255, 0, 255)",
            borderColor: "rgb(0, 255, 0)",
            color: "rgba(255, 0, 255,0.5)"
        },
        borderColor: "rgba(0, 0, 0, 0.12)"
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        panelHeader: {
            fontSize: "1.2rem",
            fontWeight: 'bold'
        },
        listLink: {
            fontSize: "0.8125rem",
            fontWeight: 'bold',
            color: "var(--mui-palette-primary-light)",
            lineHeight: "1.43rem",
            cursor: "pointer"
        },
        descriptionHeader: {
            marginTop: "1rem",
            fontSize: "0.8125rem",
            fontWeight: 'bold',
            color: "var(--mui-palette-primary-light)"
        },
        descriptionText: {
            fontSize: "0.8125rem"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none'
                }
            }
        },
    }
});

export default DefaultTheme;