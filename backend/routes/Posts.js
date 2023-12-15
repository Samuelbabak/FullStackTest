//contains routing system implemented into the frame work
const express = require('express');
const router = express.Router();
const { Posts } = require('../models')

//this is how you structure using the router to retrive something from the database
router.get("/", async (req, res) => {
    //generates sql to find all variables of tables and return list
    //when using sequelize you have to use await
    const listOfPosts = await Posts.findAll();
    //this sends Hello World to the router 
    res.json(listOfPosts);
});

//this is how you send a post request
router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);

});

module.exports = router;