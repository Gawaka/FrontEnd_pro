import { createTheme} from '@mui/material';


const theme = createTheme({
    palette: {
        background: {
        default: '#FDFBF7',
        paper: '#FFFFFF',
        },
        primary: {
        main: '#7986CB',
        light: '#E8EAF6',
        },
        secondary: {
        main: '#4DB6AC',
        light: '#E0F2F1',
        },
        text: {
        primary: '#2C3E50',
        secondary: '#607D8B',
        }
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    shape: {
        borderRadius: 16,
    }
});

export default theme;