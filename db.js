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
        await db.queryAndPrintResults("SELECT name, id FROM departments;", []);
    },

    getRoles: async function()
    {
        await db.queryAndPrintResults("SELECT roles.title, roles.id, departments.name AS department_name, roles.salary FROM roles JOIN departments ON roles.department_id = departments.id;", []);
    },

    getEmployees: async function()
    {
        await db.queryAndPrintResults(`SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department_name, roles.salary, employees.manager_id FROM employees
        JOIN roles ON employees.role_id = roles.id
        JOIN departments ON roles.department_id = departments.id;`, []);
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