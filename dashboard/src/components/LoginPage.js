import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Typography,
  CssBaseline,
  Container,
  Paper,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    height: '100vh',
  },
  title: {
    marginTop: '16px',
  },
  paper: {
    minWidth: '320px',
    maxWidth: '400px',
    height: 'auto',
    position: 'absolute',
    top: '20%',
    left: '0px',
    right: '0px',
    margin: 'auto',
    border: '3px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '20px',
  },
  content: {
    display: 'flex',
    textAlign: 'center',
  },
  inputField: {
    width: '40ch',
  },
  submit: {
    backgroundColor: '#1199ee',
  },
  buttonSection: {
    margin: '24px 0 16px -16px',
    display: 'flex',
    textAlign: 'center',
  },
  passwordButton: {
    color: '#1199ee',
  },
  error: {
    color: 'red',
    textAlign: 'left',
    paddingLeft: '45px',
  }
}));

export default function LoginPage(props) {
  const classes = useStyles();
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userAlert, setUserAlert] = React.useState(false);
  const [passwordAlert, setPasswordAlert] = React.useState(false);

  function validateFields() {
    if (userName === '') {
      setUserAlert(true);
      return false;
    }
    if (password === '') {
      setPasswordAlert(true);
      return false;
    }
    return true;
  }

  const handleChange = (event, type) => {
    switch (type) {
      case 'userName':
        setUserName(event.target.value);
        setUserAlert(false);
        break;
      case 'password':
        setPassword(event.target.value);
        setPasswordAlert(false);
        break;
      default:
    }
  };

  const handleLogin = () => {
    if (validateFields()) {
      props.history.push("/dashboard/home");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} className={classes.container}>
        <Paper elevation={5} variant="outlined" className={classes.paper}>
          <Grid container spacing={3} className={classes.content}>
            <Grid item xs={12}>
              <Typography variant="h4" className={classes.title}>
                Sign In
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                error={userAlert}
                required
                id="userName"
                label="Username"
                name="userName"
                autoComplete="userName"
                onChange={e => handleChange(e, 'userName')}
                autoFocus
                className={classes.inputField}
              />
              {userAlert && (
                <p className={classes.error}>{'Username is required'}</p>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                error={passwordAlert}
                required
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => handleChange(e, 'password')}
                className={classes.inputField}
              />
              {passwordAlert && (
                <p className={classes.error}>{'Password is required'}</p>
              )}
            </Grid>
            </Grid>
            <Grid container spacing={3} className={classes.buttonSection}>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleLogin}
                >
                  Submit
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  className={classes.passwordButton}
                >
                  Forgot Password?
                </Button>
              </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
};
