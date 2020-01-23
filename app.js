const express  = require('express')
console.log('Hello there')


const port = process.env.PORT || 8000

const app = express()

app.get('',(req,res)=>{
    res.send('Hello heroku')
})

app.listen(port,()=>{
    console.log('server stared to port')
})