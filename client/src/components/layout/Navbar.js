import React, { Fragment } from "react";
import {
  fade,
  makeStyles,
  TextField,
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Typography,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import AdjustIcon from "@material-ui/icons/Adjust";
import SearchIcon from "@material-ui/icons/Search";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/actions/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  navbar: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    },
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  list: {
    display: "flex"
  },
  appName: {
    fontStyle: "italic",
    fontWeight: 500
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  icons: {
    color: "white",
    minWidth: "35px"
  },
  right: {
    display: "flex",
    marginLeft: "auto"
  },
  textFieldColor: {
    color: "#fff"
  }
}));

const top100Films = [
  { title: "Sarvamum Krishana Arpanam", year: 5464 },
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 }
];

const Navbar = (props) => {
  const classes = useStyles();
  // const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const links = (
    <Fragment>
      <List className={classes.list}>
        <Link to='/' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <ChangeHistoryIcon />
            </ListItemIcon>
            <ListItemText primary='Pom' />
          </ListItem>
        </Link>
      </List>
      <List className={classes.right}>
        <Autocomplete
          id='search-box'
          options={top100Films}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label='Search Pom' variant='filled' />
          )}
        />
      </List>
      <List className={classes.right}>
        <Link to='/home' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>

        <Link to='/shortlisted' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonPinIcon />
            </ListItemIcon>
            <ListItemText primary='Shortlisted' />
          </ListItem>
        </Link>

        <Link to='/rejected' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <AdjustIcon />
            </ListItemIcon>
            <ListItemText primary='rejected' />
          </ListItem>
        </Link>

      </List>
    </Fragment>
  );

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        // color='transparent'
        className={classes.navbar}>
        <Toolbar>
          {links}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
