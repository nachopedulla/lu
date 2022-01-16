
import { React, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from "@mui/material";
import Gif1 from '../assets/gifs/regalo_1.gif'
import Gif2 from '../assets/gifs/regalo_2.gif'
import Gif3 from '../assets/gifs/regalo_3.gif'
import Gif4 from '../assets/gifs/regalo_4.gif'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexFlow: 'column',
        height: '350px',
        width: '300px',
        margin: 'auto',        
        '@media(max-width: 500px)': {
            width: '90%'
        }
    },
    gifs: {
        border: '1px solid #d1cccc',
        marginTop: '20px',
        width: '100%',
        height: '270px'
    }
})

const GIFS = [Gif1, Gif2, Gif3, Gif4]

const Surprise = () => {

    const classes = useStyles()
    const surprise = true
    const [image, setImage] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setImage(image === 3 ? 0 : image + 1)
        }, 2000)
    }, [image])

    return (
        <>
            <h4>Sorpresas</h4>
            <p>Acá puede haber cualquier cosa</p>
            { surprise ? (
                <div className={classes.container}>
                    <h6>Hay 1 sorpresa nueva</h6>
                    <img className={classes.gifs} src={GIFS[image]}></img>
                    <Button size={'small'} variant="contained" onClick={() => alert('asdas')}>Abrir</Button>
                </div>
            ) : 
                <h6>No hay nuevas sorpresas</h6>
            }
        </>
    )
}

export default Surprise;