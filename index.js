
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import router from './routes'

//DB Connect
mongoose.Promise = global.Promise
const dbUrl = "mongodb://localhost:27017/sales-system"
mongoose.connect(dbUrl, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
.then(mongoose => console.log('Conneting to DB in port 27017'))
.catch(err => console.log(err))

const app = express()
//Allow debug request 
app.use(morgan('dev'))
//Allow debug request in production enviroment
app.use(cors())
//Allow analys body data request for messages send by client
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//Router 
app.use('/api', router);


app.set('port', process.env.PORT || 3000);
//Configure path for static public files
app.use(express.static(path.join(__dirname,"public")))

app.listen(app.get('port'), () => {
    console.log("Running server in port: " + app.get('port'))
    console.log(path.join(__dirname,"public"))
});
