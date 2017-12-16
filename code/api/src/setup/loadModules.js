// Imports
import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

// Load express modules
export default function (server) {
  console.info('SETUP - Loading modules...')

  // Enable CORS
  server.use(cors())

  // Request body parser
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended: false}))

  // Request body cookie parser
  server.use(cookieParser())

  // Static files folder
  server.use(express.static(path.join(__dirname, '../', 'static')))

  // HTTP logger
  server.use(morgan('tiny'))
}