import React from "react";

const actions = [
    {id: 'Entrenar', puntosPositivos: 7, puntosNegativos: -7}, 
    {id: 'Desayuno', puntosPositivos: 3, puntosNegativos: -4},
    {id: 'Merienda', puntosPositivos: 3, puntosNegativos: -5},
    {id: 'Almuerzo', puntosPositivos: 6, puntosNegativos: -8},
    {id: 'Cena', puntosPositivos: 5, puntosNegativos: -6},
    {id: 'Permitido', puntosPositivos: 2, puntosNegativos: -4},
]

const Acciones = ({selected, clickHandler}) => (
    <div style={{margin: '5px auto'}}>
        <div style={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center'}}>
            {
                actions.map(action => 
                    <div style={{border: '1px solid #9b9898', margin: '10px 5px', cursor: 'pointer', width: '150px', height: '78px', padding: '10px 0px 0px 0px'}}>
                        <p><b>{action.id}</b></p>
                        <div style={{display: 'flex'}}>
                            <button 
                                disabled={selected.some(({id}) => id === action.id)}
                                style={{width: '50%', border: '1px solid #9b9898', height: '30px', backgroundColor: '#86d370'}}
                                onClick={() => clickHandler(action.id, action.puntosPositivos)}
                            >
                                +{action.puntosPositivos}
                            </button>
                            <button
                                disabled={selected.some(({id}) => id === action.id)}
                                style={{width: '50%', border: '1px solid #9b9898', height: '30px', padding: '0pc', backgroundColor: '#ef9797'}}
                                onClick={() => clickHandler(action.id, action.puntosNegativos)}
                            >
                                {action.puntosNegativos}
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
   
)

export default Acciones;