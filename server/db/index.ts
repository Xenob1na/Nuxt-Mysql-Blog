import mysql from 'mysql2/promise';

interface Options {
    query: string,
    values?: any[]
}


const pool = mysql.createPool({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE
});
 
export const sql = async ({query, values}: Options) => {
    const [rows] = await pool.query(query, values);

    return rows
}