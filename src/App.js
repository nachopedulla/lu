import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import MainPage from './components/MainPage';
import Songs from './components/Songs';
import Pics from './components/Pics';
import { AuthProvider } from './context/AuthContext';
import { HashRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import CountdownWrapper from './components/CountdownWrapper';

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

  const classes=useStyles();

  return (
    <div className="App">
      <AuthProvider>
        <div className={classes.content}> 
          <Router basename={'/'}>
            <NavBar/>
            <Switch>
              <PrivateRoute exact path="/" component={MainPage}/>
              <PrivateRoute exact path="/fotos" component={Pics}/>
              <PrivateRoute exact path="/canciones" component={Songs}/> 
              <PrivateRoute exact path="/contador" component={CountdownWrapper}/>
            </Switch>
          </Router>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
