// Imports
import path from 'path'
import multer from 'multer'

// App Imports
import config from '../config/config.json'

// Sync database tables and start server
export default function (server) {
  console.info('SETUP - Upload...')

  // Set destination
  const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'public', 'images', 'uploads'),

    filename: function (request, file, callback) {
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

  const upload = multer({
    storage: storage
  }).single('file')

  // Upload route
  server.post(config.upload.endpoint, (request, response) => {
    upload(request, response, function (error) {
      if (!error) {
        response.json({
          success: true,
          file: request.file.filename
        })
      } else {
        response.json({
          success: false,
          file: null
        })
      }
    })
  })
}