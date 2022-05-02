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
                choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee's role", "Quit Employee Data Manager"]
            }
        );
        userInput = userInput.action;
        dbFunction = selectDatabaseFunction(userInput);
        if(dbFunction)
        {
            await dbFunction();
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
        }
    }
}

mainMenu();