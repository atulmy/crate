// Imports
import jwt from 'jsonwebtoken'
import config from '../config/config.json'

// Authentication middleware
export default function (request, response, next) {
  let authToken = request.headers.authorization

  if (authToken && authToken !== null) {
    try {
      const token = authToken.split(' ')
      request.user = jwt.verify(token[1], config.secret)
    } catch (e) {
      console.warn('Invalid token detected.')
    }
  } else {
    request.user = {}
  }

  next()
}
