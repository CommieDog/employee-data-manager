const inquirer = require("inquirer");

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
        console.log(userInput);
    } while(userInput !== "Quit Employee Data Manager");
}

mainMenu();