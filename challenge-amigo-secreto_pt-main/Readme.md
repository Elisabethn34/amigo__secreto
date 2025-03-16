Gerenciador de Amigos com Sorteio
Descrição
Este projeto é uma aplicação web simples que permite ao usuário adicionar nomes de amigos a uma lista e, posteriormente, classificar aleatoriamente um desses amigos. É uma ótima maneira de aprender conceitos básicos de JavaScript, como manipulação de DOM e arrays.

Funcionalidades
Amigo : Permite ao usuário inserir o nome de um amigo em um campo de texto e adicioná-lo a uma lista exibida na página.
Listar Amigos : Exibe todos os amigos adicionados em uma lista ordenada.
Sortear Amigo : Seleciona aleatoriamente um amigo da lista e exibe o nome sorteado na tela.
Como usar
Adicione um Amigo :

Digite o nome do amigo no campo de entrada identificado como "amigo".
Clique no botão "Adicionar Amigo".
Se o campo estiver vazio, uma mensagem de alerta solicitará que você insira um nome.
Visualizar a Lista de Amigos :

Após a adição, a lista de amigos será atualizada automaticamente e exibida abaixo do campo de entrada.
Sortear um Amigo :

Clique no botão "Sortear Amigo".
Se a lista estiver vazia, uma mensagem informará que não há amigos disponíveis para o sorteio.
Caso contrário, o nome de um amigo será exibido como o sorteado.
Estrutura do Código
O código é composto por três funções principais:

adicionarAmigo() :

Obtenha o valor inserido no campo de entrada com id="amigo".
Remova espaços em branco extras usando trim().
Verifique se o campo está vazio; se estiver, exibe um alerta solicitando a inserção de um nome.
Se um nome válido for inserido, adicione-o ao array amigos.
Chama a função atualizarLista()para atualizar a exibição da lista de amigos.
Limpe o campo de entrada para novas inserções.
atualizarLista() :

Selecione o elemento HTML com id="listaAmigos".
Limpe o conteúdo atual da lista para evitar duplicações.
Itera sobre o array amigose cria um item da lista ( <li>) para cada amigo.
Adicionado cada item à lista exibida na página.
sortearAmigo() :

Selecione o elemento HTML com id="resultado".
Verifique se o array amigosestá vazio; se estiver, exibe uma mensagem informando que não há amigos para sortear.
Caso contrário, gera um índice aleatório baseado no comprimento do array.
Exibe o nome do amigo correspondente ao índice classificado no elemento de resultado.
Tecnologias Utilizadas
HTML : Estruturação da página web.
CSS : Estilização dos elementos da página (opcional).
JavaScript : Lógica de funcionamento da aplicação, manipulação do DOM e gerenciamento da lista de amigos.
Possíveis Melhorias
Implemente a funcionalidade de remover amigos individuais da lista.
Adicione validação para evitar a inserção de nomes duplicados.
Incorpora armazenamento local (LocalStorage) para persistir na lista de amigos entre sessões.
Melhore o design e a usabilidade da interface com CSS e bibliotecas de UI avançadas.
Conclusão
Este projeto serve como uma introdução prática à manipulação de arrays e elementos DOM usando JavaScript. É ideal para iniciantes que desejam consolidar seus conhecimentos básicos e expandir suas habilidades com funcionalidades adicionais.