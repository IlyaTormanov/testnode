
const express = require('express');
const application = express();


application.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
});
application.listen(3000);

module.exports=application



