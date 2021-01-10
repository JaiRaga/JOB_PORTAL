import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// Components
import Home from "./components/home/Home"
import Candidates from "./components/candidate/Candidates"
import CandidateItem from "./components/candidate/CandidateItem"

// Redux
import store from "./redux/store";


// utils
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    // store.dispatch(loadUser());
  }, []);

  // console.log(moment(moment() + 36e5 * 5).twitter());

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          {/* <Navbar />
          <Drawer /> */}

          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/candidate/:id' component={CandidateItem} />
            <Route exact path='/shortlisted' component={Candidates} />
            <Route exact path='/rejected' component={Candidates} />


            {/* <Route exact path='/register' component={Register} />
            <Route exact path='/Login' component={Login} />
            <PrivateRoute exact path='/profile' component={ProfileContainer} />
            <PrivateRoute exact path='/profile/:id' component={Profile} />
            <PrivateRoute exact path='/profiles' component={Profiles} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/followers' component={Followers} />
            <PrivateRoute exact path='/following' component={Following} />
            <PrivateRoute exact path='/setting' component={Setting} /> */}
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
