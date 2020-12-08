"use strict";
(() => {
    const sumar = (a, b) => {
        return a + b;
    };
    const nombre = () => 'Hola Grediana';
    const obtenerSalario = () => {
        return new Promise((resolve, reject) => {
            resolve('Grediana');
        });
    };
    obtenerSalario().then(a => console.log(a.toUpperCase()));
})();
