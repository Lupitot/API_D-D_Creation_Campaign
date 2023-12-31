// historyModeMiddleware.js
const path = require('path');
const express = require('express');

module.exports = function historyModeMiddleware(staticFolder) {
  return (req, res, next) => {
    if (req.path.includes('.')) {
      // Si la requête est pour une ressource statique, passez au middleware suivant
      next();
    } else {
      // Sinon, renvoyez l'index.html
      console.log(path.resolve(__dirname, '../frontapi/dist'));
      res.sendFile(path.resolve(staticFolder, 'index.html'));
    }
  };
};