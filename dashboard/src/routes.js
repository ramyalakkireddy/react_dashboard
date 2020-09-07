import LibraryBooks from '@material-ui/icons/LibraryBooks';
import Group from '@material-ui/icons/Group';
import Home from '@material-ui/icons/Home';
import AccountBox from '@material-ui/icons/AccountBox';
import HomePage from './components/Home';
import GroupPage from './components/Courses/Courses';
import StudentsPage from './components/Students/StudentsList';
import RegisterPage from './components/RegisterPage';

const Routes = [
  {
    path: '/home',
    name: 'Home',
    icon: Home,
    component: HomePage,
    layout: '/dashboard'
  },
  {
    path: '/students',
    name: 'Students',
    icon: Group,
    component: StudentsPage,
    layout: '/dashboard'
  },
  {
    path: '/courses',
    name: 'Courses',
    icon: LibraryBooks,
    component: GroupPage,
    layout: '/dashboard'
  },
  {
    path: '/register',
    name: 'Registration',
    icon: AccountBox,
    component: RegisterPage,
    layout: '/dashboard'
  }
];

export default Routes;
