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
    ),
    getDepartments: function()
    {
        db.connection.query("SELECT * FROM departments;", (err, result) =>
        {
            if(err)
            {
                console.error(err);
            }
            console.table(result);
            //this.connection.destroy();
        })
    }
};

module.exports = db;