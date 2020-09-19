const sequelize = require('../dbConnection')

const Comment=sequelize.define('comments',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true
    },
    content:{
        type:sequelize.STRING,
        allowNull:false
    }
})


module.exports=Comment