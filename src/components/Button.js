import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    button: { width: '80px', height: '30px', border: 'none', borderRadius: '5px', marginBottom: '20px', marginLeft: '5px', marginRight: '5px'},
    active: { backgroundColor: '#3d855a', borderRadius: '8%', color: 'white' }
})

const Button = ({text, disabled, hidden, clickHandler}) => {
    
    const classes = useStyles()
    
    return (
        <button 
            className={`${classes.button} ${disabled? null : classes.active}`} 
            hidden={hidden} 
            disabled={disabled}
            onClick={clickHandler}
        >
            {text}
        </button>
    )
}

export default Button