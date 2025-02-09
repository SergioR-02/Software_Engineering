import { RowDataPacket } from 'mysql2';
import { MySQLDatabase } from '../database/mysql';

export interface Object {
  report_id: number;
  title: string;
  description?: string;
  category: string;
  location: string;
  status: 'perdido' | 'encontrado';
  date_lost_or_found: Date;
}

class ObjectModel {
  // Obtener todos los objetos
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
        r.date_lost_or_found,
        r.description
      FROM Reports r
      JOIN Categories c ON r.category_id = c.category_id
      JOIN Locations l ON r.location_id = l.location_id
    `);
    return rows as Object[];
  }

  // Buscar objetos por categoría, ubicación, rango de fechas y palabras clave
  async searchObjects(
    category?: string,
    location?: string,
    startDate?: string,
    endDate?: string,
    keyword?: string,
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
        r.date_lost_or_found,
        r.description
      FROM Reports r
      JOIN Categories c ON r.category_id = c.category_id
      JOIN Locations l ON r.location_id = l.location_id
    `;

    const params: any[] = [];
    const conditions: string[] = [];

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
        const keywordConditions = keywords.map(() => '(r.title LIKE ? OR r.description LIKE ?)').join(' OR '); // Ahora busca cualquier palabra, no todas obligatoriamente

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
