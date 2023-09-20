
// const { default: test } = require('node:test');
const calculadora = require('../calculadora');


//console.log(calculadora.suma);

//Prueba unitaria
// test('Debe sumar numero a + b', () => {
//     expect(calculadora.suma(10, 10)).toBe(20);
// })

// test('Debe restar a - b', () => {
//     expect(calculadora.resta(100, 50)).toBe(50);
// })

// test('Debe multiplicar a * b', () => {
//     expect(calculadora.multiplicacion(10, 5)).toBe(50);
// })

// test('Debe dividir a / b', () => {
//     expect(calculadora.division(100, 10)).toBe(10);
// })

/* test('Realiza pruebas para toda la calculadora', () => {
    expect(calculadora.suma(10, 10)).toBe(20);
    expect(calculadora.resta(100, 50)).toBe(50);
    expect(calculadora.multiplicacion(10, 5)).toBe(50);
    expect(calculadora.division(100, 10)).toBe(10);
}) */

test('Realiza pruebas para toda la calculadora',
    () => {
        expect(calculadora.suma(10, 10)).toBe(20);
        expect(calculadora.resta(100, 50)).toBe(50);
        expect(calculadora.multiplicacion(10, 5)).toBe(50);
        expect(calculadora.division(100, 10)).toBe(10);
    }
)

