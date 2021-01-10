import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// Components
import Home from "./components/home/Home"
import Candidates from "./components/candidate/Candidates"
import CandidateItem from "./components/candidate/CandidateItem"
import CandidateProfile from "./components/candidate/CandidateProfile"
import ShortListed from "./components/candidate/ShortListed";
import Rejected from "./components/candidate/Rejected";
import Navbar from "./components/layout/Navbar"
import Drawer from "./components/layout/Drawer"

// Redux
import store from "./redux/store";
import { getAllCandidates, getShortlistedCandidate, getRejectedCandidate } from "./redux/actions/candidate";



function App() {
  useEffect(() => {
    store.dispatch(getAllCandidates());
    store.dispatch(getShortlistedCandidate());
    store.dispatch(getRejectedCandidate());
  }, []);

  // console.log(moment(moment() + 36e5 * 5).twitter());

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Drawer />

          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/candidate/:id' component={CandidateProfile} />
            <Route exact path='/shortlisted' component={ShortListed} />
            <Route exact path='/rejected' component={Rejected} />


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
