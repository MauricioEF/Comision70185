import multer from "multer";

import __dirname from  '../utils.js';

const multerOptions = {
    storage: multer.diskStorage({
        destination:function(req,file,cb){
            return cb(null,`${__dirname}/public/img`)
        },//Carpeta de destino del archivo
        filename:function(req,file,cb){
            return cb(null,`${Date.now()}-${file.originalname}`)
        },//El nuevo nombre del archivo
    })
}

const uploader = multer(multerOptions);

export default uploader;