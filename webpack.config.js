import path from 'path';

export default {
    mode: 'development',
    entry: { map: './src/lib/map.js',
    imageBox:'./src/lib/customDropzone.js' },
    
    output: {
        filename: '[name].js',
        path: path.resolve('src/public/js')
    }//Agregar el nombre del de arriba y extraerlo (js).
}