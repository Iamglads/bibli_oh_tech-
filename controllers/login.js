// controller
const mongoose = require('mongoose');
const fs = require('fs');

exports.loginProject = (req, res) => {
    res.render("./log/login.html.twig");
}

exports.registerProjetc = (req, res) => {
    res.render("./log/register.html.twig");
}