import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Countdown from './components/Countdown';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginForm from './components/Login';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import Songs from './components/Songs';
import Pics from './components/Pics';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute';

const useStyles = makeStyles({
  content: {
    margin: 'auto',
    marginTop: '80px',
    fontSize: '.9rem',
    overflow: 'auto',
    '@media(max-width: 500px)': {
      marginTop: '120px'
    }
  }
})

const App = () => {

  const [currentDate, setCurrentDate] = useState(new Date());
  const classes=useStyles();

  useEffect(() => { setTimeout(() => setCurrentDate(new Date()), 1000) }, )

  return (
    <div className="App">
      <AuthProvider>
        <div className={classes.content}> 
        <NavBar logged/>
          <Router>
            <Switch>
              <PrivateRoute path="/home" component={MainPage}/>
              <PrivateRoute path="/fotos" component={Pics}/>
              <PrivateRoute path="/canciones" component={Songs}/> 
              <PrivateRoute path="/contador" component={Countdown} params={{startDate: new Date(2021, 7, 7, 20, 0, 0), endDate: currentDate}}/>
              <Route path="/lu" exact> <Redirect to="/home"/> </Route>
              <Route path="/login" component> <LoginForm/> </Route>
            </Switch>
          </Router>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
