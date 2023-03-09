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
import SendIcon from '@mui/icons-material/Send';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/More';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';


//calendar
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { display, height } from '@mui/system';

//time-picker
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo/DemoContainer';


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

    //USERINFO
    const location = useLocation();
    const userInfo = location.state.userInfo;



    //HOME-PLANNER SELECT Button
    const [plannerSelectOpen, setPlannerSelectOpen] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setPlannerSelectOpen((prevOpen) => !prevOpen);
    }

    const canBeOpen = plannerSelectOpen && Boolean(anchorEl);

    const id = canBeOpen ? 'transition-popper' : undefined;

    const changeHandleClick = (event => {})



    //Home-Calendar
    const [value, setValue] = useState(new Date());

    const [dateValue, setDateValue] = useState(
        {
            year: 0,
            month: 0,
            date: 0,
            day: 0
        }
    )

    const dateValueIsMounted = React.useRef(false);

    const [dailyPlans, setDailyPlans] = useState([]);

    const dailyPlansIsMounted = React.useRef(false);

    const [dialogOpen, setDialogOpen] = useState(false);

    const onClickDay = (value, event) => {
        setDateValue({
            year: value.getFullYear(),
            month: value.getMonth() + 1,
            date: value.getDate(),
            day: value.getDay()
        });
    }

    useDidMountEffect(() => {
        if(dateValueIsMounted.current){            
            handleDailyPlans();
        } else {
            dateValueIsMounted.current = true;
        }
    }, [dateValue])

    const handleDailyPlans = () => {
        axios.get('/schedule/day', {
            params: {
                year: dateValue.year,
                month: dateValue.month,
                day: dateValue.date
            }
        })
        .then((Response) => {
            setDailyPlans((dailyPlans) => [...Response.data]);
        })
        .catch((Error)=>{
            console.log(Error);
        })
    }

    useDidMountEffect(() => {
        if(dailyPlansIsMounted.current){            
            setDialogOpen(true);
        } else {
            dailyPlansIsMounted.current = true;
        }
    }, [dailyPlans])



    //Home-Calendar-AddIcon
    const [addPlanOpen, setAddPlanOpen] = useState(false);

    const handlePlusClick = () => {
        setAddPlanOpen(true);
    }



    //Home-Calendar-DailyPlan
    const [changePlanOpen, setChangePlanOpen] = useState(false);

    const [changeValue, setChangeValue] = useState({
        id: 0,
        name: "",
        year: 0,
        month: 0,
        day: 0,
        startHour: 0,
        startMinute: 0,
        startSecond: 0,
        finishHour: 0,
        finishMinute: 0,
        finishSecond: 0
    })

    const [dailyPlan, setDailyPlan] = useState({
        id: 0,
        name: "",
        year: 0,
        month: 0,
        day: 0,
        startHour: 0,
        startMinute: 0,
        startSecond: 0,
        finishHour: 0,
        finishMinute: 0,
        finishSecond: 0
    })

    const handleDailyPlanClick = (dailyPlan) => {
        console.log(dailyPlan);
        setChangeValue({
            id: dailyPlan.id,
            name: dailyPlan.name,
            year: dailyPlan.year,
            month: dailyPlan.month,
            day: dailyPlan.day,
            startHour: dailyPlan.startHour,
            startMinute: dailyPlan.startMinute,
            startSecond: dailyPlan.startSecond,
            finishHour: dailyPlan.finishHour,
            finishMinute: dailyPlan.finishMinute,
            finishSecond: dailyPlan.finishSecond
        });
        setDailyPlan({
            id: dailyPlan.id,
            name: dailyPlan.name,
            year: dailyPlan.year,
            month: dailyPlan.month,
            day: dailyPlan.day,
            startHour: dailyPlan.startHour,
            startMinute: dailyPlan.startMinute,
            startSecond: dailyPlan.startSecond,
            finishHour: dailyPlan.finishHour,
            finishMinute: dailyPlan.finishMinute,
            finishSecond: dailyPlan.finishSecond
        })
        setChangePlanOpen(true);
    }



    //Home-Calendar-닫기 Button
    const handleDialogClose = () => {
        setDialogOpen(false);
    }


    
    //Home-Calendar-AddIcon-SendIcon
    const [plusValue, setPlusValue] = useState({
        name: "",
        year: 0,
        month: 0,
        day: 0,
        startHour: 0,
        startMinute: 0,
        startSecond: 0,
        finishHour: 0,
        finishMinute: 0,
        finishSecond: 0
    })

    const createSchedule = () => {
        axios.post("/schedule", plusValue)
        .then((Response)=>{
            alert("새로운 일정을 추가하였습니다.");
        })
        .catch((Error)=>{
            alert("새로운 일정을 추가하지 못했습니다.");
        })
        handleDailyPlans();
    }
    
    

    //Home-Calendar-AddIcon-StartTime
    const [startTime, setStartTime] = useState({});

    const startTimeIsMounted = React.useRef(false);

    const handleStartTime = (newValue) => {
        setStartTime(newValue);
    }

    useDidMountEffect(() => {
        if(startTimeIsMounted.current){
            setPlusValue((prevState)=>{
                return {...prevState,
                    startHour: startTime.$d.getHours(),
                    startMinute: startTime.$d.getMinutes()
                }
            });
        } else {
            startTimeIsMounted.current = true;
        }
    }, [startTime])



    //Home-Calendar-AddIcon-FinishTime
    const [finishTime, setFinishTime] = useState(null);

    const finishTimeIsMounted = React.useRef(false);

    const handleFinishTime = (newValue) => {
        setFinishTime(newValue);
    }

    useDidMountEffect(() => {
        if(finishTimeIsMounted.current){
            setPlusValue((prevState)=>{
                return {...prevState,
                    finishHour: finishTime.$d.getHours(),
                    finishMinute: finishTime.$d.getMinutes()
                }
            });
        } else {
            finishTimeIsMounted.current = true;
        }
    }, [finishTime])



    //Home-Calendar-AddIcon-TodoName
    const handleChange = (event)=>{
        setPlusValue((prevState)=>{
            return { ...prevState, [event.target.name]: event.target.value}
        });
        setPlusValue((prevState)=>{
            return {...prevState,
                year: dateValue.year,
                month: dateValue.month,
                day: dateValue.date,
            }
        })
    };



    //Home-Calendar-AddIcon-닫기 Button
    const handlePlusClose = () => {
        setAddPlanOpen(false);
    }



    //Home-Calendar-DailyPlan-수정 Button
    const changeSchedule = () => {
        console.log(changeValue);
        axios.put("/schedule", changeValue)
        .then((Response)=>{
            alert("일정을 수정하였습니다.");
        })
        .catch((Error)=>{
            alert("일정을 수정하지 못했습니다.");
        })
        handleDailyPlans();
    }



    //Home-Calendar-DailyPlan-삭제 Button
    const deleteSchedule = () => {
        console.log(dailyPlan.id);
        axios.delete("/schedule", {
            params: {
                id: dailyPlan.id
            }
        })
        .then((Response)=>{
            alert("일정을 삭제하였습니다.");
        })
        .catch((Error)=>{
            alert("일정을 삭제하지 못했습니다.");
        })
        handleDailyPlans();
    }



    //Home-Calendar-DailyPlan-StartTime
    const [changeStartTime, setChangeStartTime] = useState(null);

    const changeStartTimeIsMounted = React.useRef(false);

    const handleChangeStartTime = (newValue) => {
        setChangeStartTime(newValue);
    }

    const changeValueIsMounted = React.useRef(false);

    useDidMountEffect(() => {
        if(changeStartTimeIsMounted.current){
            setChangeValue((prevState)=>{
                return {...prevState,
                    startHour: changeStartTime.$d.getHours(),
                    startMinute: changeStartTime.$d.getMinutes()
                }
            });
        } else {
            changeStartTimeIsMounted.current = true;
        }
    }, [changeStartTime])

    useDidMountEffect(() => {
        if(changeValueIsMounted.current){
            console.log(changeValue);
        } else {
            changeValueIsMounted.current = true;
        }
    }, [changeValue])



    //Home-Calendar-DailyPlan-FinishTime
    const [changeFinishTime, setChangeFinishTime] = useState(null);

    const changeFinishTimeIsMounted = React.useRef(false);

    const handleChangeFinishTime = (newValue) => {
        setChangeFinishTime(newValue);
    }

    useDidMountEffect(() => {
        if(changeFinishTimeIsMounted.current){
            setChangeValue((prevState)=>{
                return {...prevState,
                    finishHour: changeFinishTime.$d.getHours(),
                    finishMinute: changeFinishTime.$d.getMinutes()
                }
            });
        } else {
            changeFinishTimeIsMounted.current = true;
        }
    }, [changeFinishTime])



    //Home-Calendar-DailyPlan-TodoName
    const handleChangeName = (event)=>{
        setChangeValue((prevState)=>{
            return { ...prevState, [event.target.name]: event.target.value}
        });
        setChangeValue((prevState)=>{
            return {...prevState,
                year: dateValue.year,
                month: dateValue.month,
                day: dateValue.date,
            }
        })
    };



    //Home-Calendar-DailyPlan-CloseIcon
    const handleChangeClose = () => {
        setChangePlanOpen(false);
    }
    
    


    return(
        <Container
            maxwidth="sm"
            sx={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    width: '100vw',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}
            >
                <Box sx={{ width: '100vw'}}>
                    <AppBar position="static" sx={{backgroundColor:'white', border: 1, borderRadius: 1, color: 'black'}}>
                        <Toolbar sx={{display:'flex', justifyContent: 'center'}}>
                            <Typography variant="h6" component="div" sx={{ display:'flex', color: 'black' }}>
                                Perfect Planner
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                
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
                    open={dialogOpen}>
                    <Card 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '325px',
                            height: '395px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                width: '100%',
                                height: '90%',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '285px',
                                    height: '30px',
                                    marginTop: 1,
                                    marginBottom: 1.5
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: '#EBEBF0',
                                        borderRadius: 100,
                                        width: '140px',
                                        height:'30px',
                                        marginTop: 1,
                                    }}
                                >
                                    <Typography fontSize={18}>
                                        {dayjs()
                                            .set('year', dateValue.year)
                                            .set('month', dateValue.month - 1)
                                            .set('date', dateValue.date)
                                            .set('day', dateValue.day)
                                            .format('YYYY.MM.DD ddd')}
                                    </Typography>
                                </Box>
                                <AddIcon onClick={handlePlusClick} sx={{width: '30px', height: '30px', marginTop: 1}}></AddIcon>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '240px',
                                    marginTop: 1,
                                    overflowY: 'scroll'
                                }}
                            >
                                {dailyPlans.map((dailyPlan) => (
                                    <Box
                                        key={dailyPlan.id}
                                        onClick={handleDailyPlanClick.bind(this, dailyPlan)}
                                        sx={{
                                            border: 3,
                                            borderRadius: 3,
                                            backgroundColor: 'white',
                                            width: '285px',
                                            height: '55px',
                                            marginTop: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-evenly'
                                        }}
                                    >
                                        <Typography fontSize={14}>
                                            {dayjs()
                                                .set('hour', dailyPlan.startHour)
                                                .set('minute', dailyPlan.startMinute)
                                                .format("HH:mm")
                                            } ~ {dayjs()
                                                .set('hour', dailyPlan.finishHour)
                                                .set('minute', dailyPlan.finishMinute)
                                                .format("HH:mm")
                                            }
                                        </Typography>
                                        <Typography fontSize={17}>
                                            {dailyPlan.name}
                                        </Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        <Button
                            onClick={handleDialogClose}
                            sx={{
                                width: '90%',
                                height: '40px',
                                borderRadius: 2.5,
                                backgroundColor: 'black',
                                color: 'white',
                                marginBottom: 2,
                                ":hover": {backgroundColor: 'black', color: 'white'}
                            }}
                        >
                            <Typography fontSize={16}>닫기</Typography>
                        </Button>
                    </Card>
                    <Dialog
                        open={addPlanOpen}
                    >
                        <Card
                            sx={{
                                width: '310px',
                                height: '380px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '90%',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '285px',
                                        height: '30px',
                                        marginTop: 1,
                                        marginBottom: 1.5
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#EBEBF0',
                                            borderRadius: 100,
                                            width: '140px',
                                            height:'30px',
                                            marginTop: 1,
                                        }}
                                    >
                                        <Typography fontSize={18}>
                                            {dayjs()
                                                .set('year', dateValue.year)
                                                .set('month', dateValue.month - 1)
                                                .set('date', dateValue.date)
                                                .set('day', dateValue.day)
                                                .format('YYYY.MM.DD ddd')}
                                        </Typography>
                                    </Box>
                                    <SendIcon onClick={createSchedule} sx={{width: '30px', height: '30px', marginTop: 1}}></SendIcon>
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: 'white',
                                        width: '289px',
                                        height: '95%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Typography sx={{alignSelf: 'flex-start', marginTop: 1}}>Time</Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer
                                            components={['MobileTimePicker', 'MobileTimePicker']}
                                            sx={{width: '285px'}}
                                        >
                                            <MobileTimePicker
                                                label={'start time'}
                                                views={['hours', 'minutes']}
                                                onAccept={handleStartTime}
                                            />
                                            <MobileTimePicker
                                                label={'end time'}
                                                views={['hours', 'minutes']}
                                                onAccept={handleFinishTime}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <Typography sx={{alignSelf: 'flex-start', marginTop: 1}}>Todo</Typography>
                                    <TextField 
                                        name="name"
                                        label="Todo" 
                                        variant="outlined" 
                                        onChange={handleChange}
                                        sx={{mb:3, width: '285px'}} 
                                    />
                                </Box>
                            </Box>
                            <Button
                                onClick={handlePlusClose}
                                sx={{
                                    width: '90%',
                                    height: '40px',
                                    borderRadius: 2.5,
                                    backgroundColor: 'black',
                                    color: 'white',
                                    marginBottom: 2,
                                    ":hover": {backgroundColor: 'black', color: 'white'}
                                }}
                            >
                                <Typography fontSize={16}>닫기</Typography>
                            </Button>
                        </Card>
                    </Dialog>
                    <Dialog
                        open={changePlanOpen}
                    >
                        <Card
                            sx={{
                                width: '310px',
                                height: '380px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '90%',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        width: '285px',
                                        height: '30px',
                                        marginTop: 1,
                                        marginBottom: 1.5
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            backgroundColor: '#EBEBF0',
                                            borderRadius: 100,
                                            width: '140px',
                                            height:'30px',
                                            marginTop: 1,
                                        }}
                                    >
                                        <Typography fontSize={18}>
                                            {dayjs()
                                                .set('year', dateValue.year)
                                                .set('month', dateValue.month - 1)
                                                .set('date', dateValue.date)
                                                .set('day', dateValue.day)
                                                .format('YYYY.MM.DD ddd')}
                                        </Typography>
                                    </Box>
                                    <CloseIcon onClick={handleChangeClose} sx={{width: '30px', height: '30px', marginTop: 1}}></CloseIcon>
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: 'white',
                                        width: '289px',
                                        height: '95%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Typography sx={{alignSelf: 'flex-start', marginTop: 1}}>Time</Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer
                                            components={['MobileTimePicker', 'MobileTimePicker']}
                                            sx={{width: '285px'}}
                                        >
                                            <MobileTimePicker
                                                label={dayjs()
                                                    .set('hour', dailyPlan.startHour)
                                                    .set('minute', dailyPlan.startMinute)
                                                    .format('HH:mm')
                                                }
                                                views={['hours', 'minutes']}
                                                onAccept={handleChangeStartTime}
                                            />
                                            <MobileTimePicker
                                                label={dayjs()
                                                    .set('hour', dailyPlan.finishHour)
                                                    .set('minute', dailyPlan.finishMinute)
                                                    .format('HH:mm')
                                                }
                                                views={['hours', 'minutes']}
                                                onAccept={handleChangeFinishTime}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <Typography sx={{alignSelf: 'flex-start', marginTop: 1}}>Todo</Typography>
                                    <TextField 
                                        name="name"
                                        value={changeValue.name}
                                        label="Todo" 
                                        variant="outlined" 
                                        onChange={handleChangeName}
                                        sx={{mb:3, width: '285px'}} 
                                    />
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: '90%',
                                    height: '40px',
                                    marginBottom: 2,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly'
                                }}
                            >
                                <Button
                                    onClick={deleteSchedule}
                                    sx={{
                                        width: '45%',
                                        height: '40px',
                                        borderRadius: 2.5,
                                        backgroundColor: 'black',
                                        color: 'white',
                                        marginBottom: 2,
                                        ":hover": {backgroundColor: 'black', color: 'white'}
                                    }}
                                >
                                    <Typography fontSize={16}>삭제</Typography>
                                </Button>
                                <Button
                                    onClick={changeSchedule}
                                    sx={{
                                        width: '45%',
                                        height: '40px',
                                        borderRadius: 2.5,
                                        backgroundColor: 'black',
                                        color: 'white',
                                        marginBottom: 2,
                                        ":hover": {backgroundColor: 'black', color: 'white'}
                                    }}
                                >
                                    <Typography fontSize={16}>수정</Typography>
                                </Button>
                            </Box>
                        </Card>
                    </Dialog>
                </Dialog>
            </Box>


            <Box sx={{ width: '100vw' }}>
                <AppBar position="static" sx={{ top: 'auto', bottom: 0, backgroundColor:'#FFFFFF', color: 'black', border: 1, borderRadius: 1}}>
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