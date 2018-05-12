// Imports
import { NODE_ENV, PORT } from '../config/env'

export default function (server) {
  console.info('SETUP - Start server..')

  server.listen(PORT, (error) => {
    if (error) {
      return console.error(error)
    } else {
      return console.info(`Server running on http://localhost:${ PORT } [${ NODE_ENV }]`)
    }
  })
}
