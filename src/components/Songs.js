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

const LINK = "https://open.spotify.com/playlist/3hZQ81VgChbMfSKBDOwdQI?si=75fdeda61d034a39";

const Songs = () => {
    
    const openWebLink = () => {
        window.open(LINK, "_blank")
    }

    const copiarLink = () => {
        navigator.clipboard.writeText(LINK)
    }

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h4>Playlist de canciones lindas</h4>
            <div style={{height: '15px'}}/>
            <div className={classes.box}>
                <h6>Acceder a spotify</h6>
                <Button size={'small'} variant="contained" onClick={openWebLink}>IR</Button>
            </div>
            <div className={classes.box}>
                <h6>Copiar el link</h6>
                <Button size={'small'} variant="contained" onClick={copiarLink}>COPIAR</Button>
            </div>
        </div>
    )
}

export default Songs;