import { RowDataPacket } from 'mysql2';
import { MySQLDatabase } from '../database/mysql';

export interface Object {
  report_id: number;
  title: string;
  description?: string;
  category: string;
  location: string;
  status: 'perdido' | 'encontrado';
  contact_method: string;
  date_lost_or_found: Date;
  image_url?: string; // Nueva propiedad para la URL de la imagen
}

class ObjectModel {
  // Obtener todos los objetos con sus imágenes
  async getAllObjects(): Promise<Object[]> {
    const db = await MySQLDatabase.getInstance();
    const connection = db.getConnection();
    const [rows] = await connection.query<RowDataPacket[]>(`
      SELECT
        r.report_id,
        r.title,
        c.name AS category,
        r.status,
        l.name AS location,
        r.contact_method,
        r.date_lost_or_found,
        r.description,
        i.image_url
      FROM Reports r
      JOIN Categories c ON r.category_id = c.category_id
      JOIN Locations l ON r.location_id = l.location_id
      LEFT JOIN Images i ON r.report_id = i.report_id
    `);
    return rows as Object[];
  }

  // Obtener un objeto por su report_id con su imagen
  async getObjectById(report_id: number): Promise<Object | null> {
    const db = await MySQLDatabase.getInstance();
    const connection = db.getConnection();
    const [rows] = await connection.query<RowDataPacket[]>(
      `
      SELECT
        r.report_id,
        r.title,
        c.name AS category,
        r.status,
        l.name AS location,
        r.contact_method,
        r.date_lost_or_found,
        r.description,
        i.image_url
      FROM Reports r
      JOIN Categories c ON r.category_id = c.category_id
      JOIN Locations l ON r.location_id = l.location_id
      LEFT JOIN Images i ON r.report_id = i.report_id
      WHERE r.report_id = ?
    `,
      [report_id],
    );
    return (rows[0] as Object) || null;
  }

  // Buscar objetos por categoría, ubicación, rango de fechas y palabras clave
  async searchObjects(
    category?: string,
    location?: string,
    startDate?: string,
    endDate?: string,
    keyword?: string,
    status?: 'perdido' | 'encontrado',
    limit: number = 50,
    offset: number = 0,
  ): Promise<Object[]> {
    const db = await MySQLDatabase.getInstance();
    const connection = db.getConnection();

    let query = `
      SELECT
        r.report_id, 
        r.title,
        c.name AS category,
        r.status,
        l.name AS location,
        r.contact_method,
        r.date_lost_or_found,
        r.description,
        i.image_url
      FROM Reports r
      JOIN Categories c ON r.category_id = c.category_id
      JOIN Locations l ON r.location_id = l.location_id
      LEFT JOIN Images i ON r.report_id = i.report_id
    `;

    const params: any[] = [];
    const conditions: string[] = [];

    if (status) {
      conditions.push('r.status = ?');
      params.push(status);
    }

    // Filtrar por categoría
    if (category) {
      conditions.push('c.name = ?');
      params.push(category);
    }

    // Filtrar por ubicación
    if (location) {
      conditions.push('l.name = ?');
      params.push(location);
    }

    // Filtrar por rango de fechas
    if (startDate && endDate) {
      conditions.push('r.date_lost_or_found BETWEEN ? AND ?');
      params.push(startDate, endDate);
    }

    // Filtrar por palabras clave
    if (keyword) {
      const keywords = keyword.split(' ').filter((k) => k.trim() !== '');
      if (keywords.length) {
        const keywordConditions = keywords.map(() => '(r.title LIKE ? OR r.description LIKE ?)').join(' OR ');
        conditions.push(`(${keywordConditions})`);
        keywords.forEach((k) => {
          params.push(`%${k}%`, `%${k}%`);
        });
      }
    }

    if (conditions.length) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    query += ' LIMIT ? OFFSET ?';
    params.push(limit, offset);

    const [rows] = await connection.query<RowDataPacket[]>(query, params);
    return rows as Object[];
  }
}

export default ObjectModel;
