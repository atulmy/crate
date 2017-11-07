// Imports
import jwt from 'jsonwebtoken'

export default function (request, response, next) {
    console.log(request)

    let token = request.body.token || request.query.token || request.headers['x-access-token'] || request.cookies.token

    if(token && token !== null) {
        request.user = jwt.verify(token, config.secret)
    } else {
        request.user = {}
    }

    console.log(request.user)

    next()
}