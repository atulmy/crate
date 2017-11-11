// App Imports
import config from '../config/config.json'

// Sync database tables and start server
export default function(server) {
    console.info('SETUP - Starting server...')

    // Start web server
    server.listen(config.port, (error) => {
        if(error) {
            console.error('ERROR - Unable to start server.')
        } else {
            console.info(`INFO - Server started on port ${ config.port }.`)
        }
    })
}