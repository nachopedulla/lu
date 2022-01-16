import { makeStyles } from '@material-ui/core'
import { React, useState } from 'react'
import Button from './Button'

const useStyles = makeStyles({
    back: {
        position: 'fixed',
        top: '130px',
        left: '0px',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    container: {  
        padding: '15px',
        height: '500px',
        border: '1px solid #c1c0c0',
        backgroundColor: 'white',
        width: '90%',
        margin: '50px auto 30px auto'
    },
    buttons: {
        display: 'flex',
        margin: '15px auto',
        justifyContent: 'center',
        columnGap: '10px'
    }
    
})

const NewPlace = ({show, cancel, confirm}) => {

    const [place, setPlace] = useState({name: '', category: '', location: '', ig: '', calification: ''})

    const classes = useStyles()

    const changeHandler = (key, value) => {
        let aux = {...place}
        aux[key] = value
        setPlace(aux)
    }

    return (
        show ? (
            <div className={classes.back}>
                <div className={classes.container}>
                    <p>Categoria</p> 
                    <select onChange={(event) => changeHandler('category', event.target.value)}>
                        <option value=""></option>
                        <option value="bares">Bares</option>
                        <option value="restaurant">Restaurantes</option>
                        <option value="cafe">Merienda</option>
                    </select>     
                    <p>Nombre</p> <input value={place.name} onChange={(event) => changeHandler('name', event.target.value)}/>
                    <p>Instagram</p> <input value={place.ig} onChange={(event) => changeHandler('ig', event.target.value)}/>
                    <p>Ubicación</p> <input value={place.location} onChange={(event) => changeHandler('location', event.target.value)}/>
                    <p>Puntaje</p> <input type='number' value={place.calification} onChange={(event) => changeHandler('calification', event.target.value)}/>
                    <div className={classes.buttons}>
                        <Button clickHandler={() => confirm(place)} text='Confirmar'/>
                        <Button clickHandler={cancel} text='Cancelar'/>
                    </div>
                </div>
            </div>
        ) : null
    )
}

export default NewPlace