let express = require('express')

let app = express()

app.use(express.static(__dirname+'/dist/doni-dashbord'))

app.get('/*', (res, resp) => {
    resp.sendFile(__dirname+'/dist/doni-dashbord/index.html')
})

app.listen(process.env.PORT || 8080)