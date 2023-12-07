import multer from 'multer'
import path from 'path'
import { generateID } from '../lib/tokens.js'

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './src/public/img/uploads')
    },
    filename:function(req, file, cb){
        cb(null,generateID()+path.extname(
            file.originalname
            ))
    }
})  

const upload = multer({
    storage
})

export default upload