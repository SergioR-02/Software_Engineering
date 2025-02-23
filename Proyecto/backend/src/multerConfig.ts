import multer from 'multer';
import path from 'path';

// Configuración de Multer
const storage = multer.diskStorage({
  destination: (_req: any, _file: any, cb: any) => {
    const uploadPath = path.join(__dirname, 'uploads');
    console.log('Guardando archivos en:', uploadPath);
    cb(null, uploadPath);
  },
  filename: (_req: any, file: any, cb: any) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Nombre único para el archivo
  },
});

// Filtro para aceptar solo imágenes
const fileFilter = (_req: any, file: any, cb: any) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten imágenes'), false);
  }
};

const upload = multer({ storage, fileFilter });

export default upload;
