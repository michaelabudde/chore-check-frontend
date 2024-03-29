import * as React from "react";
import Paper from "@mui/material/Paper";
import { ViewState, Toolbar } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  CurrentTimeIndicator,
} from "@devexpress/dx-react-scheduler-material-ui";
import { completedChores } from "../../../db.jsx";

const TimeIndicator = new Date().toLocaleDateString();
export default class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: completedChores,
    };
  }
  render() {
    const { data } = this.state;
    return (
      <Paper>
        <Scheduler data={data} heigh={660}>
          <ViewState />
          <WeekView />
          <Appointments />
          <CurrentTimeIndicator indicatorComponent={TimeIndicator} />
        </Scheduler>
      </Paper>
    );
  }
}
