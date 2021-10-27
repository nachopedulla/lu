import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '10px auto',
        padding: '10px',
        border: '1px solid #e1dbdb',
        '@media(max-width: 700px)': {
            width: '90%'
        }
    }
})

const Carta = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.container}> 
            {props.texto.map((linea, index) => <div key={index}> {linea} <br/> </div> )}
        </div>
    )
}

export default React.memo(Carta);