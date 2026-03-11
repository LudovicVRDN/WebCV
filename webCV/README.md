# 📄 WebCV

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)


Application **CV personnel moderne** en **React + TypeScript**. Sections profil, expériences, formations, compétences et contact. Responsive Tailwind, Dark Mode / Light Mode persistant, design pro portfolio.

**Auteur** : Ludovic Vourdon — Développeur Full Stack Junior, Bac+3 MEwo Metz 2026.

---

## 📋 Sommaire

- [Fonctionnalités](#-fonctionnalités)
- [Démarrage](#-démarrage)
- [Structure](#-structure)
- [Technologies](#-technologies)
- [Développement](#-développement)
- [Contribuer](#-contribuer)
- [Licence](#-licence)

---

## ✨ Fonctionnalités

- 👤 **Profil complet** : Présentation, compétences techniques, parcours reconversion
- 📱 **Responsive** : Mobile-first (Flexbox/Grid Tailwind)
- 🌙 **Dark Mode / Light Mode** : S'adapte au paramètre système défini
- 📄 **Sections dynamiques** : Expériences, formations, projets (React Hooks)
- ⚛️ **TypeScript strict** : Props et interfaces typées

---

## 🚀 Démarrage

```bash

git clone https://github.com/LudovicVRDN/WebCV.git
cd webCV
npm install
npm run dev
```

[![Demo](https://img.shields.io/badge/Demo-Live-green?style=for-the-badge&logo=netlify)](https://ludovicvourdoncv.netlify.app)

---

## 📁 Structure

```plaintext
WebCV/
├── webCV/
│   ├── dist/                    # Build Vite (généré automatiquement)
│   ├── node_modules/            # Dépendances npm (ne pas commiter)
│   ├── public/                  # Assets statiques
│   ├── src/
│   │   ├── components/          # Composants réutilisables (Header, Footer, Card...)
│   │   ├── pages/               # Pages (Home, About...)
│   │   ├── hooks/               # Hooks personnalisés (useTheme...)
│   │   ├── App.tsx              # Composant racine
│   │   └── main.tsx             # Point d'entrée React
│   ├── package.json
│   ├── tailwind.config.js       # Configuration Tailwind
│   ├── tsconfig.json            # Configuration TypeScript
│   └── vite.config.ts           # Configuration Vite
└── README.md
```

---

## 🛠️ Technologies

| Frontend | Outils | Build |
|----------|--------|-------|
| React 18 | TypeScript 5.4 | Vite |
| Tailwind CSS | React Hooks | ESBuild |

---

## 🔧 Développement

```bash
npm install           # Installer les dépendances
npm run dev           # Vite dev server (hot reload)
npm run build         # Build de production → dist/
```

---

## 🤝 Contribuer

1. Fork le repo
2. Crée une branche : `git checkout -b feat/pdf-export`
3. Commit : `git commit -m "feat: export CV PDF"`
4. Push + ouvre une PR

> **Guidelines** : TypeScript strict, Tailwind utility-first.

---

## 📄 Licence

MIT License — © Ludovic VRDN 2026

**Portfolio** : [github.com/LudovicVRDN](https://github.com/LudovicVRDN)
