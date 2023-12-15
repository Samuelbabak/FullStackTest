
//these arguments are handeled by sequelize
module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    //returns the logic for the table we desire
    return Posts
}