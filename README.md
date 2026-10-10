# Pokédex Simplificada

Aplicação web desenvolvida para a disciplina de Programação Web da Universidade Estadual do Piauí (UESPI), com o objetivo de consultar e explorar informações sobre Pokémon utilizando uma API REST pública.

## Integrantes

- Marcos Samuel Cornelio Barros
- Ian Caio Pinheiro da Frota

## Descrição do Projeto

A Pokédex Simplificada permite pesquisar, listar e visualizar informações detalhadas de Pokémon consumindo dados em tempo real da API utilizada.

A aplicação foi desenvolvida utilizando HTML5, CSS/Tailwind CSS e JavaScript/TypeScript, sem utilização de frameworks frontend ou backend.

## Funcionalidades

### RF01 - Listagem de Pokémon
- Exibição de uma lista de Pokémon ao iniciar a aplicação.
- Apresentação do nome, número e imagem de cada Pokémon.

### RF02 - Pesquisa
- Pesquisa de Pokémon pelo nome.
- Busca sem diferenciação entre letras maiúsculas e minúsculas.
- Possibilidade de retornar à listagem original.

### RF03 - Detalhamento de Pokémon
Exibição das seguintes informações:

- Nome
- Número (ID)
- Imagem
- Tipo(s)
- Altura
- Peso
- Habilidades
- Estatísticas básicas

### RF04 - Consulta por Tipo
- Filtro de Pokémon por tipo.
- Resultados obtidos diretamente da API.

### RF05 - Apresentação dos Dados
- Tratamento de imagens ausentes.
- Tratamento de dados inexistentes.
- Exibição legível de tipos e habilidades.
- Identificação clara de altura e peso.

## API Utilizada

### PokéAPI

Documentação:
https://pokeapi.co/docs/v2

Site:
https://pokeapi.co

## Tecnologias Utilizadas

- HTML5
- CSS3
- Tailwind CSS
- JavaScript / TypeScript
- Fetch API

## Estrutura do Projeto

```text
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── api.js
│   ├── main.js
│   └── ui.js
├── assets/
│   └── images/
└── README.md
```

## Como Executar

1. Clone o repositório:

```bash
git clone https://github.com/usuario/repositorio.git
```

2. Acesse a pasta do projeto:

```bash
cd repositorio
```

3. Abra o arquivo `index.html` no navegador.

Ou utilize uma extensão como **Live Server** no VS Code.

## Requisitos Atendidos

- Consumo de API REST em tempo de execução.
- Operações assíncronas com Fetch API.
- Interface responsiva.
- HTML semântico.
- Acessibilidade básica.
- Tratamento de carregamento.
- Tratamento de erros.
- Tratamento de ausência de resultados.
- Tratamento de dados ausentes.

## Disciplina

**Programação Web**  
Professor: Eyder Rios

**Universidade Estadual do Piauí (UESPI)**  
Curso de Tecnologia em Sistemas de Computação

**1ª Avaliação - Trabalho de Implementação com API REST**