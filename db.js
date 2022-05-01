const mysql = require("mysql2");
const consoleTable = require("console.table");

const db =
{
    connection: mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'Password1234!',
            database: 'company_db'
        },
        console.log(`Connected to the company_db database.`)
    ).promise(),
    getDepartments: async function()
    {
        try
        {
            let query = await db.connection.query("SELECT * FROM departments;");
            console.table(query[0]);
        }
        catch (error)
        {
            console.error(error);
        }
    }
};

module.exports = db;