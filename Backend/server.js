const express = require('express');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./routes/authRouter');
const morgan = require('morgan');

// initializations
let app = express()

// settings


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

//routes
app.get('/', (req, res)=>{
    console.log(req.header)
    res.send({contenido:'OK'})
})
router.use(bodyParser.json())
app.use(router);
app.use(express.static(path.join(__dirname, '/public/')))
app.use('/underscore', express.static(path.join(
    __dirname,
    '/node_modules/underscore/underscore.js'
)))
    

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('App de entrenamiento');
    console.log(`Listening on port: ${PORT}`);
})

