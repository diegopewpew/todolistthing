const express = require('express');
const math = require('./math.js');
const app = express();
const sql = require('mysql')
const db = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todo'
});

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('index', {
    name: 'Kent Bacatan'
  })
});

app.use(express.static('public'))

app.get('/about', (req, res) =>{
    res.render('modules/about/about', {
      usrimg: 'https://cdn.discordapp.com/attachments/481438733501988865/761505659787149332/kentraw.png',
      name: 'Kent Bacatan',
      body: 'Node page thing'
    })
})

app.get('/contact', (req, res) =>{
  res.render('modules/contact/contact', {
    title: 'Page ni doh',
    name: 'Kent :)',
    body: 'Node page thing'
  })
})

app.get('/todo', (req, res) =>{
  res.render('modules/todo/todolist', {
    objectHere: 'null'
  })
  db.connect()
  db.query('SELECT * from todolist', function (error, results, fields) {
    if (error) throw error;
    console.log(results)
  });
  db.end();
})

app.post('/todo', (req, res) =>{
  res.render('modules/todo/todolist')
})


app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});