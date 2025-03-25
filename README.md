# SportSee Frontend

SportSee est une application de suivi sportif développée avec React et Vite.

## Fonctionnalités

- ⚡️ Développement rapide avec Vite
- 🎨 Stylisme avec Sass
- ✅ Tests unitaires avec Jest et Testing Library
- 🛠️ Qualité de code avec ESLint et Prettier
- 📊 Visualisation des données avec Recharts
- 🔄 React Router pour la navigation

## Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [npm](https://www.npmjs.com/) (installé avec Node.js)

## Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/votre-utilisateur/sportsee-front.git
cd sportsee-front
npm install
```

Clonez également le backend disponible sur GitHub :

```bash
git clone https://github.com/LaurentBoyer1976/SportSee-Back.git
```

Suivez les instructions dans le dépôt backend pour démarrer le serveur.

## Développement

Démarrez le serveur de développement :

```bash
npm run dev
```

L'application sera disponible à l'adresse [http://localhost:5173](http://localhost:5173).

## Compilation des styles

Les fichiers Sass sont compilés en CSS. Pour compiler manuellement ou surveiller les changements :

- **Compilation unique :**
  ```bash
  npm run build:css
  ```

- **Surveillance des changements :**
  ```bash
  npm run watch:css
  ```

## Tests

Exécutez les tests unitaires avec Jest :

```bash
npm run test
```

## Linting et formatage

- **Linting avec ESLint :**
  ```bash
  npm run lint
  ```

- **Formatage avec Prettier :**
  ```bash
  npm run format
  ```

## Production

Créez une version de production optimisée :

```bash
npm run build
```

Le dossier `dist/` contiendra les fichiers prêts pour le déploiement.

## Déploiement

### Docker

Pour construire et exécuter l'application avec Docker :

```bash
docker build -t sportsee-app .
docker run -p 3000:3000 sportsee-app
```

### Déploiement manuel

Déployez le contenu du dossier `dist/` sur un serveur web ou une plateforme cloud.

## Structure du projet

```
src/
├── components/    # Composants React
├── pages/         # Pages de l'application
├── styles/        # Fichiers Sass et CSS
├── utils/         # Fonctions utilitaires
└── App.jsx        # Composant principal
```

## Outils et technologies

- **React** : Bibliothèque pour construire l'interface utilisateur.
- **Vite** : Outil de build rapide pour le développement.
- **Sass** : Préprocesseur CSS pour un stylisme avancé.
- **Jest** : Framework de tests unitaires.
- **ESLint** : Analyse statique pour la qualité du code.
- **Prettier** : Formatage automatique du code.
- **Recharts** : Bibliothèque pour les graphiques.

---

Développé avec ❤️ par l'équipe SportSee.
