import React, { useState } from 'react';
import {
  Link,
} from 'react-router-dom';
import './CreatingEventPage/CreatingEventPage.less';
import { ILocation } from '../types/location';
import dayjs, { Dayjs } from 'dayjs';
import { Button, Box, TextField, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const CreatingEventPage: React.FunctionComponent = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(
    dayjs(new Date()),
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    dayjs(new Date()),
  );
  const [hostName, setHostName] = useState<string>('Host Name');
  const [eventName, setEventName] = useState<string>('Event Name');
  const [location, setLocation] = useState<ILocation>({streetName: 'streetName', postcode:'postcode', suburb: 'suburb', state: 'state'});

  return (
    <div className="create-container">
      <Box
      component="form"
      noValidate
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="off"
      >
        <TextField
          required
          label="Event Name"
          className="textField"
          defaultValue="Event Name"
          onChange={(e) => setEventName(e.target.value)}
        />
        <TextField
          required
          label="Host Name"
          className="textField"
          defaultValue="Host Name"
          onChange={(e) => setHostName(e.target.value)}

        />
        <LocalizationProvider dateAdapter={AdapterDayjs} className="date-picker">
          <Stack spacing={3}>
            <MobileDatePicker
              label="Start Date"
              inputFormat="MM/DD/YYYY"
              value={startDate}
              onChange={(e) => setStartDate(e)}
              renderInput={(params) => <TextField {...params} />}
            />
            <MobileDatePicker
              label="End Date"
              inputFormat="MM/DD/YYYY"
              value={endDate}
              onChange={(e) => setEndDate(e)}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Start Time"
              value={startDate}
              onChange={(e) => setStartDate(e)}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="End Time"
              value={endDate}
              onChange={(e) => setEndDate(e)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
        <TextField
          required
          label="StreetName"
          className="textField"
          defaultValue="StreetName"
          onChange={(e) => setLocation({...location, streetName: e.target.value})}
        />
        <TextField
          required
          label="Suburb"
          className="textField"
          defaultValue="Suburb"
          onChange={(e) => setLocation({...location, suburb: e.target.value})}
        />
        <TextField
          required
          label="Postage"
          className="textField"
          defaultValue="Postage"
          onChange={(e) => setLocation({...location, postcode: e.target.value})}
        />
        <TextField
          required
          label="State"
          className="textField"
          defaultValue="State"
          onChange={(e) => setLocation({...location, state: e.target.value})}
        />
      </Box>
      <Link to={"/event"} state={{ hostName: hostName, eventName: eventName, location: location, startDate: startDate?.format('DD MMM YYYY HH:mmA'), endDate: endDate?.format('DD MMM YYYY HH:mmA'),}}>
        <Button>Next</Button>
      </Link>
      
    </div>
  )
};

export default CreatingEventPage;
