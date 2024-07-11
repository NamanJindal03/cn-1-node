const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('request is coming here')
    res.render('home', {});
})

app.get('/about', (req, res) => {
    console.log('request is coming here')
    res.render('about', {name: 'naman', productArr: ['a', 'b', 'c', 'd']});
})

app.listen(3001, ()=>{
    console.log('server started at', 3001)
})

/* 
    app.get()
        res.json
        res.write/res.end 
        res.render('about', data)

*/
