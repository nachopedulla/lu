import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Cafe from '../assets/Star.png';

const useStyles = makeStyles({
    dataCell: { border: '1px solid black', padding: '0px 2px', height: '40px' },
    headerCell: {border: '1px solid black', padding: '5px'},
    headerRow: {color: 'white', background: '#00a170'},
    cafe: {width: '15px'}

})

const PlaceTable = ({places, updateHandler}) => {

    const classes = useStyles()

    const openInstagram = (profile) => window.open(`https://www.instagram.com/${profile}`, "_blank") 

    const icon = (calification) => {
        return [...Array(parseInt(calification))].map( (val) => <img className={classes.cafe} key={val} src={Cafe} alt='cafe'/>)
    }

    const qualify = (id, calification) => {
        if (id && calification > 0 && calification < 6) {
            updateHandler(id, calification)
        }
    }

    return (
        places.length > 0 ? (
            <table style={{margin: 'auto', maxWidth: '90%'}}>
                <thead>
                    <tr key='header' className={classes.headerRow}>
                        <th key='name' className={classes.headerCell} style={{width: '42%'}}>Nombre</th>
                        {<th key='ig'className={classes.headerCell} style={{width: '10%'}}>IG</th> }
                        {<th key='loc' className={classes.headerCell} style={{width: '23%'}}>Lugar</th> }
                        {<th key='cal' className={classes.headerCell} style={{width: '30%'}}>Puntaje</th> }
                    </tr>
                </thead>
                <tbody>
                    {places.map((option, index) => (
                        <tr>
                            <td key={index + 'A'} className={classes.dataCell}>{option.name}</td>
                            {<td key={index + 'B'} className={classes.dataCell} style={{color: 'blue', textDecoration: 'underline'}} onClick={() => openInstagram(option.ig)}>Ir</td> }
                            {<td key={index + 'C'} className={classes.dataCell}>{option.location}</td>}
                            {
                                <td key={index + 'D'} className={classes.dataCell}>
                                {parseInt(option.calification) === 0? 
                                    <input 
                                        style={{width: '50%', border: '1px solid grey'}} 
                                        type='number' 
                                        onChange={({target}) => qualify(option.id, target.value)}
                                    /> : 
                                    icon(option.calification)}</td>
                                }
                        </tr>
                    ))}
                </tbody>
            </table>
        ) : null
    )
}

export default PlaceTable