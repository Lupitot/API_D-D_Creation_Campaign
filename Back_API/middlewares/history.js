// // history.js
// const path = require('path');
// const express = require('express');

// module.exports = function history(staticFolder) {
//   return (req, res, next) => {
//     if (req.path.includes('.')) {
//       // Si la requête est pour une ressource statique, passez au middleware suivant
//       next();
//     } else {
//       // Sinon, renvoyez l'index.html
//       res.sendFile(path.resolve(staticFolder, 'index.html'));
//     }
//   };
// };