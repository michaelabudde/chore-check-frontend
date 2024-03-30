import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AllDayPanel,
} from "@devexpress/dx-react-scheduler-material-ui";

const currentDate = new Date().toLocaleDateString();
const schedulerData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-01T11:00",
    title: "Meeting",
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
  },
];

const Calendar = () => (
  <Paper>
    <Scheduler data={schedulerData}>
      <ViewState currentDate={currentDate} />
      <WeekView />
      <AllDayPanel />
      <Appointments />
    </Scheduler>
  </Paper>
);
export default Calendar;
