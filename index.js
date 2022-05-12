const express = require('express')
const mongoose = require('mongoose')
const app = express()


//para ler json
app.use(
    express.urlencoded({
        extended:true,
    })
)
app.use(express.json())

// rota inicial/endpoint
app.get('/', (req, res)=> {


    res.json({message: "Oi Express!"})

})


const DB_USER = 'root'
const DB_PASSWORD = encodeURIComponent('pBBj23TDsmHqdKSK')


//conectar com o banco
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.6fxqw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(()=> {
    console.log('Conectamos ao banco!')
    //configurar uma porta
    app.listen(3000)
})
.catch((err)=> console.log(err))




