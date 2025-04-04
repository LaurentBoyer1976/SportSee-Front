# SportSee Frontend

SportSee est une application de suivi sportif développée avec **React** et **Vite**. Elle permet de visualiser des données d'activité physique grâce à des graphiques interactifs.

---

## Fonctionnalités

- ⚡️ **Développement rapide** avec Vite
- 🎨 **Stylisme avancé** avec Sass
- ✅ **Tests unitaires** avec Jest et Testing Library
- 🛠️ **Qualité de code** assurée avec ESLint et Prettier
- 📊 **Visualisation des données** avec Recharts
- 🔄 **Navigation fluide** avec React Router

---

## Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [npm](https://www.npmjs.com/) (installé avec Node.js)

---

## Installation

1. Clonez le dépôt frontend et installez les dépendances :

   ```bash
   git clone https://github.com/votre-utilisateur/sportsee-front.git
   cd sportsee-front
   npm install
   ```

2. Clonez également le backend disponible sur GitHub :

   ```bash
   git clone https://github.com/LaurentBoyer1976/SportSee-Back.git
   ```

3. Suivez les instructions dans le dépôt backend pour démarrer le serveur.

---

## Développement

Démarrez le serveur de développement pour le frontend :

```bash
npm run dev
```

L'application sera disponible à l'adresse [http://localhost:5173](http://localhost:5173).

---

## Documentation des composants

### Structure des composants

```
src/
├── components/    # Composants React
│   ├── header.jsx         # Composant pour l'en-tête
│   ├── aside.jsx          # Composant pour la barre latérale
│   ├── barChart.jsx       # Composant pour le graphique en barres
│   ├── radarChart.jsx     # Composant pour le graphique radar
│   ├── radialChart.jsx    # Composant pour le graphique radial
│   ├── keyDataCard.jsx    # Composant pour les cartes de données clés
│   └── login.jsx          # Composant pour la page de connexion
├── pages/         # Pages de l'application
│   ├── profile.jsx        # Page principale du profil utilisateur
│   └── error.jsx          # Page 404
├── utils/         # Fonctions utilitaires
│   ├── api.js            # Gestion des appels API
│   ├── formatData.js     # Formatage des données
└── main.jsx        # Composant principal
```

### Description des principaux composants

#### **Header**
- Affiche l'en-tête de l'application avec le logo et les liens de navigation.

#### **Aside**
- Barre latérale contenant les icônes de navigation pour accéder aux différentes sections.

#### **BarChart**
- Affiche un graphique en barres représentant les calories brûlées et le poids quotidien.

#### **RadarChart**
- Affiche un graphique radar pour visualiser les performances de l'utilisateur dans différentes catégories (Cardio, Intensité, etc.).

#### **RadialChart**
- Affiche un graphique radial représentant le score quotidien de l'utilisateur.

#### **KeyDataCard**
- Affiche des cartes contenant des données clés comme les calories, protéines, glucides et lipides.

#### **Login**
- Page de connexion permettant à l'utilisateur de s'authentifier.

---

## Fonctionnement des appels API

### Endpoints disponibles

1. **Récupération des informations utilisateur :**
   - **Endpoint** : `/user/:id`
   - **Description** : Récupère les informations générales de l'utilisateur (nom, score, etc.).
   - **Exemple de réponse** :
     ```json
     {
       "data": {
         "id": 12,
         "userInfos": {
           "firstName": "Karl",
           "lastName": "Dovineau",
           "age": 31
         },
         "score": 0.12,
         "keyData": {
           "calorieCount": 1930,
           "proteinCount": 155,
           "carbohydrateCount": 290,
           "lipidCount": 50
         }
       }
     }
     ```

2. **Récupération des activités quotidiennes :**
   - **Endpoint** : `/user/:id/activity`
   - **Description** : Récupère les données d'activité quotidienne (poids, calories brûlées).
   - **Exemple de réponse** :
     ```json
     {
       "data": {
         "userId": 12,
         "sessions": [
           { "day": "2020-07-01", "kilogram": 80, "calories": 240 },
           { "day": "2020-07-02", "kilogram": 80, "calories": 220 }
         ]
       }
     }
     ```

3. **Récupération des performances :**
   - **Endpoint** : `/user/:id/performance`
   - **Description** : Récupère les performances de l'utilisateur dans différentes catégories.
   - **Exemple de réponse** :
     ```json
     {
       "data": {
         "userId": 12,
         "kind": {
           "1": "cardio",
           "2": "energy",
           "3": "endurance",
           "4": "strength",
           "5": "speed",
           "6": "intensity"
         },
         "data": [
           { "value": 80, "kind": 1 },
           { "value": 120, "kind": 2 }
         ]
       }
     }
     ```

4. **Récupération des sessions moyennes :**
   - **Endpoint** : `/user/:id/average-sessions`
   - **Description** : Récupère les sessions moyennes de l'utilisateur.
   - **Exemple de réponse** :
     ```json
     {
       "data": {
         "userId": 12,
         "sessions": [
           { "day": 1, "sessionLength": 30 },
           { "day": 2, "sessionLength": 40 }
         ]
       }
     }
     ```

---

## Fonctionnement des routes dans le navigateur

Lors de l'utilisation de l'application frontend, les routes affichées dans le navigateur suivent un format propre et convivial, tel que :

```
http://localhost:5173/
```

Ce design garantit que les points de terminaison réels de l'API (par exemple, `/user/:id`, `/user/:id/activity`) ne sont pas exposés directement dans la barre d'adresse du navigateur. Cette approche améliore la sécurité des données en abstrayant la structure de l'API backend pour l'utilisateur final. Tous les appels API sont gérés en interne par l'application frontend, assurant une expérience utilisateur fluide et sécurisée.

---

## Formatage des données

Les données brutes récupérées via les API sont formatées avant d'être utilisées dans les composants. Voici un exemple de formatage :

### Exemple : Formatage des performances

```js
export const formatPerformanceData = (data) => {
  const kindMapping = {
    1: "Cardio",
    2: "Énergie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité",
  };

  return data.map((item) => ({
    value: item.value,
    kindName: kindMapping[item.kind],
  }));
};
```

---

## Tests

Exécutez les tests unitaires avec Jest :

```bash
npm run test
```

---

## Linting et formatage

- **Linting avec ESLint :**

  ```bash
  npm run lint
  ```

- **Formatage avec Prettier :**

  ```bash
  npm run format
  ```

---

## Production

Créez une version de production optimisée :

```bash
npm run build
```

Le dossier `dist/` contiendra les fichiers prêts pour le déploiement.

---

## Déploiement

### Docker

Pour construire et exécuter l'application avec Docker :

```bash
docker build -t sportsee-app .
docker run -p 3000:3000 sportsee-app
```

### Déploiement manuel

Déployez le contenu du dossier `dist/` sur un serveur web ou une plateforme cloud.

---

## Contribution

Les contributions sont les bienvenues ! Si vous souhaitez contribuer, veuillez ouvrir une issue ou soumettre une pull request.

---

## Licence

Ce projet est sous licence MIT.

---

Développé avec ❤️ par l'équipe SportSee.
