// const Employee = require('./lib/Employee');
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');
// const Manager = require('./lib/Manager');
const inquirer = require('inquirer');

const promptUser = () =>{
    return inquirer
        .prompt([
            {
                name: 'Name', 
                type: 'input',
                message: "Enter your manager's name",
                validate: nameInput =>{
                    if(nameInput){
                        return true;
                    } else {
                        console.log("Please enter your manager's name!'");
                        return false;
                    }
                }
            },  
            {
                name: 'Id', 
                type: 'input',
                message: "Enter your manager's id",
                validate: idInput =>{
                    if(idInput){
                        return true;
                    } else {
                        console.log("Please enter a valid id!'");
                        return false;
                    }
                }
            },
            {
            name: 'Email', 
            type: 'input',
            message: "Enter your manager's email",
            validate: emailInput =>{
                if(emailInput){
                    return true;
                } else {
                    console.log("Please enter a valid email!'");
                    return false;
                }
            }
        },
            {
                name: 'Office Number', 
                type: 'input',
                message: "Enter your manager's officeNumber",
                validate: officeNumberInput =>{
                    if(officeNumberInput){
                        return true;
                    } else {
                        console.log("Please enter a valid Office Number!'");
                        return false;
                    }
                },
         },
    ]);
}


promptUser().then(teamArr => console.log(teamArr))