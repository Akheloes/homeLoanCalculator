import express from 'express'
import apiRouter from './src_clean/Frameworks/Web/index.js'
import dependencies from './src_clean/config/projectDependencies.js'
import mustacheExpress from 'mustache-express'

const app = express()

app.engine('html', mustacheExpress())
app.set('view engine', 'html')
app.set('views', './src_clean/Frameworks/Web') // @TODOFO

const port = process.env.PORT || 3000

app.use('/', apiRouter(dependencies))

app.listen(port, () => console.log(`http://localhost:${port}`))