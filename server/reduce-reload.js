const numeros = [1,3,2,3,3,1,5];

const rta = numeros.reduce((obj, item) => {
    if(!obj[item]) {
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});
console.log(rta);


const numeros = [1,3,2,3,3,1,5,9,15,12,20,21,22,23];
const obj = {'1-3':0, '4-9':0, '9-23':0}
const rta = numeros.reduce((obj, item) => {
    if(item<=3 && item>=1) {
        obj['1-3']++;
    } else if (item<=9 && item>=4){
        obj['4-9']++;
    }
    else {
        obj['9-23']++;
    }
    return obj;
},obj);


console.log(rta);
