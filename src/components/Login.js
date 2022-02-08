import React from 'react';
import {Grid ,Paper,Avatar, TextField,Button} from '@material-ui/core'
// import { TextField } from '@mui/material';
const Login=()=>{

    const paperstyle={padding :20, height :'50vh', width:300, margin:"30px auto"}
    return(
        <Paper elevation={10} style={paperstyle}>
            <Grid align="center">
                <Avatar></Avatar>
                <h2 >Sign in</h2>
            </Grid>
        <TextField label="Username" placeholder="Enter your username here" fullWidth required className="username"></TextField>
        <br/>
        <br/>
        <TextField label="Password" placeholder="Enter your password here" fullWidth required></TextField>
        <br/>
        <br/>
        <Button variant="contained" type="submit" fullWidth>Sign in</Button>
        </Paper>
    )
}

export default Login
