const numeros = [1,3,4,5];

let rta = numeros.find(item => item % 2 === 0);

console.log(rta);



const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 14,
    },
  ];


  const admitir = team.findIndex(item => item.age > 1);
  console.log(admitir);