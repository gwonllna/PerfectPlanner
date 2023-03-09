import * as React from 'react';
import { LocalizationProvider, MobileTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo/DemoContainer';

export default function Test() {
    
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={['MobileTimePicker']}
                sx={{width: '285px'}}
            >
                <MobileTimePicker
                    label={'start hours and start minutes'}
                    views={['hours', 'minutes']}
                >

                </MobileTimePicker>
            </DemoContainer>
        </LocalizationProvider>
    );
}