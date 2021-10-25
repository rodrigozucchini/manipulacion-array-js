const nombres = ['zucchi','leo','juan','rodrigo'];
nombres.sort();
console.log(nombres);
//ES TRAMPOSO POR EJEMPLO PARA ORGANIZAR NUMEROS Y MESES POR ORDEN
//ordeno de menor a mayor
const numeros = [1,30,25,10000,2356];
numeros.sort((a,b) => a-b);
console.log(numeros);


//ordeno de mayor a menor

const numeros = [1,30,25,10000,2356];
numeros.sort((a,b) => b-a);
console.log(numeros);

//Ordena de mayor total a menor total

const orders = [
    {
      customerName: 'Nicolas',
      total: 600,
      delivered: true,
      date: new Date(2021, 1, 1, 15),
    },
    {
      customerName: 'Zulema',
      total: 120,
      delivered: false,
      date: new Date(2021, 1, 1, 10),
    },
    {
      customerName: 'Santiago',
      total: 1840,
      delivered: true,
      date: new Date(2021, 1, 1, 20),
    },
    {
      customerName: 'Valentina',
      total: 240,
      delivered: true,
      date: new Date(2021, 1, 1, 8),
    },
  ];


orders.sort((a,b) => b.total-a.total);
console.log(orders);


orders.sort((a,b) => a.date.getTime()-b.date.getTime());
console.log(orders);