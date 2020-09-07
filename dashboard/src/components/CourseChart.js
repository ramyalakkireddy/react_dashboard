import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Tooltip,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Animation, EventTracker } from '@devexpress/dx-react-chart';

const chartData = [
  {category: 'Web Development', courses: 5},
  {category: 'Data Science', courses: 4},
  {category: 'Mobile Apps', courses: 5},
  {category: 'Programming Languages', courses: 4},
  {category: 'Software Engineering', courses: 3},
  {category: 'Software Testing', courses: 5},
  {category: 'Databases', courses: 5}
]

export default function CourseChart(props) {
  return (
      <Paper elevation={3}>
        <Chart
          data={chartData}
        >
          <PieSeries
            valueField="courses"
            argumentField="category"
          />
          <Legend />
          <Title
            text="Courses offered for each category"
          />
          <EventTracker />
          <Tooltip />
          <Animation />
        </Chart>
      </Paper>
    );
}
