const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const PORT = config.get('port') || 8080

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
app.use('/api/movies', require('./routes/movies.routes'))

async function appStart () {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }, (err) => {
            if(err) {
                console.error(err)
                return
            }
        })

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    } catch (error) {
        console.log('Server error', error.message)
        process.exit(1)
    }
}

appStart()