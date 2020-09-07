// route

const express = require('express');
const router = express.Router();

// multer upload 

const upload = require('../middleware/multer')

// authentification
//const auth = require('../middleware/auth');

// le fichier controller
const livreController = require('../controllers/livres');

router.get("/admin", livreController.getAllLivre);
router.get('/:id', livreController.getOneLivre);

router.post('/admin', upload.single("image"), livreController.postOneLivre); 

router.delete("/livres/:id", livreController.deleteOneLivre);
//router.put("/livres/:id", livreController.updateOneLivre);

module.exports = router;