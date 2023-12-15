// instance of the frame work
const express = require('express');

// instance of express
// allows you to make api requests and start servers
const app = express();
//this allows for app to parse json objects
app.use(express.json());

const serverPort = 3001;
const db = require('./models');

//to create API, need to create like a URL to send post/request
//Routers 
//TODO learn more about how this works
const postRouter = require('./routes/Posts');

//this is the url that the router will deal with, will send and retreive to this address
app.use("/posts", postRouter);



//when we start out api, go through all tables in our models and ensure that they exist 
db.sequelize.sync().then(()=> {
    //starts api, pass in a port (4 digit number(port) to run server in), make sure its difference than react port
    app.listen( serverPort, () => {
        console.log("server running on port: " + serverPort);
    });
})


