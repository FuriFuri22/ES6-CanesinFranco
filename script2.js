/*# Trabajando con Promesas

> 1. Transformar todas las funciones declarativas en funciones flecha.

> 2. Iplementar los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.

> 3. Simplificar el código de las funciones.

> 4. Transformar la función **funcionCuatro()** en una función asíncrona con la palabra reservada __async__ e implementarla junto con **await**.*/


    // Promesa almacenada en una constante
    const promesa = new Promise((resolve, reject)=>{

       ( 10 === 10) 
        ? resolve('Los valores son iguales')
        : reject('Los valores son distintos')
      });

    promesa.then(res=>console.log(res)).catch(err=>console.log(err))



    // Promesa dentro en una función.
    const promesaDos=(provincia)=>{

        const promesa = new Promise( (resolve, reject)=> {
        
                ( 'Formosa' === provincia )
                  ? resolve('Usted está ubicado en Formosa')
                  : reject('Error al realizar la consulta')

        });

        return promesa;
    }

    promesaDos('Formosa').then(res=>console.log(res)).catch(err=>console.log(err))



    const promesaTres=(valorBooleano)=>{

       const prom = new Promise( (resolve, reject)=> {
            ( true === valorBooleano )
            ? resolve('Los valores son iguales')
            : reject('Los valores son distintos')
        })
        return prom;
    }

    promesaTres(false).then(res=>console.log(res)).catch(err=>console.log(err))
        




const promesaCuatro=async(arguments)=>{
try{
    const prom = await promesaTres(arguments)
    console.log(prom)
}catch(err){
  console.log(err)
}       
}

    promesaCuatro(true)
