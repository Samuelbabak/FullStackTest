# FullStackTest
practice with developing a full stack program



### Takeaways

## Topics

# npm
- define npm and its uses: //TODO//
- initialize npm using --npm init--
- install libraries using npm install express
- this projects is using
- - express
- - - why: 
- - cors
- - - why:
- - mysql2
- - - why:
- - sequelize, sequelize-cli
- - - why: allows for easy communication with database where there is no need to create your own sql queries
- - nodemon
- - - why: live refresh, so server is rerendered each time a change is made
- - axios
- - - why: axios makes working with apis easier


# node
- run json files with "node <fileName>"
index.js
- package.json defines index.js as the main program.


# SQL

## Questions
Q: what is an orm in terms of Databases and what are they used for?
A: orm stands for Object-Relational Mapping, orms are typically used to communicate to the database through software and convert information from different types.


# end of video 1 & 2 reflection
> structure of using npm
- - npm init - to initialize a project and install necessary files
- - npm install <package> - install packages you want to use
- - adding npm scripts, in the scripts section in "package.json" you can add json objects with a name and then string, later you can call "npm <name>" and it will execute the script
- - Nodemon is a widly used active refresh tool, whenever there is a change to any of the files it reruns the server with those changes

> Sequelize 
- - Sequelize is a orm that abstracts the need for creating your own sql queries, 
- - To use Sequelize you have to first modify the config.json file's development file to have access to your sql server, change the root, password, and table as necessary. Then you need to create a file inside of models and define your table structures like:

const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
- - I'm not sure if you always need to do this but in this tutorial he wrapped the app.listen with a sequelize.sync().then(), so that way the database exists before running, I think.

> router 
- - after creating an instance of the express framework you create an instance of the router with express.router() and use that to make apis calls
- - - this was done inside of a new folder named routes, which returned an instance of a new router
- - to sync the router with the main ?server? you have to use (where app is your main express instance) app.use("/posts", postRouter);


# end of video 3
- in this video he talked about creating the front end and having it use the Database endpoints.
## FrontEnd
> you can create react app with npx create-react-app in the dir that you want the app to be



