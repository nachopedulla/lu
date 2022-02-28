import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import Title from '../../components/Title'
import CatalogoItem from './CatalogoItem'

const items = [
    {name: 'Anillo', puntos: 65},
    {name: 'Medias', puntos: 105},
    {name: 'Corpiño deportivo', puntos: 275},
    {name: 'Buzo camuflado', puntos: 310},
    {name: 'Batidora café', puntos: 130},
    {name: 'Taza micky mouse', puntos: 210},
    {name: 'Short algodón', puntos: 250},
    {name: 'Chanclas', puntos: 500},
    {name: 'Conjunto lenceria', puntos: 400},
    {name: 'Termo', puntos: 275},
    {name: 'Ron', puntos: 450},
    {name: 'Portaretrato', puntos: 185},
    {name: 'Perfume', puntos: 350},
    {name: 'Remera anima', puntos: 250},
    {name: 'Bolso entrenamiento', puntos: 1310},
    {name: 'Libro Alex Kohan', puntos: 235}
]

const Catalogo = ({puntos, changeItemHandler}) => {

    const [showConfirmation, setShowConfirmation] = useState(false)
    const [selectedItem, setSelectedItem] = useState()
    
    const catalogoStyle = {
        display: 'flex', 
        flexFlow: 'wrap', 
        justifyContent: 'center',
        width: '90%',
        margin: 'auto'
    }

    const validateHandler = (name, puntos) => {
        setSelectedItem({name: name, puntos: puntos})
        setShowConfirmation(true)
    }
    
    const confirm = () => {
        changeItemHandler(selectedItem)
        setShowConfirmation(false)
    }

    return (
        <>
            <Title text={'Catálogo de premios'}/>
            {showConfirmation && (
                <>
                <Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmar cambio de puntos</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Item: {selectedItem.name}</p>
                        <p>Puntos: {selectedItem.puntos}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setShowConfirmation(false)} variant="secondary">Cancelar</Button>
                        <Button onClick={confirm} variant="primary">Confirmar</Button>
                    </Modal.Footer>
                </Modal>
            </>
            )}
            <div style={catalogoStyle}>
                {items.map(item => (
                    <CatalogoItem key={item.name} 
                        name={item.name} 
                        puntos={item.puntos} 
                        disabled={item.puntos > puntos}
                        validateHandler={validateHandler}
                    />
                ))}
            </div>
        </>
    )
}

export default Catalogo;