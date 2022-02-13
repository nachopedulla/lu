
import { React } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    next: {
        margin: '40px auto',
        width: '100%'
    },
    table: {
        margin: 'auto',
        width: '400px',
        '@media(max-width: 500px)': {
            width: '80%',
        }
    },
    cell: {
        padding: '5px',
        border: '1px solid #c3c0c0',
    },
    header: {
        backgroundColor: '#ed6c02',
        color: 'white'
    }
})

const ViewedEvents = ({title, events}) => {
    
    const classes = useStyles()

    return (
        events.length > 0 ? (
            <div className={classes.next}>
                <h6>{title}</h6>
                <table className={classes.table}>
                    <thead>
                        <tr>
                            <th key='title' className={`${classes.cell} ${classes.header}`}>Evento</th>
                            <th key='date' className={`${classes.cell} ${classes.header}`}>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {events.map( event => 
                            <tr>
                                <td key={event.title} className={classes.cell}>{event.title}</td>
                                <td key={event.date} className={classes.cell}>{event.date}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        ) : null
    )
}

export default ViewedEvents;