# Pokédex Simplificada

Aplicação web desenvolvida para a disciplina de Programação Web da Universidade Estadual do Piauí (UESPI). Ela permite pesquisar, listar, filtrar por tipo e consultar detalhes de Pokémon, com dados obtidos em tempo de execução da PokéAPI.

O projeto usa apenas HTML5, CSS3 e JavaScript puro (módulos ES), sem frameworks, backend ou banco de dados.

## Integrantes

- Marcos Samuel Cornelio Barros
- Ian Caio Pinheiro da Frota

## Funcionalidades

- **Listagem inicial (RF01):** ao abrir a aplicação, é exibida uma lista paginada de Pokémon, cada um em um card com nome, número e imagem.
- **Pesquisa por nome (RF02):** busca sem diferenciar maiúsculas de minúsculas, com opção de voltar à listagem anterior.
- **Detalhamento (RF03):** ao selecionar um Pokémon, um modal mostra nome, número, imagem, tipo(s), altura, peso, habilidades e estatísticas básicas.
- **Consulta por tipo (RF04):** filtro por tipo (fogo, água, planta etc.), com resultados vindos da API.
- **Apresentação dos dados (RF05):**
  - altura exibida em metros (m) e peso em quilogramas (kg);
  - tipos e habilidades com nomes legíveis;
  - imagem alternativa quando o Pokémon não possui imagem;
  - dados ausentes tratados, sem exibir `undefined` ou `null`.
- **Estados da interface:** feedback de carregamento, mensagem de "nenhum resultado" e mensagem de erro de comunicação com a API.

## API Utilizada

**PokéAPI** — API REST pública e gratuita com dados sobre Pokémon, tipos, habilidades, estatísticas e sprites.

- Site: https://pokeapi.co
- Documentação: https://pokeapi.co/docs/v2

## Tecnologias

- HTML5 semântico
- CSS3
- JavaScript (ES Modules)
- Fetch API com `async/await`

## Estrutura do Projeto

```text
pokedex/
├── index.html
├── README.md
├── .gitignore
└── src/
    ├── main.js                    # ponto de entrada e coordenação dos eventos
    ├── assets/
    │   └── imgs/                  # imagens locais (ex.: imagem de fallback)
    ├── css/
    │   └── style.css              # estilos da aplicação
    ├── service/
    │   ├── api.js                 # requisições HTTP à PokéAPI (fetch)
    │   └── pokemonService.js      # regras de negócio e tratamento dos dados da API
    └── ui/
        ├── pokemonCard.js         # card de cada Pokémon na listagem
        ├── pokemonModal.js        # modal com os detalhes do Pokémon
        ├── pokemonPagination.js   # controles de paginação
        ├── pokemonSelector.js     # seleção/filtro por tipo
        └── renderer.js            # renderização da interface e estados (carregando, erro, vazio)
```

### Organização do código

- **`service/`** cuida da comunicação com a API e do tratamento dos dados, sem manipular o DOM.
- **`ui/`** cuida da interface: cria elementos, atualiza a tela e exibe os estados.
- **`main.js`** liga as duas camadas, registrando eventos e chamando os serviços e a renderização.

## Como Executar

Como o projeto usa módulos ES, ele deve ser servido por um servidor local (abrir o `index.html` diretamente com `file://` pode bloquear os módulos).

1. Clone o repositório:

```bash
git clone https://github.com/usuario/repositorio.git
```

2. Acesse a pasta do projeto:

```bash
cd repositorio
```

3. Inicie um servidor local, por exemplo:

- **VS Code:** instale a extensão **Live Server**, clique com o botão direito em `index.html` e escolha *Open with Live Server*; ou
- **Python:**

```bash
python -m http.server 8000
```

e acesse `http://localhost:8000`; ou
- **Node.js:**

```bash
npx serve .
```

É necessário ter conexão com a internet, pois os dados são consultados na PokéAPI em tempo de execução.

## Requisitos Atendidos

- Consumo de API REST em tempo de execução, sem dados estáticos ou simulados.
- Operações assíncronas com `fetch` e `async/await`.
- Tratamento de carregamento, sucesso, ausência de resultados, entradas inválidas e erros de comunicação.
- Interface responsiva e HTML semântico.
- Acessibilidade básica: controles com rótulos, foco visível e contraste adequado.
- Identificadores técnicos em inglês e textos da interface em português.

## Disciplina

**Programação Web** — Professor: Eyder Rios  
Universidade Estadual do Piauí (UESPI) — Curso de Tecnologia em Sistemas de Computação  
1ª Avaliação — Trabalho de Implementação: Aplicação Web com API REST (Problema 5 — Pokédex Simplificada)<br>
Arquivo: pweb-aval1-prob05.pdf