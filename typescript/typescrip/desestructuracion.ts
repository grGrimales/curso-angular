( ()=>{

  const avenger = {

    nombre: 'Steve',
    clave: 'Capitán América',
    poder: 'Droga'
  }

  /*creando una constante y colocando las propiedades que queremos del objeto hacemos la destructuracion del objeto  */

 // const { nombre, clave } = avenger;

 const extraer = ( { nombre, poder }: any ) => {

  console.log( nombre );
  console.log( poder );

 }

 const avengers: string[] = ['Thor', 'Iroman', 'Spiderman'];
 //desestructurando arreglos
    
 const [ loki, hombre, arana] = avengers;

 const extraerArr = ( [thor, ironman, spiderman]: string [] ) => {

  console.log( thor );
  console.log( ironman );
  console.log( spiderman );
 }

 extraerArr( avengers );



}) ();



