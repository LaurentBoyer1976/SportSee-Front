export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Utilise Babel pour transformer les fichiers JS/JSX
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Fichiers de configuration supplémentaires
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // Mock des fichiers CSS/SCSS
  },
};
