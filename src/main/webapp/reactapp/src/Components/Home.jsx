import * as React from 'react';

//mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Card, Container, DialogTitle, Fade, Popover } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import Dialog from '@mui/material/Dialog';

import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import '../Calendar.css';
import { useDidMountEffect } from './useDidMountEffect';

//icon
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/More';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';

//calendar
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { display } from '@mui/system';

//react-router-dom
import { json, useLocation, useNavigate } from 'react-router-dom';
import axios, {isCancel, AxiosError} from 'axios';
import { parseNonNullablePickerDate } from '@mui/x-date-pickers/internals';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

export default function Home(){
    const [value, setValue] = useState(new Date());
    const isMounted = React.useRef(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const [dateValue, setDateValue] = useState(
        {
            year: 0,
            month: 0,
            day: 0,
        }
    )

    const [dailyPlans, setDailyPlans] = useState([]);

    useDidMountEffect(() => {
        if(isMounted.current){            
            handleDailyPlans();
            setDialogOpen(true);
        } else {
            isMounted.current = true;
        }
    }, [dateValue])

    const handleDialogClose = () => {
        setDialogOpen(false);
    }

    const handleDailyPlans = () => {
        console.log(dateValue);
        axios.get('/schedule/day', {
            params: {
                year: dateValue.year,
                month: dateValue.month,
                day: dateValue.day
            }
        })
        .then((Response) => {
            setDailyPlans((dailyPlans) => [...Response.data]);
        })
        .catch((Error)=>{
            console.log(Error);
        })
    }

    useDidMountEffect(() =>{
        console.log(dailyPlans);
    }, [dailyPlans])

    const onClickDay = (value, event) => {
        setDateValue({
            year: value.getFullYear(),
            month: value.getMonth() + 1,
            day: value.getDate(),
        });
    }


    const [plannerSelectOpen, setPlannerSelectOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setPlannerSelectOpen((prevOpen) => !prevOpen);
    }
    const canBeOpen = plannerSelectOpen && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;
    const changeHandleClick = (event => {
        
    })


    const location = useLocation();
    const userInfo = location.state.userInfo;


    


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

            <div>
                <Button aria-describedby={id} type="button" onClick={handleClick} sx={{color: 'black'}}>
                    Planner Select
                </Button>
                <Popper id={id} open={plannerSelectOpen} anchorEl={anchorEl} transition>
                    {({TransitionProps}) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Box
                            sx={{border: 1, p: 1, bgcolor: 'background.paper'}}
                            display="flex"
                            flexDirection={'column'}>
                                <Button onClick={changeHandleClick} sx={{color: 'black'}}>
                                    Planner 1
                                </Button>
                                <Button onClick={changeHandleClick} sx={{color: 'black'}}>
                                    Planner 2
                                </Button>
                                <Button onClick={changeHandleClick} sx={{color: 'black'}}>
                                    Planner 3
                                </Button>
                            </Box>
                        </Fade>
                    )}
                </Popper>
            </div>
            
            <br></br>

            <Search sx={{border: 1, borderRadius:'5'}}>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search???"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
            <br></br>
            <Box sx={{display:'flex', justifyContent:'center'}}>
                <Calendar
                    onChange={setValue}
                    onClickDay={onClickDay}
                    value={value}
                />
            </Box>

            <br></br>
            
            <Dialog
                // sx={{
                //     width: '354px',
                //     height: '395px',
                //     justifySelf: 'center',
                //     alignSelf: 'center'
                // }}
                open={dialogOpen}>
                <Card 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '325px',
                        height: '395px',
                    }}
                >
                    <Button onClick={handleDialogClose}>Close</Button>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                            height: '90%',
                        }}
                    >
                        {dailyPlans.map((dailyPlan) => (
                            <Box sx={{border: 3, borderRadius: 3, backgroundColor: 'yellow', width: '285px', height: '55px', marginTop: 2}}>
                                <Typography>{dailyPlan.hour}:{dailyPlan.minute}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Card>
            </Dialog>


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