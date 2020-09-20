const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../database/models')
const tokendata = require('../middleware/requireLogin')

router.get('/profile', tokendata, (req, res) => {
    res.send('Hi')
    comsole.log("profile page")
})
router.get('/profile/info', tokendata, (req, res) => {
    console.log(req.body)

    User.findById(req.body.user._id).then(() => {
        ({
            firstName = req.body.user.firstName,
            lastName = req.body.user.lastName,
            userName = req.body.user.userName,
            email = req.body.user.userName,
            phonenumber = req.body.user.phonenumber,
            profileImage = req.body.user.profileImage,
            role = req.body.user.role,
            priceRange = req.body.user.priceRange,
            feedBack = req.body.user.feedBack,
            rating = req.body.user.rating,
        })
    })


})
module.exports = router 