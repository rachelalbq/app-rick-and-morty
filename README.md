Projeto Angular - Detalhes dos Personagens

# Descrição
Este projeto é uma aplicação Angular que exibe detalhes de personagens. A aplicação utiliza a API de um serviço externo para obter os dados dos personagens e apresenta-os em uma interface amigável ao usuário.

# Estrutura do Projeto
src/app/pages/characters-details-page/characters-details-page.component.ts: Componente que exibe os detalhes de um personagem.
src/app/pages/characters-page/characters-page.component.ts: Componente que exibe a lista de personagens.
src/app/services/character.service.ts: Serviço responsável por realizar chamadas HTTP para obter os dados dos personagens.
src/app/shared/components/form-search/form-search.component.ts: Componente de input
src/app/shared/components/header/header.component.ts: Componente de header
src/app/shared/interfaces/character.ts: Classes typescript

# Dependências
O projeto utiliza as seguintes dependências:
Angular version 17.3.0
Bootstrap version 5.3.3
NgxLoadingModule version 17.0.0

# Componentes
CharactersDetailsPageComponent
Responsável por exibir os detalhes de um personagem. Este componente utiliza ActivatedRoute para obter o ID do personagem da URL e chama o CharacterService para buscar os detalhes do personagem.

CharactersPageComponent
Responsável por exibir a lista de personagens. Utiliza o CharacterService para buscar a lista de personagens e exibi-los na tela.

# Serviços
CharacterService
Serviço que lida com as requisições HTTP para a API de personagens. Inclui métodos para buscar a lista de personagens e os detalhes de um personagem específico.

# Testes
Os testes são escritos utilizando o framework de testes Jasmine e são executados no navegador Chrome.

Testes do CharactersDetailsPageComponent
Verifica se o componente é criado corretamente e se os detalhes do personagem são carregados corretamente a partir do serviço.

# Configuração e Execução
Instalação
Clone o repositório
Instale as dependências utilizando npm install
Execução
Para iniciar o servidor de desenvolvimento, execute ng serve
Para executar os testes, utilize ng test
