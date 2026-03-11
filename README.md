# TibiaHelp

Plataforma de apoio para jogadores de Tibia com ferramentas, guias e recursos para melhorar a experiência no jogo.

## Tecnologias

- **React 19** com TypeScript
- **Vite 7** como bundler
- **React Router DOM 7** para rotas
- **React Icons** (io5) para ícones

## Funcionalidades

- Página inicial com principais funcionalidades (Buscar Quests, Mapa Interativo, Calculadora, Guias)
- Calculadora de Exercise Weapon (`/exercise-weapon`)
- Alternância entre modo claro e escuro (persistido em `localStorage`)
- Sistema de design baseado em tokens CSS para consistência visual
- Layout responsivo com header fixo no topo e footer fixo na base

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial |
| `/home` | Página inicial |
| `/exercise-weapon` | Calculadora de Exercise Weapon |
| `*` | Página 404 |

## Scripts

```bash
# Desenvolvimento (servidor local)
npm run dev

# Build para produção
npm run build

# Visualizar build de produção
npm run preview
```

## Estrutura do projeto

```
src/
├── Components/        # Componentes reutilizáveis
│   ├── GeneralHeader/ # Cabeçalho com logo, toggle de tema e login
│   ├── GeneralFooter/ # Rodapé
│   ├── Layout/        # Layout principal (header + outlet + footer)
│   └── buttons/       # Botões (Orange, White, Functionality)
├── contexts/          # Contextos React (ThemeContext)
├── pages/             # Páginas
│   ├── home/
│   ├── exerciseWeapon/
│   └── notFound/
├── services/          # Serviços
├── styles/            # Tokens e temas CSS
│   ├── colorToken.css
│   ├── textToken.css
│   ├── styleToken.css
│   └── themes.css
└── Media/             # Assets (logos, ícones)
```

## Observação

Este site não é afiliado à CipSoft.
