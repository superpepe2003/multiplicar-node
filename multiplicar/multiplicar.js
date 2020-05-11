const fs = require('fs');
const color = require('colors');

let data = '';
let listar= '';

let listarTabla = (base, limite) => {

    console.log('=========================='.white);
    console.log(`tabla de ${base}`.white);
    console.log('=========================='.white);

    for ( let i = 1; i <= limite; i++ ){
        console.log(`${ base } * ${ i } = ${ base * i}\n`);
    }


}

let crearArchivo = ( base, limite ) => {

    return new Promise( ( resolve, reject ) => {

        if( !Number(base)){
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        for( let i=1; i <= limite; i++) {
            data += `${ base } * ${ i } =  ${i * base}\n`;
        }
        
        //console.log(data);
        
        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
          if (err) 
            reject( err );
          else 
            resolve(`tabla-${ base }.txt`);
        });
    })

}

module.exports = {
    crearArchivo,
    listarTabla
}