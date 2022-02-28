const CatalogoItem = ({name, puntos, disabled, validateHandler}) => {

    const buttonStyle = {
        width: '100%', 
        border: 'none', 
        height: '30px',
        textAlign: 'center',
        borderBottomLeftRadius: '10px', 
        borderBottomRightRadius: '10px',
        backgroundColor: disabled ? 'grey' : 'rgb(0 161 112)',
        color: 'white'
    }

    const containerStyle = {
        margin: '10px 15px', 
        width: '125px', 
        border: '1px solid black', 
        borderRadius: '10px',
    }

    const pointsStyles = {
        width: '100%', 
        height: '35px', 
        textAlign: 'center', 
        fontSize: '19px',
        fontWeight: 500,
    }

    const titleStyle = {
        backgroundColor: disabled ? '#b7b2b2' : 'rgba(0, 0, 0, .7)',
        color: disabled ? 'black' : 'white',
        borderTopLeftRadius: '10px', 
        borderTopRightRadius: '10px',
        height: '45px',
        padding: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={containerStyle}>
            <h6 style={titleStyle}>{name}</h6>
            <div style={pointsStyles}>{puntos}</div>
            <button onClick={() => validateHandler(name, puntos)} style={buttonStyle} disabled={disabled}>Cambiar</button>
        </div>
    )
}

export default CatalogoItem