const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv/config')

app.use(bodyParser.json())


//import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

mongoose.connect(
    process.env.DB_CONNECTION , 
    { useNewUrlParser: true }, 
    
    ()=>{
    console.log('connected to db')
})




app.get('/', (req, res) =>{
    res.send('hello world....')
})


app.listen(3000, (req, res) =>{
    console.log('we are listen at port 3000')
})