import { MySQLDatabase } from '../database/mysql';

export interface Image {
  image_url: string;
}

class ImageModel {
  //Guardar url de imagen
  async saveImage(image_url: string, report_id: number): Promise<void> {
    const db = await MySQLDatabase.getInstance();
    const connection = db.getConnection();
    await connection.query('INSERT INTO Images (image_url, report_id) VALUES (?, ?)', [image_url, report_id]);
  }
}
export default ImageModel;
