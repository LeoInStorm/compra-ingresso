
function comprar() {
    
 // recuperando o ingresso e a quantidade

    let ingresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);
    
    
   if (ingresso.value == 'pista') {

    comprarPista(quantidade);
   }

   if ( ingresso.value == 'inferior'){
        comprarInferior(quantidade);
   }

   else {
    comprarSuperior(quantidade);
   }
}

function comprarPista(quantidade){

    var qtdpista = parseInt(document.getElementById('qtd-pista').textContent);

    if(quantidade > qtdpista){

        alert('numero de ingressos indiponiveis tente novamente!');
    }

    else{

        qtdpista = qtdpista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdpista;
        alert('compra realizada')

    }
}

function comprarSuperior(quantidade){

    let qtdsuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(quantidade > qtdsuperior){

        alert('numero de ingressos indiponiveis tente novamente!');
    }

    else{

        qtdsuperior = qtdsuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdsuperior;
        alert('compra realizada')

    }

}

function comprarInferior(quantidade){

    let qtdinferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(quantidade > qtdinferior){

        alert('numero de ingressos indiponiveis tente novamente!');
    }

    else{

        qtdinferior = qtdinferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdinferior;
        alert('compra realizada')

    }

}
