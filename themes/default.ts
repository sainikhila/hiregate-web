import createTheme from '@mui/material/styles/createTheme';

declare module '@mui/material/styles' {
    interface PaletteOptions {
        menuBarBackgroundColor: string;
    }
}

const DefaultTheme = createTheme({
    cssVariables: true,
    /* 
    palette: {
        primary: {
            main: "rgb(34, 139, 34)"
        },
        background: {
            default: '#ededed'
        },
        menuBarBackgroundColor: 'rgb(78, 162, 78)'
    } */
});

export default DefaultTheme;