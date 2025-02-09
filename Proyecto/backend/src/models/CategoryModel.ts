import { RowDataPacket } from 'mysql2';
import { MySQLDatabase } from '../database/mysql';

export interface Category {
  category_id: number;
  name: string;
}

export class CategoryModel {
  // Obtener todas las categorías
  static async getAllCategories(): Promise<Category[]> {
    const db = await MySQLDatabase.getInstance();
    const connection = db.getConnection();
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM Categories');
    return rows as Category[];
  }
}
