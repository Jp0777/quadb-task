const express = require('express')
const app = express()
const requ = require('./src/request')

app.use(express.static('public'))
app.set("view engine", "ejs")

app.get('/', async (req, res) => {

    const result = await requ();
    const array = Object.keys(result)
    res.render("data", { result: result, array: array })
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})