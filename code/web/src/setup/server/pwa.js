// Imports
import fs from 'fs'
import path from 'path'

// App Imports
import { APP_URL, NODE_ENV } from '../config/env'
import view from './view'

// Write index.html
fs.writeFileSync(path.join(__dirname, '..', '..', '..', 'public', 'index.html'), view(APP_URL, NODE_ENV))
