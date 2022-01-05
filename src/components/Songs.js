import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    container: {
        margin: 'auto',
    },
    box: {
        margin: '20px auto',
        border: '1px solid #e1dbdb',
        width: '350px',
        padding: '20px',
        '@media(max-width: 500px)': {
            width: '300px'
        }
    }
})

const LINK_1 = 'https://open.spotify.com/playlist/3hZQ81VgChbMfSKBDOwdQI?si=75fdeda61d034a39';
const LINK_2 = 'https://open.spotify.com/playlist/1fwLSPHjZl3kkeYLRCys3f?si=O3NxQsq1Rl6w1cmAAOYgeQ'

const Songs = () => {
    
    const openWebLink = (link) => {
        window.open(link, "_blank")
    }

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h4>Playlist de canciones lindas</h4>
            <div style={{height: '15px'}}/>
            <div className={classes.box}>
                <h6>Canciones para Lu</h6>
                <Button style={{marginRight: '5px'}} size={'small'} variant="contained" onClick={() => openWebLink(LINK_1)}>1</Button>
                <Button style={{marginLeft: '5px'}} size={'small'} variant="contained" onClick={() => openWebLink(LINK_2)}>2</Button>
            </div>
            
        </div>
    )
}

export default Songs;