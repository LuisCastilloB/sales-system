
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express()
//Allow debug request 
app.use(morgan('dev'))
//Allow debug request in production enviroment
app.use(cors())
//Allow analys body data request for messages send by client
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set('port', process.env.PORT || 3000);
//Configure path for static public files
app.use(express.static(path.join(__dirname,"public")))


app.listen(app.get('port'), () => {
    console.log("Running server in port: " + app.get('port'))
    console.log(path.join(__dirname,"public"))
});
