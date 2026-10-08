## Estrutura do projeto

```
pokedex/
├── index.html          # Página principal (HTML semântico)
├── README.md           # Documentação do projeto
├── .gitignore          # Arquivos ignorados pelo Git
├── css/
│   └── style.css       # Estilos, responsividade e acessibilidade
└── js/
    ├── main.js         # Ponto de entrada: eventos e fluxo geral da aplicação
    ├── api.js          # Requisições à PokéAPI (fetch)
    └── ui.js           # Renderização e atualização da interface (DOM)
```

| Arquivo | Responsabilidade |
|---------|------------------|
| `index.html` | Estrutura da página: busca, filtro por tipo, listagem e detalhes |
| `css/style.css` | Layout responsivo, foco visível e contraste adequado |
| `js/main.js` | Conecta eventos do usuário às funções de API e de interface |
| `js/api.js` | Consome a API em tempo de execução e trata as respostas |
| `js/ui.js` | Exibe listagem, detalhes e mensagens de carregamento, erro e ausência de resultados |