import multer from 'multer';
import * as url from 'url';
import fs from 'fs'
import path from 'path'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '..', 'images'));
    },
    filename: function (req, file, cb) {
        console.log('multer middleware log');
        console.log(file);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname + '-' + uniqueSuffix)
    }
})
  
export const upload = multer({ storage: storage })