const PuntosActuales = ({puntos}) => (
    <div style={
        {
            margin: '10px auto', 
            padding: '3px', 
            borderRadius: '3px', 
            width: '150px', 
            fontSize: '1rem', 
            backgroundColor: '#3d855a', 
            color: 'white'
        }
    }>
        <p style={{fontSize: '2rem'}}>{puntos}</p>
        <p>Puntos actuales</p>
    </div>
)

export default PuntosActuales;