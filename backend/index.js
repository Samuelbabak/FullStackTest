// instance of the frame work
const express = require('express');

// instance of express
// allows you to make api requests and start servers
const app = express();
const serverPort = 3001;

const db = require('./models');



//when we start out api, go through all tables in our models and ensure that they exist 
db.sequelize.sync().then(()=> {

    //starts api, pass in a port (4 digit number(port) to run server in), make sure its difference than react port
    //
    app.listen( serverPort, () => {
        console.log("server running on port: " + serverPort);
});
})


