
const listaMensajes = [
    {"mensaje": "Bienvenido"},
    {"mensaje": "Benvingut"},
    {"mensaje": "Welcome"}
]

function Ejercicio03(){
    return(
        <div className="mensajes">
            <h2>Ejercicio 3:</h2>
            {listaMensajes.map((item, index) => (
                <Mensaje key={index} text={item.mensaje} />
            ))}
        </div>
    )
}


const Mensaje = ({ text}) =>{
    return(
        <p>{text}</p>
    );

}

export default Ejercicio03;
