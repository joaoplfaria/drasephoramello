# Sorria Mais Ortho - Site Institucional

Site institucional da clínica odontológica **Sorria Mais Ortho**, da **Dra. Sephora Mello**, localizada em Palhoça/SC.

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
│   ├── ui/          # Componentes genéricos (Button, SectionTitle, ServiceCard)
│   ├── layout/      # Header, Footer
│   └── sections/    # Hero, About, Services, Schedule, Location
├── layouts/         # Layout base do Astro
├── pages/           # Página principal (single-page)
├── styles/          # CSS global e tema de cores
├── data/            # Dados centralizados da clínica
└── lib/             # Utilitários e helpers
public/
├── images/          # Logo e imagens estáticas
└── fonts/           # Fontes customizadas
```

## Deploy

O deploy é automático via GitHub Actions a cada push na branch `main`.

## Licença

[MIT](LICENSE)
