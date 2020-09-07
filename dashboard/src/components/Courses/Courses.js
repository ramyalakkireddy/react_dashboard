import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  Grid,
  CircularProgress
} from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { getCourses } from '../../actions';

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
  }
}));

const columns = [
  { id: 'name', label: 'Course Name' },
  { id: 'price', label: 'Price' },
  { id: 'category', label: 'Category' },
  { id: 'noOfStudentsEnrolled', label: 'No Of Students Enrolled' }
];

const Courses = props => {
  const classes = useStyles();
  const { courses, loading } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('');

  useEffect(() => {
    const newProp = props.getCourses;
    newProp();
  }, [props.getCourses]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
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
      <Grid item xs={12}>
      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer className={classes.tableContainer}>
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
                {courses.length > 0 && stableSort(courses, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((course) => {
                      return (
                        <TableRow hover key={course.id}>
                          <TableCell>{course.name}</TableCell>
                          <TableCell>{course.price}</TableCell>
                          <TableCell>{course.category}</TableCell>
                          <TableCell>{course.noOfStudentsEnrolled}</TableCell>
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
          count={courses.length}
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
  courses: state.courses,
  loading: state.loading,
  error: state.error
});

const mapDispatchToProps = {
  getCourses
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
