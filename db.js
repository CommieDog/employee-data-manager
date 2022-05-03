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

    addDepartment: async function(params)
    {
        await db.queryAndPrintMessage("INSERT INTO departments (name) VALUES (?);", params, "New department successfully added!");
    },

    addRole: async function(params)
    {
        await db.queryAndPrintMessage("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?);", params, "New role successfully added!");
    },

    addEmployee: async function(params)
    {
        await db.queryAndPrintMessage("INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);", params, "New employee successfully added!");
    },

    updateEmployeeRole: async function(params)
    {
        await db.queryAndPrintMessage("UPDATE employees SET role_id=? WHERE id=?;", params, "Employee role successfully updated!");
    },

    updateEmployeeManager: async function(params)
    {
        await db.queryAndPrintMessage("UPDATE employees SET manager_id=? WHERE id=?;", params, "Employee manager successfully updated!");
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
    },

    queryAndPrintMessage: async function(query, params, message)
    {
        try
        {
            await db.connection.query(query, params);
            console.log(message);
        }
        catch (error)
        {
            console.error(error);
        }
    }
};

module.exports = db;