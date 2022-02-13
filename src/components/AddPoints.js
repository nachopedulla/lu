import React from "react";
import Button from "./Button";

const AddPoints = ({selected, updateHandler, cancelHandler}) => (

    <div style={{width: '310px', margin: '15px auto', border: '1px solid #9b9898', paddingTop: '10px'}}>
        <h6>Resumen</h6>
        <ul style={{listStyle: 'none', margin: '5px auto', padding: '3px'}}>
            {selected.map(({id, puntos}) => <li>{`${id} por ${puntos} puntos`}</li>)}
        </ul>
        <p><b>Total</b>: {selected.reduce(function(anterior, nuevo) { return anterior + nuevo.puntos}, 0)} puntos</p>            
        <Button key='save' disabled={selected.length === 0} clickHandler={updateHandler} text='Guardar'/> 
        <Button key='cancel' disabled={selected.length === 0} clickHandler={cancelHandler} text='Cancelar'/> 
    </div>
)

export default AddPoints;