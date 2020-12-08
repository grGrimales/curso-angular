( ()=>{

   const sumar = (a: number, b: number): number =>{
       return a + b;
   }

   const nombre = ():string => 'Hola Grediana';

   const obtenerSalario = ():Promise<string> => {
       return new Promise( (resolve, reject)=> {
        resolve('Grediana');
       });

   }

   obtenerSalario().then( a => console.log ( a.toUpperCase() ))



}) ();



