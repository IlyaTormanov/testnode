const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "thistlemr1144", {
    dialect: "mysql",
    host: "localhost",
    define: {
        timestamps: false
    }
});

sequelize.sync().then(result=>console.log(result))
    .catch(err=> console.log(err));

module.exports=sequelize
