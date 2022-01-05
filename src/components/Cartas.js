import React, { useState } from 'react'
import Carta from './Carta'

const Cartas = () => {

    const [index, setIndex] = useState()

    const cartas = [
        {
            lineas: [
                'Te quiero dar las gracias.', 
                'Gracias por existir, por hacerme mejor persona, por lo feliz que me haces, por ser la mas hermosa y divertida del mundo, por alegrarme los días, por cada abrazo y beso que me das, por cada sonrisa después de que te beso en la mejilla, por cada mimo, por cada vez que me das la mano, por soportar mis ronquidos, por como amas y cuidas a kiri y, por sobre todas las cosas, por otorgarme el privilegio entre los 7 mil millones de habitantes del planeta de disfrutar el tiempo junto a vos.', 
                'Te amo.'
            ], 
        },
        {
            lineas: [
                'Mi querida Lu,',
                'Hoy es el gran dia donde cumpliste un sueño, uno muy buscado, y estas palabras ya no las vas a leer de la misma manera que siempre: hoy lleno de orgullo te puedo llamar licenciada ¡Sos licenciada!.',
                'Tuve el suerte de ser testigo en primera fila de todo el esfuerzo y sacrificio que hiciste para llegar a este momento. Se terminaron las noches eternas de estudio, los despertares en la madrugada cuando todavia no salió el sol. Hoy todo eso se concreta en este más que merecido título y cada minuto dedicado tiene su recompenza.',
                'Ahora toca festejar y disfrutar de esto que lograste. Espero que sea lo que siempre soñaste y más, que tu felicidad no tenga límites porque tu felicidad es la mía.',
                'Con orgullo y bien fuerte te digo: ¡Felicitaciones Licenciada Caridad!',
                'Te amo'
            ]
        },
    ]

    return (
        <>
            <h4>Cartas</h4>
            <div style={{justifyContent: 'space-between', margin: 'auto', width: '55px', display: 'flex'}}>
                <label>N°</label>
                <select onChange={(event) => setIndex(event.target.value)} >
                    <option value=""></option>
                    <option value="0">1</option>
                    <option value="1">2</option>
                </select>            
            </div>
            {index? <Carta texto={cartas[index].lineas}/> : null}
        </>
    )

}

export default Cartas;