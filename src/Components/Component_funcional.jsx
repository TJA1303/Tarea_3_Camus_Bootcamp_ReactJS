import React, { useState, useEffect } from 'react';

const ComponentFuncional = () => {

    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(0);
    const nombre = 'Tomas'
    const apellidos = 'Jimenez'

    useEffect(() => {
        const TimerID = setInterval(() => tick(), 1000);
        return () =>  clearInterval(TimerID);
    }, []);

    function tick() {
        setFecha(new Date());
        setEdad((prevEdad) => prevEdad+1);
    }

    return (
        <div>
        <h1>Edad: {edad}</h1>
        <h2>Hora actual: {fecha.toLocaleTimeString()}</h2>
        <h3>{nombre} {apellidos}</h3>
            
        </div>
    );
}

export default ComponentFuncional;

