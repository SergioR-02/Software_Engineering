import { RowDataPacket } from 'mysql2';
import { MySQLDatabase } from '../database/mysql';
import { RegisterInput } from '../schemas/authSchemas';

interface User {
  user_id: number;
  email: string;
  password_hash: string;
  name: string;
  phone_number?: string;
  is_confirmed: boolean;
  is_active: boolean;
  role: 'user' | 'admin';
  created_at: Date;
  updated_at: Date;
}

export class UserModel {
  // Buscar un usuario por email
  static async getUserByEmail(email: string): Promise<User | null> {
    const db = await MySQLDatabase.getInstance();
    const connection = db.getConnection();
    const [rows] = await connection.query<RowDataPacket[]>('SELECT * FROM Users WHERE email = ?', [email]);
    return (rows[0] as User) || null;
  }

  // Crear un nuevo usuario en la base de datos
  static async createUser(input: RegisterInput): Promise<void> {
    const db = await MySQLDatabase.getInstance();
    const connection = db.getConnection();
    await connection.query('INSERT INTO Users (email, password_hash, name, phone_number) VALUES (?, ?, ?, ?)', [
      input.email,
      input.password,
      input.name,
      input.phone_number,
    ]);
  }
}
