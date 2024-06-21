let ingressoInferior = parseInt(document.getElementById('qtd-inferior').textContent);
let ingressoSperior = parseInt(document.getElementById('qtd-superior').textContent);
let ingressoPista = parseInt(document.getElementById('qtd-pista').textContent);

function comprar() {
    //Coletar valores
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade =  document.getElementById('qtd').value;
         
    //Trava de segurança para  quantidade
    if (quantidade <= 0) { //Impede que o campo de quantidade fique vazio
        alert('Necessário inserir uma quantidade de produtos');
        return;
    }

    //Calcular e deduzir a quantidade de ingressos comprados do total
    if (tipoIngresso == 'inferior') {
        
        if ((ingressoInferior - quantidade) < 0) {
            alert('Não há disponibilidade de ingressos para quantidade solicitada');
            return;
        }
        
        ingressoInferior = ingressoInferior - quantidade;
        let qtdInferior = document.getElementById('qtd-inferior');
        qtdInferior.textContent = `${ingressoInferior}`
        
    } else if (tipoIngresso == 'superior') {
        
        if ((ingressoSperior - quantidade) < 0) {
            alert('Não há disponibilidade de ingressos para quantidade solicitada');
            return;
        }
       
        ingressoSperior = ingressoSperior - quantidade;
        let qtdSuperior = document.getElementById('qtd-superior');
        qtdSuperior.textContent =  `${ingressoSperior}`

    } else if (tipoIngresso == 'pista') {
        
        if ((ingressoPista - quantidade) < 0) {
            alert('Não há disponibilidade de ingressos para quantidade solicitada');
            return;
        }

        ingressoPista = ingressoPista - quantidade;
        let qtdPista = document.getElementById('qtd-pista');
        qtdPista.textContent = `${ingressoPista}`

    }



}