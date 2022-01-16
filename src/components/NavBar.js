import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    container: {
        position: 'fixed',
        left: '0',
        top: '0',
        fontSize: '1rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 25px 0 10px',
        height: '50px',
        '@media(max-width: 500px)': {
            display: 'block',
            padding: '0px',
            margin: '0px',
        }
    },
    navItem: {
        backgroundColor: '#00A170',
        height: '46px',
        width: '90px',
        margin: '0px 1px',
        borderRadius: '0px',
        color: 'white',
        paddingTop: '10px',
        textTransform: 'none',
        font: 'inherit',
        display: 'flex',
        textAlign: 'center',
        boxShadow: 'none',
        justifyContent: 'center',
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#10d99c'
        },
        '@media(max-width: 500px)': {
            width: '25%',
            fontSize: '0.9rem',
            margin: '0px',
            borderRight: '1px solid #3d855a'
        }
    },
    nav: {
        display: 'flex',
        '@media(max-width: 500px)': {
            width: '100%',
            flexFlow: 'wrap',
            margin: 'auto',
            marginTop: '10px',            
        }
    }
})

const NavBar = () => {
    const classes = useStyles();
    const auth = useAuth();

    const navbar = auth.logged() ? (
        <Navbar bg='dark' variant='dark' className={classes.container}>
            <Navbar.Brand>Página para Lu</Navbar.Brand>
            <div className={classes.nav}>
                <Link to="/" className={classes.navItem} style={{color: 'white', textDecoration: 'none'}}>Home</Link>
                <Link to="/contador" className={classes.navItem} style={{color: 'white', textDecoration: 'none'}}>Contador</Link>
                <Link to="/canciones" className={classes.navItem} style={{color: 'white', textDecoration: 'none'}}>Canciones</Link>
                <Link to="/fotos" className={classes.navItem} style={{color: 'white', textDecoration: 'none'}}>Fotos</Link>
                <Link to="/cartas" className={classes.navItem} style={{color: 'white', textDecoration: 'none'}}>Cartas</Link>
                <Link to="/selector" className={classes.navItem} style={{color: 'white', textDecoration: 'none'}}>Para hacer</Link>
                <div className={classes.navItem}></div>
                <div onClick={() => auth.logout()} className={classes.navItem}> Salir </div>
            </div>
        </Navbar>
    ) : null;

    return navbar
}

export default NavBar;