import React from "react";
import Carta from './Carta';
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

const cartas = [
    {
        lineas: [
            'Te quiero dar las gracias.', 
            'Gracias por existir, por hacerme mejor persona, por lo feliz que me haces, por ser la mas hermosa y divertida del mundo, por alegrarme los días, por cada abrazo y beso que me das, por cada sonrisa después de que te beso en la mejilla, por cada mimo, por cada vez que me das la mano, por soportar mis ronquidos, por como amas y cuidas a kiri y, por sobre todas las cosas, por otorgarme el privilegio entre los 7 mil millones de habitantes del planeta de disfrutar el tiempo junto a vos.', 
            'Te amo.'
        ]
    }   
]

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
            <h5 className={classes.cartas}>CARTAS</h5>
            <Carta texto={cartas[0].lineas}/>
        </>
    )
}

export default MainPage;