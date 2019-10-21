const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const cors = require('cors');
const  sqlite3  =  require('sqlite3').verbose();


const  app  =  express();
const  router  =  express.Router();
app.use(cors());

router.use(bodyParser.urlencoded({ extended:  false }));
router.use(bodyParser.json());
const database = new sqlite3.Database("./my.db");

const  createEntriesTable  = () => {
    const  sqlQuery  =  `
        CREATE TABLE IF NOT EXISTS Entries (
        id integer PRIMARY KEY,
        latitude text,
        longitude text,
        temperature text,
        humidity text,
        particulate text,
        qualitative text)`;

    return  database.run(sqlQuery);
}

const  createEntry  = (entry, cb) => {
    return  database.run('INSERT INTO entries (latitude,longitude,temperature,humidity,particulate,qualitative) VALUES (?,?,?,?,?,?)',entry, (err) => {
        cb(err)
    });
};

createEntriesTable();

router.get('/', (req, res) => {
    res.status(200).send('This is a data server');
});

router.post('/entry', (req, res) => {

    const  latitude  =  req.body.latitude;
    const  longitude  =  req.body.longitude;
    const temperature = req.body.temperature;
    const humidity = req.body.humidity;
    const particulate = req.body.particulate;
    const qualitative = req.body.qualitative;
    console.log(req.body);

    createEntry([latitude, longitude, temperature, humidity, particulate, qualitative], (err)=>{
        if(err) return  res.status(500).send("Server error!");
});
});


app.use(router);
const  port  =  process.env.PORT  ||  3000;
const  server  =  app.listen(port, () => {
    console.log('Server listening at http://localhost:'  +  port);
}); 