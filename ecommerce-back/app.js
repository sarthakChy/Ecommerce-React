const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const port = 5000 || process.env.PORT 

const app = express()

//middleware
dotenv.config()
app.use(cors())
app.use(express.json())

//pages
app.use('/api/v1/user', userRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/product',productRoute)
app.use('/api/v1/cart',cartRoute)
app.use('/api/v1/order',orderRoute)

//Connections
const startConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            app.listen(port, ()=> console.log('listening to backend'))
        })
        .catch((err)=>{
            console.log(err)
        })
    
}

startConnection()