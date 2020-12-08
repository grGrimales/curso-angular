(function(){

  const miFuncion = function( a: string ){
      return a.toUpperCase();
  }

  const miFuncionF = ( a: string ) => a.toUpperCase();

  const sumarN = function ( a:number, b:number ){
    return a + b;
  }

  const sumarF = ( a: number, b:number)=>{
    return a + b;
  }

  console.log( sumarF ( 10 ,8));
    //function funcion2( a: string ){
    //  return a;
    //}

    const hulk = {
      nombre: 'Hulk',
      smash() {

        setTimeout(() => {

          console.log(`${ this.nombre } smash!!!`)
          
        }, 1000);

       
      }
    }
    hulk.smash();

}) ();



