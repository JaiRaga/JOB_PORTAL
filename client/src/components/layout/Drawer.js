import React, { Fragment, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  Tooltip,
  Zoom,
  TextField
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fade, makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DehazeIcon from "@material-ui/icons/Dehaze";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  list: {
    width: "auto",
    padding: 0
  },
  display: {
    [theme.breakpoints.down("md")]: {
      display: "flex"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  grid: {
    paddingTop: 7,
    paddingBottom: 3,
    paddingLeft: 10,
    fontStyle: "italic",
    fontWeight: 500
  },
  link: {
    textDecoration: "none",
    color: "#1976d2"
  },
  right: {
    padding: 0
  },
  // btnLink: {
  //   textDecoration: "none"
  // },
  icons: {
    color: "#1976d2",
    minWidth: "35px",
    paddingRight: 20
  },
  hamburger: {
    color: "white"
  },
  trending: {
    color: "white",
    marginLeft: "auto"
  },
  title: {
    fontWeight: "800",
    padding: "5px 16px"
  },
  autocomplete: {
    marginLeft: 10,
    color: "#fff"
  }
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const history = useHistory();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      {/* {isAuthenticated ? authLinks : guestLinks} */}
    </div>
  );

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

  const anchor = "bottom";

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.display}>
        <Toolbar>
          <IconButton
            className={classes.hamburger}
            onClick={toggleDrawer(anchor, true)}>
            <DehazeIcon />
          </IconButton>
          {/* <Typography className={classes.grid} variant='h6'>
            Pom
          </Typography> */}
          <Autocomplete
            id='search-box'
            options={top100Films}
            className={classes.autocomplete}
            // size="small"
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label='Search Pom' variant='filled' />
            )}
          />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
