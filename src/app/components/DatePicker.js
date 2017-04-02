import React from 'react';
import DatePickers from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker(props) {

  return (
    <div className="datePick">
    {props.dateView ?
    <div><div className="dateHead">START DATE</div><DatePickers inline selected={props.startDate} selectsStart onChange={props.onStartDateSelected} endDate={props.endDate} minDate={moment()}/></div> :
    <div><div className="dateHead">END DATE</div><DatePickers inline selected={props.endDate} selectsEnd onChange={props.onEndDateSelected} startDate={props.startDate} endDate={props.endDate} /></div>}
    </div>
  );

}

export default DatePicker;
