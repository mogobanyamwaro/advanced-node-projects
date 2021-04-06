let express = require('express');
let app = express();
const personRoute = require('./routers/person')
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use((req, res,next)=>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next();
})
app.use('/',personRoute)
app.use(express.static('public'))

const PORT = process.env.PORT || 3000
app.listen(PORT,console.info(`server started at ${PORT}`))