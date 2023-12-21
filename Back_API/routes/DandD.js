const express = require('express');
const router = express.Router();
const dandDController = require('../controllers/DandD');
const logger = require('../middlewares/logger');
const auth = require('../middlewares/auth');


// Routes CRUD
router.get('/:id', logger, auth, dandDController.getDandD); // GET = READ = LECTURE
router.get('/get', logger, auth, dandDController.getDandDList);
router.post('/post', logger, auth, dandDController.createCampagne); // POST = CREATE = CREATION
router.put('/:id', logger, auth, dandDController.updateDandD); // PUT = UPDATE = MODIFICATION
router.delete('/:id', logger, auth, dandDController.deleteDandD); // DELETE = DELETE = SUPPRESSION


module.exports = router;