# Dra. Sephora Mello - Site Institucional

Site institucional da clínica odontológica da Dra. Sephora Mello.

## Tech Stack

- [Astro](https://astro.build/) - Framework web para sites de conteúdo
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework CSS utilitário
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [GitHub Pages](https://pages.github.com/) - Hospedagem

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build local
npm run preview
```

## Estrutura do Projeto

```
src/
├── components/
│   ├── ui/          # Componentes genéricos (Button, Card, etc.)
│   ├── layout/      # Header, Footer, Navigation
│   └── sections/    # Seções de página (Hero, About, Services)
├── layouts/         # Layouts base do Astro
├── pages/           # Páginas (roteamento baseado em arquivos)
├── styles/          # CSS global e variáveis de tema
├── data/            # Dados estáticos (tratamentos, FAQ, etc.)
└── lib/             # Utilitários e helpers
public/
├── images/          # Imagens estáticas (hero, treatments, team)
└── fonts/           # Fontes customizadas
```

## Deploy

O deploy é automático via GitHub Actions a cada push na branch `main`.

O site fica disponível em: https://joaoplfaria.github.io/drasephoramello

## Licença

[MIT](LICENSE)
