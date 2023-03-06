import * as React from 'react';
import { Calendar } from 'react-calendar';
import { useState } from 'react';
import '../Calendar.css';

//mui
import { Container, Dialog, DialogTitle, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';


const dailyPlans = ['plan1','plan2'];
function DailyPlanDialog(props) {
    const { onClose, open, Year, Month, Day} = props;
    const handleClose = () => {
        onClose();
    };
    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>{Year}/{Month}/{Day}</DialogTitle>
            <List sx = {{ pt: 0 }}>
                {dailyPlans.map((dailyPlan) => {
                    <ListItem disableGutters>
                        <ListItemButton>
                            <ListItemText primary={dailyPlan} />
                        </ListItemButton>
                    </ListItem>
                })}
                <ListItem disableGutters>
                    <ListItemButton
                        onChange={() => handleListItemClick()}
                    >

                    </ListItemButton>
                </ListItem>
            </List>
        </Dialog>
    )
}

export default function Test() {
    const [value, setValue] = useState(new Date());
    const [anchorDay, setAnchorDay] = useState(null);
    const [openDay, setOpenDay] = useState(false);
    const onClickDay = (value, event) => {
        setAnchorDay(event.currentTarget);
        setOpenDay((prevOpenDay) => !prevOpenDay);
        console.log(value.getFullYear());
        console.log(value.getMonth()+1);
        console.log(value.getDate());
    }

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    
    return(
        <Container>
            <Calendar
                value={value}
                onClickDay={onClickDay}
                onChange={setValue}
            />
            <DailyPlanDialog
                open={open}
                onClose={handleClose}
            />
        </Container>
    )
}