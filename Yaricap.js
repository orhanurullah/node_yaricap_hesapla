
const arguments = process.argv.slice(2);
function yaricapHesapla(yaricap){
    console.log(Math.PI * yaricap * yaricap);
}

yaricapHesapla(arguments[0]*1);

