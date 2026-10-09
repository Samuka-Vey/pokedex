# Pokédex

Aplicação web desenvolvida para a disciplina de Programação Web da Universidade Estadual do Piauí (UESPI), com o objetivo de consultar e explorar informações sobre Pokémon por meio do consumo de uma API REST pública.

## Integrantes

* Marcos Samuel Cornelio Barros
* 

## Descrição do Projeto

A Pokédex Simplificada permite listar, pesquisar, filtrar e visualizar informações detalhadas de Pokémon, consumindo dados em tempo real da [PokéAPI](https://pokeapi.co/).

A aplicação utiliza HTML5, CSS3, Tailwind CSS e JavaScript, sem a utilização de frameworks frontend ou backend.

O código JavaScript é organizado em módulos, separando as requisições à API, a renderização da interface e a lógica principal da aplicação.

## Funcionalidades

### RF01 - Listagem de Pokémon

* Exibição de uma lista de Pokémon ao iniciar a aplicação.  [ **Finalizado** ]
* Apresentação do nome, número de identificação (ID) e imagem de cada Pokémon. [ **Finalizado** ]

### RF02 - Pesquisa

* Pesquisa de Pokémon pelo nome.
* Busca sem diferenciação entre letras maiúsculas e minúsculas.
* Possibilidade de retornar à listagem original.

### RF03 - Detalhamento de Pokémon

Exibição das seguintes informações:

* Nome.
* Número de identificação (ID).
* Imagem.
* Tipo(s).
* Altura.
* Peso.
* Habilidades.
* Estatísticas básicas.

### RF04 - Consulta por Tipo

* Filtro de Pokémon por tipo.
* Consulta dos resultados por meio da PokéAPI.

### RF05 - Apresentação dos Dados

* Tratamento de imagens ausentes.
* Tratamento de dados inexistentes ou indisponíveis.
* Exibição legível de tipos e habilidades.
* Identificação clara das unidades de altura e peso.

## API Utilizada

### PokéAPI

API REST pública utilizada para consultar informações sobre Pokémon.

* **Documentação:** https://pokeapi.co/docs/v2
* **Site oficial:** https://pokeapi.co/
* **URL base:** https://pokeapi.co/api/v2

## Tecnologias Utilizadas

* **HTML5:** estruturação semântica da página.
* **CSS3:** estilização da interface.
* **Tailwind CSS:** utilitários de estilização.
* **JavaScript (ES Modules):** implementação da lógica da aplicação e modularização do código.
* **Fetch API:** realização de requisições HTTP assíncronas.
* **Async/Await:** tratamento de operações assíncronas.

## Estrutura do Projeto

```text
├── index.html
├── src/
│   ├── main.js
│   ├── services/
│   │   └── api.js
│   └── ui/
│       └── renderer.js
├── css/
│   └── styles.css
├── assets/
│   └── images/
└── README.md
```

### Organização dos Módulos

* **`src/main.js`:** ponto de entrada da aplicação, responsável por coordenar os eventos, as chamadas à API e a atualização da interface.
* **`src/services/api.js`:** módulo responsável pelas requisições HTTP, pela verificação das respostas e pela conversão dos dados JSON.
* **`src/services/pokemonService.js`:** módulo responsável por encapsular a lógica de negócio relacionada aos Pokémon, como listagem, pesquisa e filtragem.
* **`src/ui/renderer.js`:** módulo responsável pela renderização e atualização dos elementos da interface no DOM.
* **`css/styles.css`:** arquivo destinado às regras de estilização personalizadas.
* **`assets/images/`:** diretório destinado às imagens utilizadas pela aplicação.
* **`index.html`:** documento HTML principal da aplicação.

## Como Executar

### Pré-requisitos

* Navegador web atualizado.
* Visual Studio Code ou outro editor de código.
* Extensão Live Server ou outro servidor HTTP local.

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/repositorio.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd repositorio
   ```

3. Abra a pasta do projeto no Visual Studio Code.

4. Inicie o servidor local utilizando a extensão Live Server.

5. Acesse o endereço disponibilizado pelo servidor no navegador.

**Observação:** como a aplicação utiliza módulos JavaScript com `import` e `export`, recomenda-se executá-la por meio de um servidor HTTP local, evitando abrir o arquivo `index.html` diretamente pelo protocolo `file://`.

É necessária uma conexão com a internet para consultar a PokéAPI.

## Requisitos Atendidos

* Consumo de uma API REST pública em tempo de execução.
* Realização de requisições HTTP com a Fetch API.
* Utilização de operações assíncronas.
* Modularização do código JavaScript.
* Separação entre comunicação com a API, lógica da aplicação e renderização da interface.
* Interface responsiva.
* Utilização de HTML semântico.
* Acessibilidade básica.
* Tratamento de carregamento.
* Tratamento de erros nas requisições.
* Tratamento de ausência de resultados.
* Tratamento de dados indisponíveis.

## Informações Acadêmicas

**Universidade Estadual do Piauí (UESPI)**

* **Curso:** Tecnologia em Sistemas de Computação.
* **Disciplina:** Programação Web.
* **Professor:** Eyder Rios.
* **Atividade:** 1ª Avaliação, Trabalho de Implementação: Aplicação Web com API REST.
