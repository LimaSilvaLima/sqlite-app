import { SQLiteDatabase } from 'expo-sqlite';

export async function initializeDatabase(database: SQLiteDatabase) {
    try {
        await database.execAsync(`
            CREATE TABLE IF NOT EXISTS products (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                quantity INTEGER NOT NULL
            );
        `);
    } catch (error) {
        console.error("Erro ao inicializar o banco de dados:", error);
    }
}
