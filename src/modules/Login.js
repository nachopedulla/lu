import { React } from "react";
import Form from 'react-bootstrap/Form';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
  }
});

const LoginForm = () => {

    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const classes=useStyles();
    const auth = useAuth();

    const passwordChangeHandler = (value) => setPassword(value); 
    
    const loginHandler = (event) => {
        event.preventDefault();
        event.stopPropagation();

        if(!auth.login(password)) {
          setPassword("");
          setError(true);  
        }
    } 

    return (
        <>
          <h5 style={{margin: '40px auto 15px auto'}}>Página de lu</h5>
          <div className={classes.form}>
          <Form onSubmit={loginHandler}>
          <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(event) => passwordChangeHandler(event.target.value)}/>
              {error? <p className={classes.errorLabel}>La contraseña ingresada es inválida</p> : null }
              <input className={classes.button} type="submit" onClick={() => {}} value={'Ingresar'}/>
          </Form>
      </div>
    </>
  );
}

export default LoginForm;