// const { hashSync, compare, compareSync } = require('bcrypt');
var db = require('../config/config');
var bcrypt = require("bcrypt");
var { hashSync, compare, compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');

var User = db.user;

//Create User
var createUser = async (req, res) => {
    try {
        const userExist = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!userExist) {
            console.log("in backend sign ", req.body);
            const data = {
                ...req.body,
                password: hashSync(req.body.password, 10)
            }
            let newUser = await User.create(data);
            res.status(200).json(newUser);
        } else {
            res.status(500).json("User all Ready Created");
        }
    } catch (erroror) {
        res.status(500).json(erroror);
    }
}

//Login
var loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        console.log("in backend login data ", user)
        if (user) {
            let comparePassword = await bcrypt.compare(req.body.password, user.password);
            console.log(comparePassword);
            if (comparePassword) {
                const payload = {
                    firstName: req.body.firstName,
                    id: user.id
                }
                const token = jwt.sign(payload, "Random String", { expiresIn: "1d" })
                // to set the generated token to header
                // res.set('Authorization', 'Bearer ' + token);
                // const val = 'Bearer ' + token;
                // localStorage.setItem('token',val);
                return res.status(200).json({
                    sucess: true,
                    message: "Authenticated!,User Login Successfuly",
                    token: "Bearer "+token

                })
            } else {
                return res.status(401).json({ erroror: 'Password Incorrect' })
            }
        } else {
            res.status(404).json({
                message: "User does not exist"
            });
        }
    } catch (erroror) {
        res.status(500).json({
            message: erroror
        });
    }
}

// const axios = require('axios');

var dashboard = async (req, res) => {
    try {
        // Retrieve token from localStorage

        // Pass config as an option to User.findAll
        const d = await User.findAll();

        console.log("data is ", d);
        return res.status(200).json({
            user: d
        });
    } catch (error) {
        console.erroror("erroror:", error);
        return res.status(500).json({
            message: "Internal Server erroror dashboard"
        });
    }
};

var editUser = async (req, res) => {
    try {
        console.log("in backend editUser")
        const oldObj = await User.update({ email: "lion@123gmail.com" }, { where: { id: 3 } })
        console.log(oldObj);
        return res.status(200).json(oldObj);
    } catch (error) {
        console.log("erroror:", error);
        return res.status(500).json({
            message: "Internal Server erroror editUser"
        })
    }
}
module.exports = {
    createUser,
    loginUser, dashboard, editUser
}