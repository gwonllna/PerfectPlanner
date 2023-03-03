import * as React from 'react';

//mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {Link} from 'react-router-dom';

//axios
import axios, {isCancel, AxiosError} from 'axios';

//icon
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';

export default function Login(){
    const [values, setValues] = useState({
        id: "",
        password: "",
    });

    const handleChange = (event)=>{
        setValues((prevState)=>{
            return { ...prevState, [event.target.name]: event.target.value}
        });
      };
    
    const handleClick = async () => {
        await axios.post('/member/login', values)
        .then((Response)=>{
            alert(Response.data)
        })
        .catch((Error)=>{
            console.log("Login Error! + \n" + Error)
        })
    };

    return(
        <Container maxwidth="sm">
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static" sx={{backgroundColor:'#C8B5FF'}}>
                    <Toolbar sx={{display:'flex', justifyContent: 'center'}}>
                    <Typography variant="h6" component="div" sx={{ display:'flex' }}>
                        Perfect Planner
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            
            <br></br>
            <Box sx={{display:'flex', flexDirection:'column', p:3}}>
                <Typography>아이디</Typography>
                <TextField 
                    name="id"
                    label="ID" 
                    variant="outlined" 
                    onChange={handleChange}
                    sx={{mb:3}} />
                <Typography>비밀번호</Typography>
                <TextField 
                    name="password"
                    label="Password" 
                    variant="outlined" 
                    onChange={handleChange}
                    sx={{mb:7}}/>
            </Box>

            <Box sx={{ justifyContent:'center', display:'flex', mb: 20}}>
                <Box sx={{ display:'flex', flexDirection:'column', width: '60%'}}>
                    <Button variant="contained" 
                        onClick = {handleClick}
                        sx={{backgroundColor:'#C8B5FF', m:1}}>Sign in</Button>
                    <Link to="../signup" style={{textDecoration: "none", color:'white'}}>
                        <Button variant="outlined" sx={{borderColor:'#C8B5FF', color: '#C8B5FF', m:1}}>Sign up</Button>
                    </Link>
                </Box>
            </Box>
            <br></br>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ top: 'auto', bottom: 0, backgroundColor:'#C8B5FF'}}>
                    <Toolbar>
                    <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'space-around'}}>
                        <IconButton color="inherit">
                            <HomeIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <TableChartOutlinedIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <AssessmentOutlinedIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <AccountCircleOutlinedIcon />
                        </IconButton>
                    </Box>
                    </Toolbar>
                </AppBar>
            </Box>

        </Container>
    );

}