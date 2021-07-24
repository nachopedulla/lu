import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  content: {
    width: '80%',
    margin: 'auto',
    marginTop: '60px',
    fontSize: '.9rem',
  },
  form: {
    padding: '30px 20px',
    border: '1px solid #d0cbcb',
    borderRadius: '10px',
    width: '350px',
    margin: 'auto',

    '@media(max-width: 600px)': {
      width: '90%'
    }
  },
  button: {
    backgroundColor: '#00A170',
    border: 'none',
    fontSize: '1rem',
    borderRadius: '5px',
    padding: '8px 10px',
    color: 'white'
  },
  errorLabel: {
    marginTop: '20px',
    color: 'red',
  },
  line: {
    height: '2px',
    margin: '30px auto',
    backgroundColor: '#00A170'
  }
})

const compare = String.fromCharCode(109, 111, 110, 111, 110, 97);

const App = () => {

  const [logged, setLogged] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const classes=useStyles();

  const loginHandler = (event) => {
      if (password === compare) {
        setLogged(true);
        setError(false);
      } else {
        setPassword("");
        setError(true);
        event.preventDefault();
        event.stopPropagation();
      }
  } 

  const passwordChangeHandler = (value) => setPassword(value);

  const mainPage = (
    <>
      <div className={classes.line}></div>
      <h4>Lu</h4>
      <p> Esta página es para que siempre y desde cualquier lugar del 🌎 sepas lo mucho que te quiero 💖 </p>
      <div className={classes.line}></div>
    </>
  );

  const errorLabel = <p className={classes.errorLabel}>{(error) ? 'La contraseña ingresada es inválida' : '' }</p> ;

  const loginForm = (
    <div className={classes.form}>
        <Form onSubmit={loginHandler}>
        <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(event) => passwordChangeHandler(event.target.value)}/>
          {errorLabel}
        <input className={classes.button} type="submit" onClick={() => {}} value={'Ingresar'}/>
      </Form>
    </div>
  )

  const content = (
    <div className={classes.content}>
      {(logged) ? mainPage : loginForm}
    </div>
  ); 

  return (
    <div className="App">
      {content}
    </div>
  );
}

export default App;
