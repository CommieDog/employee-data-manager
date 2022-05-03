# Employee Data Manager
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The Employee Data Manager is a command-line driven application to manage the departments, roles, and employees of a company. It is backed by a relational database and communicates with it via SQL queries.

[Video of Employee Data Manager showing typical use case](https://drive.google.com/file/d/1zUpVbl-igHWvLIeFusxEpqub0PsaSEzK/view)

## Table of Contents

* [Usage](#usage)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Author](#author)
* [License](#license)


## Usage

Upon loading, the Employee Data Manager will display a menu list of common tasks. Tasks can involve viewing data, editing data, adding data, or deleting data. Selecting an option may prompt the user for additional data, such as the ID of a record to delete or fields of a record to add to the database. Tasks that involve displaying data will output table-formatted data to the console; others will simply log a confirming message indicating success. After completing a task, the Employee Data Manager will return to the main menu list. Selecting the "Quit Employee Data Manager" option will quit the application.


## Features

* Basic menu-driven command line interface
* Relational database backing for persistent storage
* Encapsulation of common useful SQL queries
  * Ability to create, read, update, or delete data
* Relational database can be addressed directly for quick manipulation by experienced SQL wizards


## Technologies Used

* JavaScript
  * Inquirer.js
  * mysql2
  * console.table
* Node.js
* SQL


## Author

John Netzel
* [Portfolio](https://commiedog.github.io/my-portfolio/)
* [LinkedIn](https://www.linkedin.com/in/john-netzel-481112129/)
* [GitHub](https://github.com/CommieDog)


## License
&copy; 2022 John Netzel. All Rights Reserved. Licenced under the terms of the MIT License.
