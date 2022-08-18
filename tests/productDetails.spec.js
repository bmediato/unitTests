const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {

test('Teste se productDetails é uma função.', () => {
  expect(typeof productDetails).toBe('function');
})
test('Teste se o retorno da função é um array.', () => {
  expect(typeof productDetails('alcool em gel', 'mascara')). toBe('object');
})
test('Teste se o array retornado pela função contém dois itens dentro.', () => {
  expect(Object.keys(productDetails('alcool', 'mascara')).length).toBe(2);
})
test('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
  expect(typeof Object.values(productDetails('alcool', 'mascara'))[0]).toBe('object');
  expect(typeof Object.values(productDetails('alcool', 'mascara'))[1]).toBe('object');
})
test('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
  expect(productDetails('batata', 'cenoura')).not.toEqual();
})
test('Teste se os dois productIds terminam com 123.', () => {
expect((productDetails('alcool', 'mascara'))[0].details.productId).toBe('alcool123');
expect((productDetails('alcool', 'mascara'))[1].details.productId).toBe('mascara123');
})
});
