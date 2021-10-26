import * as React from 'react';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {LeftPanel} from "./components/LeftPanel/LeftPanel";
import {RightPanel} from "./components/RightPanel/RightPanel"

const theme = createTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

export function App(props) {

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={1}>
                        <LeftPanel/>
                        <RightPanel/>
                    </Grid>
                </Box>
            </div>
        </ThemeProvider>
    );
}

