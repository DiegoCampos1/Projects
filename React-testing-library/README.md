# Projeto Star Wars DataTable Filters (com hooks, context API e testes)!

Este projeto foi feito para avaliação de meus conhecimentos sobre _React Testing Library_ ofertado pela Trybe.

## O que foi desenvolvido:

Nesse projeto desenvolvi testes para uma aplicação React.

## Instruções para execução

1 - Clone este repositório

`git clone git@github.com:laurolyra/my-projects.git`

2 - Vá para a pasta do projeto

`cd StarWarsHooks`

3 - Instale as dependências

`npm install`

4 - Inicie a aplicação

`npm start`

# Requisitos Obedecidos

Todos os requisitos constituem regras de negócio definidas pela escola. Não me sendo autorizado alterá-las para uma outra arquitetura ou uso de outra tecnologia.

A seguir estão listados todos os requisitos do projeto. Lembre-se que para a avaliação utilizaremos testes por mutação, então cada requisito só será aceito se os testes tiverem comportamento adequado tanto na aplicação original como na modificada.


### 1. Testes do arquivo App.js

  - Ao carregar a aplicação no caminho de URL “/”, a página principal da Pokédex deve ser mostrada.

  - No topo da aplicação, deve haver um conjunto fixo de links de navegação

    - O primeiro link deve possuir o texto `Home` com a URL `/`;

    - O segundo link deve possuir o texto `About` com a URL `/about`;

    - O terceiro link deve possuir o texto `Favorite Pokémons` com a URL `/favorites`.

  - Ao clicar no link "Home" na barra de navegação, a aplicação deve ser redirecionada para a página inicial, na URL "/"

  - Ao clicar no link "About" na barra de navegação, a aplicação deve ser redirecionada para a página de `About`, na URL "/about"

  - Ao clicar no link "Favorite Pokémons" na barra de navegação, a aplicação deve ser redirecionada para a página de pokémons favoritados, na URL "/favorites"

  - Entrar em uma URL desconhecida exibe a página `Not Found`

### 2. Testes do arquivo About.js

  - A página "About" deve exibir informações sobre a Pokédex

  - A página deve conter um heading `h2` com o texto `About Pokédex`;

  - A página deve conter dois parágrafos com texto sobre a Pokédex;

  - A página deve conter a seguinte imagem de uma Pokédex: `https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.

### 3. Testes do arquivo FavoritePokemons.js

  - Caso a pessoa não tenha pokémons favoritos, a mensagem `No favorite pokemon found` deve aparecer na tela.

  - A página não deve exibir nenhum card de pokémon não favoritado.

  - A página deve exibir todos os cards de pokémons favoritados;

### 4. Testes do arquivo NotFound.js

  - A página deve conter um heading `h2` com o texto `Page requested not found 😭`;

  - A página deve exibir a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.

### 5. Testes do arquivo Pokedex.js

  - Ao apertar o botão de próximo, a página deve exibir o próximo pokémon da lista

    - O botão deve conter o texto `Próximo pokémon`;

    - Cliques sucessivos no botão devem mostrar o próximo pokémon da lista;

    - Ao se chegar ao último pokémon da lista, a Pokédex deve voltar para o primeiro pokémon no apertar do botão.

  - A Pokédex deve exibir apenas um pokémon por vez

  - A Pokédex deve conter botões de filtro

    - A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;

    - O texto do botão deve ser o nome do tipo, p. ex. `Psychic`.

  - A Pokédex deve conter um botão para resetar o filtro

    - O texto do botão deve ser `All`;

    - Após clicá-lo, a Pokédex deve voltar a circular por todos os pokémons;

    - Quando a página carrega, o filtro selecionado deve ser o `All`.

  - A Pokédex deve gerar, dinamicamente, um botão de filtro para cada tipo de pokémon

    - Os botões de filtragem devem ser dinâmicos: sua Pokédex deve gerar um botão de filtragem para cada tipo de pokémon disponível nos dados independente de quais ou quantos sejam, sem repetição de tipos. Ou seja, se sua Pokédex possui pokémons do tipo `Fire`, `Psychic`, `Electric` e `Normal`, deve aparecer como opção de filtro um botão para cada um desses tipos. Além disso, ela deve manter o botão `All`.

  - O botão de `Próximo pokémon` deve ser desabilitado se a lista filtrada de pokémons tiver um só pokémon

### 6. Testes do arquivo Pokemon.js

  - Deve ser retornado um card com as informações de determinado pokémon;

  - O nome correto do pokémon deve aparecer na tela;

  - O peso médio do pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>`, onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do pokémon e sua unidade de medida;

  - A imagem deve conter um atributo `src` com a URL da imagem do pokémon. A imagem deverá ter também um atributo `alt` com o texto `<name> sprite`, onde `<name>` é o nome do pokémon;

  - O pokémon exibido na Pokédex deve conter um link de navegação para exibir detalhes deste pokémon. O link deve possuir a URL `/pokemons/<id>`, onde `<id>` é o id do pokémon exibido;

  - Ao clicar no link de navegação do pokémon, a aplicação deve ser redirecionada para a página de detalhes de pokémon. A URL exibida no navegador deve mudar para `/pokemon/<id>`, onde `<id>` é o id do pokémon cujos detalhes se deseja ver;

  - Pokémons favoritados devem exibir um ícone de uma estrela

    - O ícone deve ser uma imagem, com o atributo `src` igual `/star-icon.svg`;

    - A imagem deve ter o atributo `alt` igual a `<pokemon> is marked as favorite`, onde `<pokemon>` é o nome do pokémon cujos detalhes estão sendo exibidos.

### 7. Testes do arquivo PokemonDetails.js

  - Deve conter mais informações sobre apenas o pokémon selecionado;

  - A página deve conter um texto `<name> Details`, onde `<name>` é o nome do pokémon;

  - O pokémon exibido na página de detalhes não deve conter um link de navegação para exibir detalhes deste pokémon;

  - A seção de detalhes deve conter um heading `h2` com o texto `Summary`;

  - A seção de detalhes deve conter um parágrafo com o resumo do pokémon específico sendo visualizado;

  - A página de detalhes deve exibir uma seção com os mapas com as localizações do pokémon

      - A seção de detalhes deve conter um heading `h2` com o texto `Game Locations of <name>`, , onde `<name>` é o nome do pokémon exibido;

      - A seção de detalhes deve exibir todas as localizações do pokémon;

      - Cada localização deve exibir o nome da localização e uma imagem do mapa da localização;

      - A imagem da localização deve ter um atributo `src` com a URL da localização;

      - A imagem da localização deve ter um atributo `alt` com o texto `<name> location`, onde `<name>` é o nome do pokémon.

  - A página de detalhes deve permitir favoritar um pokémon

    - A página deve conter um checkbox que permita favoritar um pokémon. Cliques no checkbox devem, alternadadamente, adicionar e remover o pokémon da lista de favoritos;

    - O label do checkbox deve ser `Pokémon favoritado?`.

