// Imports
import path from 'path'
import Express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

export default function (app) {
  console.info('SETUP - Load modules..')

  // Request body parser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: false}))

  // Request body cookie parser
  app.use(cookieParser())

  // Public (static) files folder
  app.use(Express.static(path.join(__dirname, '..', '..', '..', 'public')))
}
