const BASE = 5000;
let imposto = 2.5;
let instrucao = "Prog Man";
let tipo = 'A';
let msg = 'Let`s Work!';
let faith = 'God';
let brasileiro = true;
let paraguaio = false;
let coutry = 'Brazil';

console.log(msg);

const CARRO= {
    modelo:'Spin',
    cor:'Branca',
    ano:'2012',
    portas:'4 Portas',  
}

const motorista={
    sexo:'Masculino',
    idade:'33 Anos',
    natural:'Rio de Janeiro',
    registro:'000444555566',
}

let casa={
    pais: 'Estados Unidos da América',
    cidade:'MaryLand',
    rua:'Elm Street',
    num: '4000',
}

console.log(motorista['natural']);

console.log(casa.rua);

let soma = function (num1,num2){
let resultado = (num1+num2);
console.log(resultado);
}
soma(10,5);

let sub = function(num3,num4){
    let result2 = (num3-num4);
    return result2;
}

let resultTotal = sub(40,15);
console.log(resultTotal);

window.prompt('Qual seu nome?');