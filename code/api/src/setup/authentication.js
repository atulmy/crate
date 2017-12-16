// Imports
import jwt from 'jsonwebtoken'
import config from '../config/config.json'

export default function (request, response, next) {
  let token = request.body.token || request.query.token || request.headers['x-access-token'] || request.cookies.token

  if (token && token !== null) {
    try {
      request.user = jwt.verify(token, config.secret)
    } catch (e) {

    }
  } else {
    request.user = {}
  }

  console.log(request.user)

  next()
}