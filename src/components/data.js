import React, { useState } from "react";
import Input from "./input.js";
import './botones.css';
import guardar from "./guardar.js";
function Data() {
    const [data, setData] = useState('');
    const [ipInput, setIpInput] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleButton3Click = () => {
        setShowInput(!showInput);
    }; //logica para el boton de ByInput (lo saque del control anterior practicando)
    
    const handleInputChange = (event) => {
        const inputIP = event.target.value;
        setIpInput(inputIP);
        setIsButtonDisabled(!IPbuena(inputIP)); // le agregue esta parte para desactivarlo si la Ip no es buena
    }; // esta parte también

    const IPbuena = (ip) => {
        const ipRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;
        return ipRegex.test(ip);
    }; // busqué en google como se validaba una ip

    const busqueda = async () => {
        try {
            const response = await Input(ipInput);
            setData(response);
        } catch (error) {
            console.error(error);
            setData('');
        } // esta parte también es del control anterior.
    };
    const Save = () => {
        guardar(data);
    };
// boton 3 del css.
// despues la barra de busqueda.
// la muestra de datos por atributo, perdón por tanta línea.
    return (
        <div>
            <button className="button-3" onClick={handleButton3Click}> 
                ByInput
            </button>
            {showInput && (
                <div>
                    <input type="text" onChange={handleInputChange} />
                    <button className="button-2" onClick={busqueda} disabled={isButtonDisabled}>Buscar</button>
                </div>
            )}
            {data && (
                <div>
                    <h3>Resultado:</h3>
                    <p>IP: {data.ip}</p>
                    <p>City: {data.city}</p>
                    <p>Region: {data.region}</p>
                    <p>Country: {data.country}</p>
                    <p>Location: {data.loc}</p>
                    <p>Organization: {data.org}</p>
                    <p>Postal Code: {data.postal}</p>
                    <p>Timezone: {data.timezone}</p>
                    <p>Readme: <a href={data.readme} target="_blank" rel="noopener noreferrer">Link</a></p>
                    <button  className = "button-1" onClick={Save}>Guardar Información</button>
                </div>
            )}
        </div>
    );
}

export default Data;