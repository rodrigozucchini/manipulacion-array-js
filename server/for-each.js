const letters = ['a','b','c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for', element);
}

//REDUCIENDO CODIGO CON FOR EACH

letters.forEach(item => console.log('forEach',item));