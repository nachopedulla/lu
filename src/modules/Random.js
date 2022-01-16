import React, { useState } from 'react'
import Button from '../components/Button'

const Random = ({places}) => {

    const [random, setRandom] = useState()
    
    const handleRandom = () => setRandom(places[getRandomResult()]['name'])

    const getRandomResult = () => {
        const min = 0
        const max = places.length - 1    
        return Math.round(min + Math.random() * (max - min))
    }
 
    const disabled = places.length === 0

    return (
        <div style= {{marginBottom: '20px'}}>
            <div style={{display: 'flex', justifyContent: 'center', columnGap: '10px', alignItems: 'flex-start'}}>
                <p>No tengo ganas de pensar</p>
                <Button clickHandler={handleRandom} text='Sortear!' disabled={disabled}/>
            </div>
            {places.some(({name}) => name === random) ? <p><b>Resultado sortero</b>: {random}</p> : null}
        </div>
    )
}
export default Random;