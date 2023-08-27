const express = require('express')
const cors = require('cors')
const app = express() 
const PORT = process.env.PORT || 3044
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.json({
        message: 'WELCOME TO Result Website'
    })
})

app.listen(PORT, () => {
    console.log('server running on port ' + PORT)
})