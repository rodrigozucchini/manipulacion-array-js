//ELIMINO ELEMENTO SIN MODIFICAR EL ARRAY ORIGINAL
const products = [
    {title: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];

const rta = products.filter(prod => prod.id !== '🍔')
console.log('inmutable', rta);
console.log(products);

//COMO HACER UNA MODIFICACION SIN MODIFICAR EL ARRAY ORIGINAL

const products2 = [
    {title: "Pizza", price: 121, id: "🍕"},  
    { name: "Burger", price: 121, id: '🍔' },
    { name: "Hot cakes", price: 121, id: '🥞' },
];

const products3 = [
    {title: "Guacamole", price: 123, id: "♥"}];

const rta2 = products2.concat(products3)
console.log(rta2);
console.log(products2);