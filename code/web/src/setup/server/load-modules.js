// Imports
import path from 'path'
import Express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

// App Imports
import { NODE_ENV } from '../config/env'

export default function (app) {
  console.info('SETUP - Load modules..')

  // Request body parser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: false}))

  // Request body cookie parser
  app.use(cookieParser())

  // Public (static) files folder
  app.use(Express.static(path.join(__dirname, '..', '..', '..', 'public')))

  // HTTP logger
  if(NODE_ENV === 'development') {
    app.use(morgan('tiny'))
  }
}
