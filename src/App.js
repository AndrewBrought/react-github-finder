import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';

import GithubState from "./context/github/GithubState";

import './App.css';

const App = () => {
    // NEW
    const [alert, setAlert] = useState(null);

    //OLD
    // state = {
    //     users: [],
    //     user: {},
    //     repos: [],
    //     loading: false,
    //     alert: null,
    // }



    //OLD
    // async componentDidMount() {
    //     this.setState({ loading: true })
    //
    //     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    //
    //     this.setState({ users: res.data, loading: false });
    // }

    // NEW - Search Github users


    //Get single Github user


    //Get users repos



    // Clear users from state

    // Set Alert
    const showAlert = (msg, type) => {
        // OLD
        // this.setState({ alert: { msg, type } });
        // NEW
        setAlert({ msg, type });
        setTimeout(() => setAlert( null), 8000);
    };

      return (
          <GithubState>
          <Router>
          <div className='App'>
           <Navbar />
           <div className='container'>
               <Alert alert={alert} />
               <Switch>
                   <Route
                   exact
                   path='/'
                   render={props => (
                   <Fragment>
                       <Search
                            setAlert={showAlert}
                   />
                    <Users />
                   </Fragment>
               )}
               />
               <Route exact path='/about' component={About} />
               <Route exact path='/user/:login' component={User}

               />
               </Switch>
           </div>
          </div>
        </Router>
      </GithubState>
      );
}

export default App;
