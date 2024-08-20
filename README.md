Objetivo:
Criar uma página web onde o usuário possa digitar um CEP, consultar os dados de endereço utilizando a API pública ViaCEP, e exibir as informações na tela.

Link do site: https://viacep.com.br/

Tarefas:

1. Crie uma página HTML com um campo de entrada para o usuário digitar o CEP e um botão para realizar a consulta.
2. Utilize `XMLHttpRequest` para fazer uma requisição `GET` à API do ViaCEP.
3. Exiba as informações retornadas pela API, como cidade, estado, rua e bairro, na página.
4. Adicione validação para o CEP, garantindo que ele possui 8 dígitos numéricos antes de realizar a requisição.

Desafio:
- Exibir uma mensagem de erro se o CEP não for encontrado ou se a API retornar uma resposta inválida.
- Adicionar um loader enquanto a requisição está sendo processada.
