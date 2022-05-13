require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Person = require('./models/Person')


//para ler json
app.use(
    express.urlencoded({
        extended:true,
    })
)
app.use(express.json())

//rotas da api
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

// rota inicial/endpoint
app.get('/', (req, res)=> {


    res.json({message: "Oi Express!"})

})


const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)


//conectar com o banco
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.6fxqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(()=> {
    console.log('Conectamos ao banco!')
    //configurar uma porta
    app.listen(3000)
})
.catch((err)=> console.log(err))




