const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path')
const bodyParser = require('body-parser')
const urlencoded = bodyParser.urlencoded({extended:false});
const cors = require('cors')
const database = {
    name:'davvy',
    role:'GDSC lead',
    gender:'male',
    school:'UOA'
}
app.use(bodyParser.json())

app.listen(PORT,() =>{
    console.log(`server listening at port ${PORT}`)
})

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.use(cors({
    origin:'*'
}))

app.post('/fetchData',urlencoded,(req,res) =>{
    console.log('received api request')
    switch(req.body.requestName)
    {
        case 'davvy':
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.json(database);
    }
})