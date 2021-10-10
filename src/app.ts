import express from "express"
import path from 'path'
const app :any = express()
const PORT: any = 3000

app.set('views',path.join(__dirname, path.sep, 'views'))
app.set('view engine', 'pug')

require('./routes/routes')(app)



app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`)
})