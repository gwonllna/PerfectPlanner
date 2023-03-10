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

//axios
import axios, {isCancel, AxiosError} from 'axios';

//react-router-dom
import { useNavigate } from 'react-router-dom';

//icon
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/More';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';




export default function Signup(){
    const [signupValues, setSignupValues] = useState({
        id: "",
        password: "",
        name: "",
        email: "",
    });

    const handleChange = (event)=>{
        setSignupValues((prevState)=>{
            return { ...prevState, [event.target.name]: event.target.value}
        });
    };
    
    const handleClick = async () => {
        await axios.post('/member/join', signupValues)
        .then((Response)=>{
            switch (Response.data) {
                case true :
                    alert("회원가입에 성공하였습니다.");
                    goLogin();
                    break;
                default :
                    alert("회원가입에 실패하였습니다.");
            }
        })
        .catch((Error)=>{
            console.log("Sign up Error! + \n" + Error)
        })
    };

    const navigate = useNavigate();

    const goLogin = () => {
        navigate('/login');
    }

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
                    sx={{mb:3}}/>
                <Typography>이름(닉네임)</Typography>
                <TextField 
                    name="name"
                    label="Name" 
                    variant="outlined"
                    onChange={handleChange} 
                    sx={{mb:3}}/>
                <Typography>이메일</Typography>
                <TextField 
                    name="email"  
                    label="Email" 
                    variant="outlined" 
                    onChange={handleChange}
                    sx={{mb:2}}/>
            </Box>

            <Box sx={{ justifyContent:'center', display:'flex'}}>
                <Box sx={{ display:'flex', flexDirection:'column', width: '60%'}}>
                <Button variant="contained" 
                    onClick = {handleClick}
                    sx={{backgroundColor:'#C8B5FF', m:1}}>Sign up</Button>
                <Button variant="outlined"
                    sx={{borderColor:'#C8B5FF', color: '#C8B5FF', m:1}}
                    onClick={goLogin}
                >Back</Button>
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