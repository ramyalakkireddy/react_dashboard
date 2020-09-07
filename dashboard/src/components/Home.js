import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Person from '@material-ui/icons/Person';
import Group from '@material-ui/icons/Group';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import {
  Grid,
  Card,
  CardContent,
  IconButton,
  CardHeader
} from '@material-ui/core';
import CourseChart from './CourseChart.js';
import StudentsChart from './StudentsChart.js';

const useStyles = makeStyles({
  header: {
    background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
    float: 'left',
    padding: '15px',
    boxShadow:
      '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(255, 152, 0,.4)'
  },
  header1: {
    float: 'left',
    padding: '15px',
    background: 'linear-gradient(60deg, #66bb6a, #43a047)',
    boxShadow:
      '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)'
  },
  header2: {
    float: 'left',
    padding: '15px',
    background: 'linear-gradient(60deg, #26c6da, #00acc1)',
    boxShadow:
      '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(0, 172, 193,.4)'
  },
  content: {
    textAlign: 'right'
  },
  cardCategory: {
    margin: 0,
    fontSize: '1.25em',
    marginTop: 0,
    paddingTop: '10px',
    marginBottom: 0
  },
  cardTitle: {
    color: '#3C4858',
    marginTop: 0,
    minHeight: 'auto',
    fontWeight: 300,
    marginBottom: '3px',
    textDecoration: 'none'
  },
  gridItem: {
    padding: '15px !important'
  },
  icon: {
    color: '#ffffff',
    height: '50px',
    width: '50px'
  }
});

 const Home = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container direction="row">
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.gridItem}>
          <Card>
            <CardHeader
              className={classes.header}
              action={
                <IconButton>
                  <Group className={classes.icon} />
                </IconButton>
              }
            />
            <CardContent className={classes.content}>
              <p className={classes.cardCategory}>Registered Students</p>
              <h3 className={classes.cardTitle}>{20}</h3>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.gridItem}>
          <Card>
            <CardHeader
              className={classes.header1}
              action={
                <IconButton>
                  <LibraryBooks className={classes.icon} />
                </IconButton>
              }
            />
            <CardContent className={classes.content}>
              <p className={classes.cardCategory}>Courses</p>
              <h3 className={classes.cardTitle}>{30}</h3>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} className={classes.gridItem}>
          <Card>
            <CardHeader
              className={classes.header2}
              action={
                <IconButton>
                  <Person className={classes.icon} />
                </IconButton>
              }
            />
            <CardContent className={classes.content}>
              <p className={classes.cardCategory}>Teachers</p>
              <h3 className={classes.cardTitle}>{0}</h3>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
    <Grid container direction="row">
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.gridItem}>
        <CourseChart />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} className={classes.gridItem}>
        <StudentsChart />
      </Grid>
    </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
