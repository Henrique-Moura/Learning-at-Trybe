const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = () =>`
  Olá, ${order.order.delivery.deliveryPerson}
  entrega para ${order.name},
  Telefone: ${order.phoneNumber},
  ${order.address.street},
  Nº: ${order.address.number},
  AP: ${order.address.apartment}`
console.log(customerInfo());


const orderModifier = () => {
  const name = order.name = 'Luiz Silva';
  const pizzas = order.order.pizzas = ['muzzarella', 'calabresa'];
  const payment = order.payment = 50;
  return `Olá, ${name}, o total do seu pedido de ${pizzas} e ${order.order.drinks.coke.type} é R$ ${payment},00.`
}
orderModifier();
console.log(orderModifier())

// <!--

/* 1 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função.
*/

/* 2-  Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00.
*/