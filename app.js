const express = require('express')
const math = require('./math.js')
const app = express()
const sql = require('mysql')
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
const db = sql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todo'
});
db.connect()

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
  db.query('SELECT * from todolist', function (error, results, fields) {
    res.render('modules/todo/todolist', {
      rowobject: results
    })
    console.log(results)
  });
})

app.post('/todo', (req, res)=> {
  let content = req.body.entry;

  db.query(`INSERT INTO todolist(content) VALUES('${content}')`, (err, result, fields) => {
    if(err) {
      res.render('error', {
        title: `Error ${err.code}`,
        message: err.message,
        code: err.code
      });
    } else {
      res.redirect('/todo');
    }
  });
})


app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});