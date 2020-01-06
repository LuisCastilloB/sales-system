
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
//Allow debug request 
app.use(morgan('dev'));
//Allow debug request in production enviroment
app.use(cors());
//Allow analys body data request for messages send by client
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), () => {
    console.log("Running server in port: " + app.get('port'));
});
