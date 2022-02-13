
import { React, useEffect, useState } from 'react';
import { useFirebase } from '../../context/FirebaseContext';
import ViewedEvents from './ViewedEvents';
import PendingEvents from './PendingEvents'
import moment from 'moment';

const Events = () => {

    const [events, setEvents] = useState([])

    const firebase = useFirebase()

    useEffect(() => {
        async function fetchOptions () { 
            const events = await firebase.getEvents()
            setEvents(events.sort(compareByDate)) 
        }
        fetchOptions()
    }, [])

    const compareByDate = (first, second) => {
        if (first.date > second.date) return 1
        if (first.date < second.date) return -1
        return 0
    }

    const viewedHandler = (id, title, date) => {
        let data = {}
        data['title'] = title
        data['date'] = date
        data['viewed'] = true
        console.log(data)
        firebase.updateEvent(id, data)
    }

    const pending = events.filter(({viewed}) => !viewed)
    const next = events.filter(({viewed, date}) => viewed && moment(date, 'dd/MM/yyyy') > new Date())
    const previous = events.filter(({viewed, date}) => viewed && moment(date, 'dd/MM/yyyy') <= new Date())

    return (
        <>
            <h4>Eventos, regalos y más</h4>            
            <PendingEvents events={pending} viewHandler={viewedHandler}/>
            <ViewedEvents title='Próximos' events={next}/>
            <ViewedEvents title='Previos' events={previous}/>
        </>
    )
}

export default Events;