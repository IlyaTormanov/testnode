const application = require("./root");
const {addUser} = require("./controllers/userController");


application.get('/comments',addUser)


