const express = require('express')
const postRouter = require('./PostRoute')
const app  = express()
const mongoose = require('mongoose')

app.use(express.json())

app.use('/post',postRouter)


app.get('*',(req,res)=>{
    res.send("<h2>404 Not found </h2>")
})

const PORT = process.env.PORT  || 8081

mongoose.
        connect('mongodb://localhost:27017/testcommerce', {useNewUrlParser: true, useUnifiedTopology: true})
            .then(()=>{
                app.listen(PORT,()=>{
                    console.log(`SERVER RUNNING AT ${PORT}`)
                })
            })
                .catch(e=>{
                    // console.log(e)

                    res.json({
                        'status':500,
                        msg:'something went wrong'

                    })
                })
