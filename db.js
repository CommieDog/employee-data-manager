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
        await db.queryAndPrintResults("SELECT * FROM departments;", [])
    },

    queryAndPrintResults: async function(query, params)
    {
        try
        {
            let result = await db.connection.query(query, params);
            console.table(result[0]);
        }
        catch (error)
        {
            console.error(error);
        }
    }
};

module.exports = db;