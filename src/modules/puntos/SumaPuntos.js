import React, { useEffect, useState } from 'react'
import { useFirebase } from '../../context/FirebaseContext'
import Acciones from './Actions'
import AddPoints from './AddPoints'
import PuntosActuales from './Puntos'
import Catalogo from './Catalogo'
import swal from 'sweetalert';
import Title from '../../components/Title'

const SumaPuntos = () => {

    const [currentPoints, setPoints] = useState(0)
    const [selected, setSelected] = useState([])

    let firebase = useFirebase()

    useEffect(() => {
        async function getPoints () { 
            const points = await firebase.getPoints()
            setPoints(points[0].points) 
        }
        getPoints()
    }, [])

    const clickHandler = (id, puntos) => {
        let selectedAux = [...selected];
        selectedAux.push({id: id, puntos: puntos})
        setSelected(selectedAux);
    }

    const updateHandler = () => {
        const sum = selected.reduce(function(anterior, nuevo) { return anterior + nuevo.puntos}, 0);
        sendMessage(sum)
        updatePoints(sum)
        setSelected([])
    }

    const changeItemHandler = (item) => {
        swal(`Tus puntos se cambiaron correctamente`)
        updatePoints(item.puntos * -1)
    }

    const updatePoints = (points) => {
        const newPoints = currentPoints + points
        firebase.updatePoints({points: newPoints})
        setPoints(newPoints)
    }

    const sendMessage = (sum) =>  {
        let message = (sum > 0) ? 
            'Ah buenooo, pero que bien viene mi novia. ¡Feliciaciones! A seguir así con todo que las recompenzas llegan pronto.'
          : 'Vamos monona que vos podes. Mañana a meterle con todo y a no aflojar.'        
        swal('Suma puntos', message)
    }

    return (
        <div style={{margin: '20px auto'}}>
            <Title text={'Puntos'}/>
            <p>Suma puntos y cambialos por recompenzas</p>
            <PuntosActuales puntos={currentPoints}/>
            <Acciones selected={selected} clickHandler={clickHandler}/>
            <AddPoints selected={selected} updateHandler={updateHandler} cancelHandler={() => setSelected([])}/>
            <Catalogo puntos={currentPoints} changeItemHandler={changeItemHandler} />
        </div>
    )
}

export default SumaPuntos;