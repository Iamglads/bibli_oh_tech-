// controller
const mongoose = require('mongoose');
const fs = require('fs');

exports.homeLogin = (req, res) => {
    res.render("./log/login.html.twig");
}

exports.register = (req, res) => {
    res.render("./log/register.html.twig");
}