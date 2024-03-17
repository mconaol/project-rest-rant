//Modules and Globals
require('dotenv').config();
const express= require('express'); 
const app= express(); 

//Express Settings
//app.set('views',_dirname +'/views')
app.set('view engine','jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json()); 


//Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res)=>{
    res.render('home')
})

app.get('*', (req, res)=>{
    res.render('error404')
})

//Listen for COnnections

app.listen(process.env.PORT)
