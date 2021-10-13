import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    pic: {
        width: '320px',
        height: '400px',
        margin: '30px auto 5px auto',
        padding: '0px 10px',
    }
})

const Pic = (props) => {
    const classes = useStyles();

    return (
        <div style={{display: 'block', margin: 'auto'}}> 
            <img className={classes.pic} src={props.img} alt={'No se pudo cargar'} />
            <h6>{props.title}</h6>
        </div>
    )
}

export default Pic;