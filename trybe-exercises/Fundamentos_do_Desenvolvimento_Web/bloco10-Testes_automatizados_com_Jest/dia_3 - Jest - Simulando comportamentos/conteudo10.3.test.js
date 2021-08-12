let sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

let somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
let subtrair = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => a / b;


test('teste chamada função subtrair', () => {
  subtrair = jest.fn();
  subtrair();
  expect(subtrair).toHaveBeenCalled()
})