const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

const user=require('./route/user-route')
const exchange=require('./route/exchange-route')


const bodyPaser=require('body-parser')

app.use(bodyPaser.json())
app.use(bodyPaser.urlencoded({extends:true}))

app.use('/user',user)
app.use('/exchange',exchange)


app.listen(port, () => {
  console.log('Server Start')
})