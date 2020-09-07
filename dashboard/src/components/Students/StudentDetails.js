import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider,
  Typography,
  Grid,
  Button,
  TextField,
  Avatar
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    overflowY: 'auto',
    paddingTop: '0px !important'
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  },
  title: {
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: '10px'
  },
  subContent: {
    marginTop: '20px'
  },
  heading: {
    fontWeight: 600,
    fontSize: '18px',
    padding: '0 0 8px 0'
  },
  gridItem: {
    padding: '0 0 8px 0'
  },
  image: {
    width: '100px',
    height: '110px',
    flexGrow: 0,
    flexShrink: 0
  }
});

export default function StudentDetails(props) {
  const classes = useStyles();
  const { onClose, open, selectedStudent } = props;

  const [editable, setEditable] = React.useState(false);
  const [name, setName] = React.useState(selectedStudent.name);
  const [lastName, setLastName] = React.useState(selectedStudent.lastName);
  const [phoneNumber, setPhoneNumber] = React.useState(
    selectedStudent.phoneNumber
  );
  const [image, setImage] = React.useState(selectedStudent.profileImgUrl);

  const handleClose = () => {
    onClose();
  };

  const handleEdit = () => {
    setEditable(!editable);
  };

  const handleChange = (event, type) => {
    switch (type) {
      case 'name':
        setName(event.target.value);
        break;
      case 'lastName':
        setLastName(event.target.value);
        break;
      case 'phoneNumber':
        setPhoneNumber(event.target.value);
        break;
      case 'image':
        setImage(event.target.value);
        break;
      default:
    }
  };

  const handleUpdate = () => {
    setEditable(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth
      maxWidth={false}
    >
      <DialogContent className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          Student Details
        </Typography>
        <Divider />
        <Grid container direction="row" className={classes.subContent}>
          <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
            <Typography className={classes.heading}>First Name</Typography>
            {!editable ? (
              <span>{name}</span>
            ) : (
              <TextField
                id="name"
                defaultValue={name}
                onChange={e => handleChange(e, 'name')}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
            <Typography className={classes.heading}>Last Name</Typography>
            {!editable ? (
              <span>{lastName}</span>
            ) : (
              <TextField
                id="lastName"
                defaultValue={lastName}
                onChange={e => handleChange(e, 'lastName')}
              />
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
            <Typography className={classes.heading}>Phone Number</Typography>
            {!editable ? (
              <span>{phoneNumber}</span>
            ) : (
              <TextField
                id="phoneNumber"
                defaultValue={phoneNumber}
                onChange={e => handleChange(e, 'phoneNumber')}
              />
            )}
          </Grid>
        </Grid>
        <Grid container direction="row" className={classes.subContent}>
          <Grid item xs={12} sm={6} md={3} lg={3} className={classes.gridItem}>
            <Avatar
              alt="profile picture"
              className={classes.image}
              src={image}
            />
            {editable && (
              <Grid container direction="row" className={classes.subContent}>
                <Grid item xs={6}>
                  <Button color="secondary">Upload Picture</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button color="secondary">Remove Picture</Button>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        {!editable ? (
          <Button onClick={handleEdit} variant="contained" color="primary">
            Edit
          </Button>
        ) : (
          <Button onClick={handleUpdate} variant="contained" color="primary">
            Update
          </Button>
        )}
        {!editable ? (
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        ) : (
          <Button onClick={handleEdit} variant="contained" color="primary">
            Cancel
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}

StudentDetails.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};
