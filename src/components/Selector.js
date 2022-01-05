import { React, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    dataCell: { border: '1px solid black', padding: '0px 2px', height: '40px' },
    headerCell: {border: '1px solid black', padding: '5px'},
    headerRow: {color: 'white', background: '#00a170'},

})

const options = {
    bares: [
        {name: 'Backroom', ig: 'backroom.bar', location: 'Palermo'},
        {name: 'Basa', ig: 'basabar', location: 'Retiro'},
        {name: 'Buller bar', ig: 'bullerbrewingco', location: 'Recoleta'},
        {name: 'Dome Roofbar', ig: 'tangodemayohotel', location: 'Microcentro'},
        {name: 'Piso 15 Skybar', ig: 'piso15_skybar.', location: 'Puerto Madero'},
        {name: 'Oh no! Lulu Tiki bar', ig: 'ohnolulutikibar', location: 'Villa Crespo'},
        {name: 'Conchinchina Bar', ig: 'cochinchina.bar', location: 'Palermo'},
        {name: 'Puerta uno hidden bar', ig: 'puertauno', location: 'Barrio chino'},
        {name: 'Cielo skybar', ig: 'cieloskybar', location: 'Microcentro'},
        {name: '444', ig: '444caballito', location: 'Caballito'},
        {name: 'Baum', ig: 'baum.parquepatricios', location: 'Parque Patricios'},
        {name: 'Temple Bar', ig: 'templecaballito', location: 'Caballito'},
        {name: 'El Fermentador', ig: 'el_fermentador', location: 'Caballito'}
    ],
    restaurantes:  [
        {name: 'Tomate', ig: 'tomate.estacion', location: 'Palermo'},
        {name: 'Enero', ig: 'enerocostanera', location: 'Belgrano'},
        {name: 'Chui', ig: 'chui.ba', location: 'Villa Crespo'},
        {name: 'Tanta', ig: 'tanta_argentina', location: 'Microcentro'},
        {name: 'Mecha', ig: 'mecharestaurant', location: 'Devoto'},
        {name: 'Le reve', ig: 'lerevebistro', location: 'Palermo'},
        {name: 'Museo Evita', ig: 'museoevitarestaurant', location: 'Palermo'},
        {name: 'Home Hotel', ig: 'homerestaurantba', location: 'Palermo'},
        {name: 'Citadino', ig: 'citadinoba', location: 'Parque Patricios'}
    ],
    merienda: [
        {name: 'Croque Madame Palacio Paz', ig: 'croquemadamepalaciopaz', location: 'Retiro'},
        {name: 'Palacio Balcarce', ig: 'elpalaciobalcarce', location: 'Recoleta'}, 
        {name: 'Mudra', ig: 'mudraplantbased', location: 'Villa crespo '},
        {name: 'El gato negro', ig: 'elgatonegroCafé', location: 'San Nicolas'},
        {name: 'Cuervo Café', ig: 'cuervoCafé', location: 'Palermo'},
        {name: 'Lattentef', ig: 'lattenteCafé', location: 'Palermo'},
        {name: 'Cocu Boulangerie', ig: 'cocuboulangerie', location: 'Villa Crespo'},
        {name: 'Usina Café', ig: 'usinaCafétera', location: 'Recoleta'},
        {name: 'Chill Garden', ig: 'chillgarden.ba', location: 'Caballito'},
        {name: 'Atlática Libros y Café', ig: 'atlantica.librosycafe', location: 'Caballito'},
        {name: 'Nerea Café', ig: 'cafenerea', location: 'Caballito'},
        {name: 'Barragan', ig: 'barragan.Café', location: 'Caballito'},
        {name: 'Orden Natural Café Veggie', ig:'orden_natural_cafe_veggie', location: 'Caballito'},
        {name: 'Amelia', ig: 'ameliacafe.caba', location: 'Caballito'}
    ],
    peliculas: [
        {name: 'Saga Harry Potter'},
        {name: 'Don´t look up'},
        {name: 'Saga Divergente'},
        {name: 'The Matrix'},
        {name: 'The French Dispatch'},
        {name: 'House of Gucci'},
        {name: 'Memento'},
        {name: 'Tick, Tick...Boom!'},
        {name: 'The power of the dog'},
        {name: 'Dune'},
    ],
    viajes: [
        {name: 'Bariloche | La Angostura | San Martín | Traful | Esquel - 1 mes'},
        {name: 'San Rafael - Mendoza'},
        {name: 'Cataratas'},
        {name: 'Empedrado - Corrientes'},
        {name: 'Rio Pilcomayo - Formosa'},
        {name: 'El Soberbio - Misiones'},
        {name: 'Caviahue - Neuquén'},
        {name: 'Barreal de Arauco - La Rioja'},
        {name: 'Mburucuyá - Corrientes'},
        {name: 'Fiambalá - Catamarca'},
        {name: 'Calingasta - San Juan'}
    ]
}

