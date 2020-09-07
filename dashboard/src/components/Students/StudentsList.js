import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';
import { Table, Grid, Typography, CircularProgress, Button } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { getRegisteredStudents } from '../../actions';
import StudentDetails from './StudentDetails';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  container: {
    minHeight: 'auto'
  },
  table: {
    minWidth: 650,
    overflow: 'hidden'
  },
  tableRow: {
    color: '#ffffff !important',
    fontSize:  theme.typography.pxToRem(16)
  },
  header: {
    background: 'linear-gradient(60deg, #ab47bc, #8e24aa)'
  },
  nameContainer: {
    display: 'inline-flex'
  },
  name: {
    margin: 'auto'
  },
  linkButton: {
    textTransform: 'capitalize',
    textDecoration: 'underline',
    fontWeight: 600
  }
}));

const columns = [
  { id: 'name', label: 'First Name' },
  { id: 'lastName', label: 'Last Name' },
  { id: 'phoneNumber', label: 'Phone Number' },
  { id: 'courses', label: 'No of Courses Enrolled' },
  { id: 'created', label: 'Enrolled Date' }
];

const StudentsList = (props) => {
  const { studentsList, loading } = props;
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [selectedStudent, setSelectedUser] = React.useState({});


  useEffect(() => {
    const newProp = props.getRegisteredStudents;
    newProp();
  }, [props.getRegisteredStudents]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const createSortHandler = property => event => {
    handleRequestSort(event, property);
  };

  const handleClickOpen = student => event => {
    event.preventDefault();
    setOpen(true);
    setSelectedUser(student);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  return (
    <Grid container direction="row">
      {open && <StudentDetails open={open} onClose={handleClose} selectedStudent={selectedStudent} />}
      <Grid item xs={12}>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer className={classes.container}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.header}>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    className={classes.tableRow}
                    key={column.id}
                    align="left"
                    sortDirection={orderBy === column.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={createSortHandler(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {studentsList.length > 0 && stableSort(studentsList, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((student, index) => {
                  return (
                    <TableRow hover key={index}>
                      <TableCell>
                        <Button className={classes.linkButton} color="primary" onClick={handleClickOpen(student)}>
                        {student.name}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <div className={classes.nameContainer}>
                          <Typography
                            variant="body1"
                            className={classes.name}
                          >
                            {student.lastName}
                          </Typography>
                        </div>
                      </TableCell>
                      <TableCell>{student.phoneNumber}</TableCell>
                      <TableCell>{student.courses}</TableCell>
                      <TableCell>{moment(student.created).format('DD/MM/YYYY')}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        )}
        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={studentsList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = state => ({
  studentsList: state.studentsList,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = {
  getRegisteredStudents
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
