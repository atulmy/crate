// Imports
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

// Load express modules
export default function(server) {
    console.info('SETUP - Loading modules...')

    // Enable CORS
    server.use(cors())

    // Request body parser
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({extended: false}))

    // Request body cookie parser
    server.use(cookieParser())

    // HTTP logger
    server.use(morgan('tiny'))
}