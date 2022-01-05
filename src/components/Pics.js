import React from 'react';
import Chui from '../assets/chui.jpeg'
import Cumple from '../assets/cumple.jpeg'
import Facha1 from '../assets/tirando-facha.jpeg'
import Facha2 from '../assets/tirando-facha-2.jpeg'
import Siesta from '../assets/siestita.jpeg'
import Joda from '../assets/jodita.jpeg'
import Miro from '../assets/miro.jpeg'
import Vagancia from '../assets/vagancia.jpeg'
import Cara from '../assets/facha.jpeg'
import Porque from '../assets/porque.jpeg'
import Cfk from '../assets/cfk.jpeg'
import Tres from '../assets/tres.jpeg'
import Pic from './Pic';
import Siesta2022 from '../assets/Siesta2022.jpeg';
import Anio1 from '../assets/Año1.jpeg'
import Anio2 from '../assets/Año2.jpeg'
import Anio4 from '../assets/Año4.jpeg'
import Lic from '../assets/Lic.jpeg'

const fotos = [
    {title: 'Mi mujer es licenciada', img: Lic},
    {title: 'Año nuevo juntitos', img: Anio1},
    {title: 'Ojo esa remerita', img: Anio2},
    {title: 'Hablemos de lo bien que salió Kira', img: Anio4},
    {title: 'La actividad favorita', img: Siesta2022},
    {title: 'Comiendo rico por ahí', img: Chui},
    {title: 'De cumpleaniitos', img: Cumple},
    {title: 'Mi CFK', img: Cfk},
    {title: 'Pero que bonita', img: Miro},
    {title: 'Que carita de nabo', img: Cara},
    {title: '¿Por qué no?', img: Porque},
    {title: 'Tirando facha', img: Facha1},
    {title: 'Tirando facha 2', img: Facha2},
    {title: 'Los tres mosqueteros', img: Tres},
    {title: 'Salió siestita', img: Siesta},
    {title: 'Se armó la jodita', img: Joda},
    {title: 'Que vagancia la de Francia', img: Vagancia},
]

const Pics = () => (
    <>
        <h4>Fotos</h4>
        <div style={{height: '15px'}}/>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {fotos.map((foto, index) => <Pic key={index} title={foto.title} img={foto.img}/>)}
        </div>
        <div style={{height: '50px'}}/>
    </>
)

export default Pics;