import React, { useState } from "react";
import { Button } from "@mui/material";
import SurpriseGif from '../../assets/gifs/surprise.gif'
import { makeStyles } from '@material-ui/core/styles';
import { borderRadius } from "@mui/system";

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexFlow: 'column',
        height: '350px',
        width: '400px',
        margin: 'auto',        
        '@media(max-width: 500px)': {
            width: '90%',
            height: '300px'
        }
    },
    gifs: {
        border: '1px solid #d1cccc',
        marginTop: '20px',
        width: '100%',
        height: '270px'
    },
    event: {
        margin: '15px auto',
        padding: '15px 10px',
        border: '1px solid #c3c0c0',
        width: '80%',
        fontWeight: 'bold',
        borderRadius: '5px',
        backgroundColor: '#b2dcf5'
    }
})

const PendingEvents = ({events, viewHandler}) => {

    const classes = useStyles()
    const [selected, setSelected] = useState(-1)

    const handleClick = () => {        
        const newSelected = selected + 1
        const item = events[newSelected]
        viewHandler(item.id, item.title, item.date)
        setSelected(newSelected)
    }   

    return  (
        <>
            {
                events.length > 0 && selected < 0 ? (
                    <div className={classes.container}>
                        <h6>{`Hay ${events.length} novedades nuevas`}</h6>
                        <img className={classes.gifs} src={SurpriseGif}></img>
                        <Button 
                            size={'small'} 
                            color='warning' 
                            variant="contained" 
                            onClick={handleClick}
                        >
                            Abrir
                        </Button>
                    </div>
                ) : null
            }
            {
                selected >= 0 ? (
                    <div className={classes.event}>
                        <p>{events[selected].title}</p>
                        <p>{events[selected].date}</p>
                        <Button 
                            size={'small'} 
                            color='warning' 
                            variant="contained" 
                            onClick={handleClick}
                            hidden={selected === events.length - 1}
                        >
                            Siguiente
                        </Button>
                    </div>
                ) : null
            }
        </>
        
    )
}

export default PendingEvents;