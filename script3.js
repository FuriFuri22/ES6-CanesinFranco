 import { obtenerDptos, obtenerLocalidades, obtenerPcias } from "./libs/funciones_exportadas.js"



// Funcion para obtener todos los datos
(async()=>{
try {
 const pro = await obtenerPcias()

    const dep = await obtenerDptos()

   const loc = await obtenerLocalidades()
   
   console.log(pro, dep, loc)

} catch (error) {
    console.log(error)
}})()
   



     /*.then(res=>console.log(res)).catch(err=>console.log(err))
.then(res=>console.log(res)).catch(err=>console.log(err))
.then(res=>console.log(res)).catch(err=>console.log(err))*/ 
