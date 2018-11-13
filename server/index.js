require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

const items = require('./routes/api/items')
const user = require('./routes/api/user')

app.use('/api/items', items)
app.use('/api/user', user)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + '/public'));
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });  
}

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running at ${port}...`)
})

