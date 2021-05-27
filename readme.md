# Getting Started
    To install JSON Server locally you must have the following:
    - You must have node and npm package installed in your machine
    - Any kind of texteditor and browser to create and test the server

## Setup Json server locally
1.  Create folder and add app.js and database_name.json
2.  Install json server "npm install -g json-server"
3.  Add data in your database.json file
4.  Using Powershell or Git Bach. Use this command "json-server --watch db.json". If Error comes up goto the Common Problems at the bottom.
5.  Then its done with localhost:3000 - https://prnt.sc/13h9qsu


## Common Problems
    Error : "json-server.ps1 cannot be loaded because the execution of scripts is disabled on this system. Please see "get-help about_signing" for more details."
    Solution:
        - Using windows powershell or Git Bash. > Type "Get-ExecutionPolicy -List" to check the Policies
        - Set-ExecutionPolicy -Scope LocalMachine Unrestricted