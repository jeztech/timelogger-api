const db = require("../../models");
const User = db.user;
const Role = db.role;
// const Businesses = db.businesses;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

// const { validateLoginData } = require('../utils/validators')
// const { validateSignupData } = require('../utils/validators')

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content");
};

exports.userBoard = (req, res) => {
    res.status(200).send("Users Content");
};

exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content");
};


exports.createRecord = async (req, res) => {
    const { fullName, email, phone, password } = req.body;
    User.create({
    ...req.body,
    password: bcrypt.hashSync(password, 8)
  })
    .then(user => {
        console.log(user)
      res.send({ message: "User was registered successfully!" });
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({ message: err.message });
    });
};

exports.updateRecordById = async (req, res) => {
    const { fullName, email, phone, password } = req.body;
    User.create({
    ...req.body,
    password: bcrypt.hashSync(password, 8)
  })
    .then(user => {
        console.log(user)
      res.send({ message: "User was registered successfully!" });
 
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({ message: err.message });
    });
};

exports.getAllRecords = async (req, res) => {
//   console.log('Sulod')
    User.findAll({
        // include: [{model: Businesses, as: 'business'}, {model: Role}]
    })
    .then(doc => {
      res.send(doc);
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({ message: err.message });
    });
};

exports.getRecordById = async (req, res) => {
    const { fullName, email, phone, password } = req.body;
    User.create({
    ...req.body,
    password: bcrypt.hashSync(password, 8)
  })
    .then(user => {
        console.log(user)
      res.send({ message: "User was registered successfully!" });
 
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({ message: err.message });
    });
};

exports.deleteRecordById = async (req, res) => {
    const { fullName, email, phone, password } = req.body;
    User.create({
    ...req.body,
    password: bcrypt.hashSync(password, 8)
  })
    .then(user => {
        console.log(user)
      res.send({ message: "User was registered successfully!" });
 
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({ message: err.message });
    });
};