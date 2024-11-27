'use client'

import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

const DragAndDropCalendar = withDragAndDrop(Calendar);
const localizer = momentLocalizer(moment);

export default function CalendarHomepage() {

  return (
    
      <DragAndDropCalendar
        defaultDate={moment().toDate()}
        defaultView='month'
        events={[{}]}
        localizer={localizer}
        
        className='font-bold h-screen w-auto' 
      />

  
  )
}