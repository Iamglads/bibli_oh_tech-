const multer = require('multer')
const fs = require('fs');

/*
=========================================
            Parametrage multer 
=========================================
*/

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/'); // chemin pour récuperer les images 
    },
    // nom images
    filename: function (req, file, cb) {
        let date = new Date().toLocaleDateString();
        cb(null, date + "-" + Math.round(Math.random() * 1000) + "-" + file.originalname);
    }
})

// indiquer quel type de fichier accepter 
const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.minetype === "image/png") {
        cb(null, true); // accepter le fichier
    } else {
        cb(new Error("l'image n'est pas acceptée"), false);
    }
}
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter : fileFilter
})
/*
=========================================
            Parametrage multer fin 
=========================================
*/


module.exports = upload