const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
const obtenerPcias= async() =>{
    await retrasar(1800);

    const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias').then(res=>res.json())

    return consulta;
}

// Función que retorna los datos de departamentos
const obtenerDptos= async()=> {
    await retrasar(1391);

    const consulta = await fetch('https://apis.datos.gob.ar/georef/api/departamentos').then(res=>res.json())
    return consulta;
}

// Función que retorna los datos de localidades
const obtenerLocalidades= async()=> {
    await retrasar(900);

    const consulta = await fetch('https://apis.datos.gob.ar/georef/api/localidades').then(res=>res.json())
    return consulta;
}

export { obtenerDptos, obtenerLocalidades, obtenerPcias }