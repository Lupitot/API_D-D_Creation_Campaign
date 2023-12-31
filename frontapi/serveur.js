const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();

// Utilisez le middleware connect-history-api-fallback
app.use(history());

// Servez les fichiers statiques de votre application Vue.js à partir du dossier dist
app.use(express.static(path.join(__dirname, 'dist')));

// Démarrez le serveur
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});