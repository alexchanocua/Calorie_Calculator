import { Container, Box, Button } from '@mui/material';
import React from 'react'

const DateChangerButton = ({dateStr, setDate, action, type}) => {

    const modifyDate = () => {
        // convert the date string to a date Object
    const date = new Date(dateStr);
        if(action === 'increase'){
            date.setDate(date.getDate()+ 1);
        } else if(action === 'decrease'){
            date.setDate(date.getDate() - 1);
        }
        date.setUTCHours(0,0,0,0);
        setDate(date.toISOString().slice(0,10));
    };
    

  return (
            <Button
                sx={{m: 1,}}
                type='submit'
                variant='contained'
                color='primary'
                onClick={modifyDate}
                
            > {type} </Button>
  )
}

export default DateChangerButton;