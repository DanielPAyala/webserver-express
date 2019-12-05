const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



// Middleware
app.get('/', (req, res) => {    
    res.render('home', {
        nombre: 'Daniel'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(port, () => console.log(`Escuchando por el puerto ${port}`));
