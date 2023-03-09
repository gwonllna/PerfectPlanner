import * as React from 'react';

import { Box, Button, Container, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useNavigate } from 'react-router-dom';

export default function Main(){

    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/login");
    }

    const goSignup = () => {
        navigate("/signup");
    }

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '644px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '150px',
                        height: '150px'
                    }}
                >
                    <CalendarTodayIcon sx={{width: '72px', height: '72px'}}/>
                    <Typography fontSize={27}>퍼플</Typography>
                    <Typography fontSize={14}>PERFECT PLANNER</Typography>
                </Box>
                <Button
                    onClick={goLogin}
                    sx={{
                        width: '200px',
                        height: '40px',
                        backgroundColor: 'black',
                        marginTop: 1,
                        ":hover": {backgroundColor: 'black', color: 'white'}
                    }}>
                    <Typography color={'white'}>Sign in</Typography>
                </Button>
                <Button
                    onClick={goSignup}
                    sx={{border: 1, color: 'black', width: '200px', height: '40px', backgroundColor: 'white', marginTop: 1}}>
                    <Typography color={'black'}>Sign up</Typography>
                </Button>
            </Box>

        </Container>
    )
}