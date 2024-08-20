//A função consultaEndereço declara a váriavel cep, cujo conteúdo vem da id cep presente no input. Nesta váriavel verificamos se o valor do cep corresponde aos 8 dígitos requeridos. E depois criamos a váriavel url, que recebe o link da api via cep; dentro deste link inserimos a váriavel de id cep no lugar de um número pré-definido, com o objetivo de permitir ao usuário digitar no input o cep desejado.
function consultaEndereco() {
    let cep = document.querySelector('#cep').value;
    
    if(cep.length !== 8){
        alert('CEP Inválido');
        return;
    }
    
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    
    fetch(url).then(function(response){
        response.json().then(mostrarEndereco);
        //podemos substituir o conteúdo abaixo, por uma única sentença.
        // response.json().then(function(data) {
        //     console.log(data)
        //     mostrarEndereco(data);
        // });
    });
}


//A função mostrarEndereco pega os dados do endereço contidos na api e insere no campo resultado do HTML também selecionado pelo id.
function mostrarEndereco(dados) {
    let resultado = document.querySelector('#resultado');
    
    if (dados.erro) {
        resultado.innerHTML = "Não foi possível localizar os dados do cep digitado"
    } else {
        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                                <p>Complemento: ${dados.complemento}</p>
                                <p>Bairro: ${dados.bairro}</p>
                                <p>Cidade: ${dados.localidade}</p>`
    }

}