import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';

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
            height: '76px'
        }
    },
    navItem: {
        backgroundColor: '#00A170',
        height: '46px',
        width: '90px',
        margin: '0px 1px',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#10d99c'
        },
        '@media(max-width: 500px)': {
            display: 'block',
            width: '25%',
            margin: '0px',
            borderRight: '1px solid #3d855a'
        }
    },
    nav: {
        '@media(max-width: 500px)': {
            width: '100%',
            marginTop: '10px'   
        }
    }
})

const NavBar = () => {
    const classes = useStyles();
    const auth = useAuth();

    const navbar = auth.logged() ? (
        <Navbar bg='dark' variant='dark' className={classes.container}>
            <Navbar.Brand href="/home">Página para Lu</Navbar.Brand>
            <div className={classes.nav}>
                <Nav>
                    <Nav.Link href="/home" className={classes.navItem} style={{color: 'white'}}>Home</Nav.Link>
                    <Nav.Link href="/contador" className={classes.navItem} style={{color: 'white'}}>Contador</Nav.Link>
                    <Nav.Link href="/canciones" className={classes.navItem} style={{color: 'white'}}>Canciones</Nav.Link>
                    <Nav.Link href="/fotos" className={classes.navItem} style={{color: 'white'}}>Fotos</Nav.Link>
                </Nav>
            </div>
        </Navbar>
    ) : null;

    return navbar
}

export default NavBar;