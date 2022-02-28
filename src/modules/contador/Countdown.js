import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

const useStyles = makeStyles({
    container: {
        margin: 'auto',
        display: 'flex',
        justifyContent: 'center',
        '@media(max-width: 600px)': {
            display: 'block',
            margin: '20px auto 50px auto'
        }
    },
    block: {
        width: '120px',
        height: '10%',
        border: '1px solid #dedddd',
        padding: '4px',
        margin: '5px',
        fontSize: '.9rem',
        flexFlow: 'row',
        '@media(max-width: 600px)': {
            width: '120px',
            margin: '5px auto',
            height: 'auto'
        }
    },
    label: {
        color: '#00A170',
        fontWeight: '500'
    }
})

const Countdown = (props) => {

    const classes = useStyles();
    
    const startDate = moment(props.params.startDate);
    const endDate = moment(props.params.endDate);
    const diff = moment.duration(endDate.diff(startDate));

    const block = (value, label) => (
        <div className={classes.block}>
            <div>{value}</div>
            <div className={classes.label}>{label}</div>
        </div>
    )

    return (
        <>
            <h4>Tiempo desde que sos mi novia</h4>
            <div style={{height: '15px'}}/>
            <div className={classes.container}>
                {block(diff.years(), 'Años')}
                {block(diff.months(), 'Meses')}
                {block(diff.days(), 'Días')}
                {block(diff.hours(), 'Horas')}
                {block(diff.minutes(), 'Minutos')}
                {block(diff.seconds(), 'Segundos')}
            </div>
        </>
    )
}

export default Countdown;