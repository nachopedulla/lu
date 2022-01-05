import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    line: {
      height: '2px',
      margin: 'auto',
      backgroundColor: '#00A170',
    },
    text: {
        padding: '15px'
    },
    cartas: {
        color: '#00A170',
        fontWeight: 'bold',
        fontSize: '1rem',
        marginTop: '20px',
        marginBottom: '20px'
    }
});

const MainPage = () => {
    const classes=useStyles();

    return (
        <>
            <div className={classes.line}></div>
            <div className={classes.text}>
                <h4>Lu</h4>
                <p> Esta página es para que siempre y desde cualquier lugar del 🌎 sepas lo mucho que te quiero 💖 </p>
            </div>
            <div className={classes.line}></div>
        </>
    )
}

export default MainPage;