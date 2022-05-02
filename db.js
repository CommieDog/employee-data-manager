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
        await db.queryAndPrintResults(`SELECT employee.id, employee.first_name, employee.last_name, roles.title, departments.name AS department_name, roles.salary, managers.first_name AS manager_first_name, managers.last_name AS manager_last_name FROM employees AS employee
        LEFT JOIN employees AS managers ON employee.manager_id = managers.id
        JOIN roles ON employee.role_id = roles.id
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