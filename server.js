const inquirer = require("inquirer");
const db = require("./db");

async function mainMenu()
{
    let userInput;
    while(true) // Looks like an infinite loop, but we break manually below
    {
        userInput = await inquirer.prompt(
            {
                type: "list",
                name: "action",
                message: "What you you like to do next?",
                choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee's role",
                    "Update an employee's manager", "View a manager's subordinate employees", "View a department's employees", "Delete a department", "Delete a role",
                    "Delete an employee", "Quit Employee Data Manager", new inquirer.Separator()]
            }
        );
        userInput = userInput.action;
        dbFunction = selectDatabaseFunction(userInput);
        if(dbFunction)
        {
            let args = await promptForArgs(dbFunction);
            await dbFunction(args);
        }
        else
        {
            await db.connection.end(); // Don't forget to explictly close the connection or the program will hang!
            break;
        }
    }

    function selectDatabaseFunction(input)
    {
        switch(input)
        {
            case "View all departments":
                return db.getDepartments;
            case "View all roles":
                return db.getRoles;
            case "View all employees":
                return db.getEmployees;
            case "Add a department":
                return db.addDepartment;
            case "Add a role":
                return db.addRole;
            case "Add an employee":
                return db.addEmployee;
            case "Update an employee's role":
                return db.updateEmployeeRole;
            case "Update an employee's manager":
                return db.updateEmployeeManager;
            case "View a manager's subordinate employees":
                return db.getManagerEmployees;
            case "View a department's employees":
                return db.getDepartmentEmployees;
            case "Delete a department":
                return db.deleteDepartment;
            case "Delete a role":
                return db.deleteRole;
            case "Delete an employee":
                return db.deleteEmployee;
        }
    }

    async function promptForArgs(dbFunction)
    {
        if(dbFunction === db.addDepartment)
        {
            let userInput = await inquirer.prompt(
                {
                    name: "departmentName",
                    message: "What is the new department's name?"
                }
            );
            return [userInput.departmentName];
        }
        else if(dbFunction === db.addRole)
        {
            let userInput = await inquirer.prompt(
                [
                    {
                        name: "roleTitle",
                        message: "What is the new role's title?"
                    },
                    {
                        name: "roleSalary",
                        message: "What is the new role's salary?"
                    },
                    {
                        name: "roleDepartment",
                        message: "What is the new role's department ID?"
                    }
                ]
            );
            return [userInput.roleTitle, userInput.roleSalary, userInput.roleDepartment];
        }
        else if(dbFunction === db.addEmployee)
        {
            let userInput = await inquirer.prompt(
                [
                    {
                        name: "employeeFirstName",
                        message: "What is the new employee's first name?"
                    },
                    {
                        name: "employeeLastName",
                        message: "What is the new employee's last name?"
                    },
                    {
                        name: "employeeRole",
                        message: "What is the new employee's role ID?"
                    },
                    {
                        name: "employeeManager",
                        message: "What is the new employee's manager ID? (Enter NULL for no manager.)"
                    }
                ]
            );
            if(userInput.employeeManager.toLowerCase() === "null")
            {
                userInput.employeeManager = null;
            }
            return [userInput.employeeFirstName, userInput.employeeLastName, userInput.employeeRole, userInput.employeeManager];
        }
        else if(dbFunction === db.updateEmployeeRole)
        {
            let userInput = await inquirer.prompt(
                [
                    {
                        name: "employeeId",
                        message: "What is the ID of the employee whose role you're updating?"
                    },
                    {
                        name: "employeeNewRole",
                        message: "What is the ID of the employee's new role?"
                    }
                ]
            );
            return [userInput.employeeNewRole, userInput.employeeId];
        }
        else if(dbFunction === db.updateEmployeeManager)
        {
            let userInput = await inquirer.prompt(
                [
                    {
                        name: "employeeId",
                        message: "What is the ID of the employee whose manager you're updating?"
                    },
                    {
                        name: "employeeNewManager",
                        message: "What is the employee's new manager ID? (Enter NULL for no manager.)"
                    }
                ]
            );
            if(userInput.employeeNewManager.toLowerCase() === "null")
            {
                userInput.employeeManager = null;
            }
            return [userInput.employeeNewManager, userInput.employeeId];
        }
        else if(dbFunction === db.getManagerEmployees)
        {
            let userInput = await inquirer.prompt(
                {
                    name: "managerId",
                    message: "What is the id of the manager whose subordinates you want to view?"
                }
            );
            return [userInput.managerId];
        }
        else if(dbFunction === db.getDepartmentEmployees)
        {
            let userInput = await inquirer.prompt(
                {
                    name: "departmentId",
                    message: "What is the id of the department whose employees you want to view?"
                }
            );
            return [userInput.departmentId];
        }
        else if(dbFunction === db.deleteDepartment)
        {
            let userInput = await inquirer.prompt(
                {
                    name: "departmentId",
                    message: "What is the id of the department you want to delete?"
                }
            );
            return [userInput.departmentId];
        }
        else if(dbFunction === db.deleteRole)
        {
            let userInput = await inquirer.prompt(
                {
                    name: "roleId",
                    message: "What is the id of the role you want to delete?"
                }
            );
            return [userInput.roleId];
        }
        else if(dbFunction === db.deleteEmployee)
        {
            let userInput = await inquirer.prompt(
                {
                    name: "employeeId",
                    message: "What is the id of the employee you want to delete?"
                }
            );
            return [userInput.employeeId];
        }
        return null;
    }
}

mainMenu();