const inquirer = require("inquirer");
const db = require("./db");

async function mainMenu()
{
    let userInput;
    do
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
    } while(userInput !== "Quit Employee Data Manager");

    function selectDatabaseFunction(input)
    {
        switch(input)
        {
            case "View all departments":
                return db.getDepartments;
        }
    }
}

mainMenu();