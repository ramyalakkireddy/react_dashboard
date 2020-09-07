import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography, CircularProgress, TextField, Container } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  alert: {
    marginTop: '20px',
    width: '100%',
    justifyContent: 'center'
  }
}));

export default function RegisterPage(props) {
  const classes = useStyles();
  const { message, loading, error } = props;
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = (event, type) => {
    switch (type) {
      case 'userName':
        setUserName(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {loading ? (
        <CircularProgress />
      ) : (
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            New Student Registration
          </Typography>
          {message && <Alert className={classes.alert} severity="success">{message}</Alert>}
          {error && <Alert className={classes.alert} severity="error">{error}</Alert>}
          <form className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  defaultValue={userName}
                  id="userName"
                  label="Username"
                  name="userName"
                  autoComplete="userName"
                  onChange={e => handleChange(e, 'userName')}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  defaultValue={password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={e => handleChange(e, 'password')}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Register
            </Button>
          </form>
        </div>
      )}
    </Container>
  );
};
