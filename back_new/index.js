const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const bodyParser = require('body-parser')
var cors = require('cors')
var util = require('util');


const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })


var userRouter = require('./routers/users.router');
var objectRouter = require('./routers/estate.router');
// var  user  =  require("./routers/user.router");

let now = new Date();

const PORT = process.env.PORT || 8080 // Порт Сервера


console.log('This is back-end server!')
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
// app.use(upload())
app.get('/' ,(req, res) => {
    res.send("This is back-end server! There's nothing to do here))")

})


app.use(express.json({limit: '25mb'}))

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.send(req.file.originalname)
})

app.use('/api', userRouter)
app.use('/api', objectRouter)
// app.use("/api/user",  user); 



app.listen(PORT, () =>
console.log("server is running..."))


console.log = function(d) { //
  // log_file.write(util.format(d) + '\n');
  // log_stdout.write(util.format(d) + '\n');
};

