const express = require('express');
const path = require('path')
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000  // for deploy part this port is v.imp

// path for public static folders
// console.log(path.join(__dirname, '../public'))
const static_path = (path.join(__dirname, '../public'))
const template_path = (path.join(__dirname, '../templates/views'))
const partials_path = (path.join(__dirname, '../templates/partials'))

app.set('view engine', 'hbs');
app.set('views',template_path) //by default views ka path change ho gaya templates main
hbs.registerPartials(partials_path)

app.use(express.static(static_path))

// routes
app.get('/', (req,res) => {
    res.render('index') // views ke andhar jaega usse render karke show karega index ko
})

app.get('/about', (req,res) => {
    res.render('about')
})

app.get('/weather', (req,res) => {
    res.render('weather')
})

app.get('*', (req,res) => {
    res.render('404error',{
        errorMsg: 'Oops! page not found'
    })
})

app.listen(port, () => {
    console.log(`listening to the port no ${port}`)
})

// through these templates we can put views n partials file inside it