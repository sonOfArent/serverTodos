import express from 'express'
import cors from 'cors'

const PORT = 5000

const app = express()

app.use(cors())

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))

app.get('/', (req, res) => res.send("Home Page"))