import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './components/NavBar';
import MainPage from './modules/MainPage';
import Songs from './modules/Songs';
import Pics from './modules/Pics';
import Cartas from './modules/Cartas';
import Selector from './modules/Selector'
import Events from './modules/events/Events'
import { AuthProvider } from './context/AuthContext';
import { HashRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import CountdownWrapper from './modules/CountdownWrapper';
import { FirebaseProvider } from './context/FirebaseContext';

const useStyles = makeStyles({
  content: {
    margin: 'auto',
    marginTop: '80px',
    fontSize: '.9rem',
    overflow: 'auto',
    '@media(max-width: 500px)': {
      marginTop: '160px'
    }
  }
})

const App = () => {

  const classes=useStyles();

  return (
    <div className="App">
      <AuthProvider>
        <FirebaseProvider>
          <div className={classes.content}> 
            <Router basename={'/'}>
              <NavBar/>
              <Switch>
                <PrivateRoute exact path="/" component={MainPage}/>
                <PrivateRoute exact path="/fotos" component={Pics}/>
                <PrivateRoute exact path="/canciones" component={Songs}/> 
                <PrivateRoute exact path="/contador" component={CountdownWrapper}/>
                <PrivateRoute exact path="/cartas" component={Cartas}/>
                <PrivateRoute exact path="/eventos" component={Events}/>
                <PrivateRoute exact path="/selector" component={Selector}/>
              </Switch>
            </Router>
          </div>
        </FirebaseProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
