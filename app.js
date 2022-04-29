// Imports
import express from "express"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bodyParser from 'body-parser'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const port = 3000

const postData = {}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { text: 'This is EJS'})
})

app.get('/:senderId', (req, res) => {
    let details = req.params.senderId
    let detailsArr = details.split("+")
    let mobileNbr = "+"+detailsArr[1]
    let senderId = detailsArr[0]
    postData.senderId = senderId,
    postData.mobile = mobileNbr
    res.render('unsubscribe', { mobileNbr,senderId})
})

app.post('/marvel/addToDnd', (req, res) => { 
    console.log('Got body:', req.body);
    let mobile = req.body.mobile
    let senderId = req.body.senderId
    res.send({mobile,senderId});
})


//  Listen on port 3000
app.listen(port, () => console.info(`Listening on port http://localhost:${port}`))