const Selector = () => {

    const [category, setCategory] = useState()
    const [fullTable, setFullTable] = useState()
    const [random, setRandom] = useState()
    const [selected, setSelected] = useState([]);

    const classes = useStyles();
    
    const handleRandom = () => {
        let rand = getRandomResult();        
        while (!selected.includes(options[category][rand].name)) {
            rand = getRandomResult()
        }
        setRandom(rand)
    }

    const getRandomResult = () => {
        const min = 0
        const max = options[category].length - 1    
        return Math.round(min + Math.random() * (max - min))
    }


    const changeHandler = (value) => {
        setCategory(value)
        setFullTable((value === 'peliculas' || value === 'viajes') ? false: true)
        setRandom();
        setSelected(value === '' ? [] : options[value].map(option => option.name))
    }

    const openInstagram = (profile) => window.open(`https://www.instagram.com/${profile}`, "_blank") 

    const addSelected = (checked, value) => {
        if (checked) {
            setSelected([...selected, value])
        } else {
            setSelected(selected.filter(val => val !== value))            
        }
    }


    const randomComponent = () => (
        <div style= {{marginBottom: '20px'}}>
            <div style={{display: 'flex', justifyContent: 'center', columnGap: '10px', alignItems: 'flex-start'}}>
                <p>No tengo ganas de pensar</p>
                <button onClick={handleRandom} style={{border: '1px solid #ffa603', padding: '3px 8px', backgroundColor: '#e19100', borderRadius: '8%', color: 'white'}}>Sortear!</button>
            </div>
            {random >= 0? <p><b>Resultado sortero</b>: {options[category][random].name}</p> : null}
        </div>
    )

    const compareByName = (first, second) => {
        if (first.name > second.name) return 1
        if (first.name < second.name) return -1
        return 0
    }

    const tableComponent = () => (
        <table style={{margin: 'auto', maxWidth: '90%'}}>
            <thead>
                <tr className={classes.headerRow}>
                    <th className={classes.headerCell} style={{width: '10%'}}></th>
                    <th className={classes.headerCell} style={{width: '45%'}}>Nombre</th>
                    {fullTable? <th className={classes.headerCell} style={{width: '10%'}}>IG</th> : null}
                    {fullTable? <th className={classes.headerCell} style={{width: '25%'}}>Lugar</th> : null}
                </tr>
            </thead>
            <tbody>
                {options[category].sort(compareByName).map((option, index) => (
                    <tr>
                        <td key={index + '_'} style={{width: '2%'}} className={classes.dataCell}><input type="checkbox" name="scales" checked={selected.includes(option.name)} onChange={(e) => addSelected(e.target.checked, option.name)}></input></td>
                        <td key={index + 'A'} className={classes.dataCell}>{option.name}</td>
                        {fullTable? <td key={index + 'B'} className={classes.dataCell} style={{color: 'blue', textDecoration: 'underline'}} onClick={() => openInstagram(option.ig)}>Ir</td> : null}
                        {fullTable? <td key={index + 'C'} className={classes.dataCell}>{option.location}</td> : null}
                    </tr>
                ))}
            </tbody>
        </table>
    )

    return (
        <>
            <div style={{justifyContent: 'space-between', margin: 'auto', width: '180px', display: 'flex'}}>
                <label>Categoria</label>
                <select onChange={(event) => changeHandler(event.target.value)}>
                    <option value=""></option>
                    <option value="bares">Bares</option>
                    <option value="restaurantes">Restaurantes</option>
                    <option value="merienda">Merienda</option>
                    <option value="peliculas">Películas</option>
                    <option value="viajes">Viajes</option>
                </select>            
            </div>
            <div style={{margin: '30px auto', justifyContent: 'center'}}>
            {category? (
                <>
                    {randomComponent()}
                    {tableComponent()}
                </>
            ) : <b>Elija una categoria</b>}
            </div>
        </>
    )
}

export default Selector;