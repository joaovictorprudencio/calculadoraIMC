

function CaclularImc(peso,altura){
  let imc = peso/(altura*altura);
  console.log(imc.toFixed(1));
  return imc.toFixed(1);
}


function ClassificarImc(nome,imc) {
    if(imc < 18.8 ){
       console.log( `${nome} Você está Abaixo do peso`)
    } else if (imc >= 18.5 & imc <= 24.9){
        console.log( `${nome} Você está Peso normal `)
    } else if (imc >= 25.0 & imc <= 29.9){
        console.log( `${nome} Você está com Sobre Peso  `)
    } else if(imc >= 30.0 & imc <= 34.9){
        console.log( `${nome} Você está com obesidade leve`)
        } else if(imc >= 35.0 & imc <= 39.9)
        console.log( `${nome} Você está com obesidade moderada`)
     else {
        console.log( `${nome} Você está com obesidade grave!`)
     }
}




ClassificarImc("joao victor",CaclularImc(86.0,1.67))