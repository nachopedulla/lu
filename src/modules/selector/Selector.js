import { React, useEffect, useState } from 'react'
import { useFirebase } from '../../context/FirebaseContext';
import PlaceTable from './PlaceTable';
import NewPlace from './NewPlace';
import Random from './Random';
import Button from '../../components/Button';

const Selector = () => {

    const [places, setPlaces] = useState([])
    const [category, setCategory] = useState([])
    const [location, setLocation] = useState()
    const [create, setCreate] = useState(false)
    const [qualify, setQualify] = useState([])
    
    const firebase = useFirebase()

    useEffect(() => {
        fetchOptions()
    }, [])

    async function fetchOptions () { 
        const places = await firebase.getPlaces()
        setPlaces(places.sort(compareByLocation)) 
    }

    const options = () =>  {
        let items = places.filter(place => place.category === category)
        if (location) {
            return items.filter(place => place.location === location)
        }
        return items
    }

    const locations = () => places.filter(place => place.category === category).map(({location})=> location).filter((v, i, a) => a.indexOf(v) === i)

    const compareByLocation = (first, second) => {
        if (first.location > second.location) return 1
        if (first.location < second.location) return -1
        return 0
    }
    
    const showNewPlace = () => setCreate(!create)
    
    const createNewPlace = (place) => {
        firebase.addPlace(place.name, place.location, place.ig, place.category, place.calification)
        showNewPlace()
    }

    async function qualifyItems() {
        await qualify.forEach(place => updatePlace(place))
        setQualify([])
        fetchOptions()
    }

    const updatePlace = (place) => {
        let item = {...places.find(({id}) => id === place.id)}
        item['calification'] = place.calification
        firebase.updatePlaces(place.id, item)
    }

    const updateHandler = (place, calification) => {
        setQualify([...qualify, {id: place, calification: calification}])
    }

    return (
        <>
            <div style={{justifyContent: 'center', columnGap: '15px', margin: 'auto', width: '300px', display: 'flex'}}>
                <label style={{width: '70px'}} >Categoria</label>
                <select  style={{width: '150px'}} onChange={(event) => setCategory(event.target.value)}>
                    <option value=""></option>
                    <option value="bares">Bares</option>
                    <option value="restaurant">Restaurantes</option>
                    <option value="cafe">Merienda</option>
                </select>            
            </div>
            <div style={{justifyContent: 'center', columnGap: '15px', margin: '5px auto', width: '300px', display: 'flex'}}>
                <label style={{width: '70px'}}>Barrio</label>
                <select style={{width: '150px'}} onChange={(event) => setLocation(event.target.value)}>
                    <option key='empty' value=""></option>
                    {locations().map(location => <option key={location} value={location}>{location}</option>)}
                </select>            
            </div>
            <div style={{margin: '30px auto', justifyContent: 'center'}}>
                <Button text='Crear' style={{marginRight: '5px'}} clickHandler={showNewPlace} hidden={create}/>
                <Button text= 'Puntuar' style={{marginLeft: '5px'}} clickHandler={qualifyItems} disabled={qualify.length === 0}/>
                <NewPlace show={create} cancel={showNewPlace} confirm={createNewPlace}/>
                <Random places={options()}/>
                <PlaceTable places={options()} updateHandler={updateHandler}/>
            </div>
        </>
    )
}

export default Selector;