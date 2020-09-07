import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis, Tooltip
} from '@devexpress/dx-react-chart-material-ui';

import { Animation, EventTracker } from '@devexpress/dx-react-chart';

const data = [
  { course: 'React', students: 20 },
  { course: 'Angular', students: 15 },
  { course: 'Python', students: 9 },
  { course: 'Selenium', students: 13 },
  { course: 'MongoDB', students: 19 },
  { course: 'Kubernetes', students: 14 },
  { course: 'Agile', students: 9 },
  { course: 'Java', students: 30 }
];

export default function StudentsChart() {
  return (
    <Paper elevation={3}>
      <Chart
        data={data}
      >
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries
          valueField="students"
          argumentField="course"
        />
        <Title text="Students enrolled per course" />
        <EventTracker />
        <Tooltip />
        <Animation />
      </Chart>
    </Paper>
  );
}
