import {Dropzone} from "dropzone";

Dropzone.option.imageBox={
    dictDefaultMessage:"Please load the images about property",
    acceptedFiles:".png, .jpeg, .bmp, .svg",
    maxFileSize: 5,
    maxFiles: 1,
    paralleUploads: 1,
    autoProccessQueue: false
}