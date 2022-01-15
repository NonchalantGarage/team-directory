// const Employee = require('./lib/Employee');
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');
// const Manager = require('./lib/Manager');
const inquirer = require('inquirer');

const promptManager = () =>{
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
                name: 'ID', 
                type: 'input',
                message: "Enter your manager's ID",
                validate: idInput =>{
                    if(idInput){
                        return true;
                    } else {
                        console.log("Please enter a valid ID!'");
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
                message: "Enter your manager's office number",
                validate: officeNumberInput =>{
                    if(officeNumberInput){
                        return true;
                    } else {
                        console.log("Please enter a valid office number!'");
                        return false;
                    }
                },
         },
    ]);
}
const promptEngineer = () =>{
    return inquirer
        .prompt([
            {
                name: 'Name', 
                type: 'input',
                message: "Enter your engineer's name",
                validate: nameInput =>{
                    if(nameInput){
                        return true;
                    } else {
                        console.log("Please enter your engineer's name!'");
                        return false;
                    }
                }
            },  
            {
                name: 'ID', 
                type: 'input',
                message: "Enter your engineer's ID",
                validate: idInput =>{
                    if(idInput){
                        return true;
                    } else {
                        console.log("Please enter a valid ID!'");
                        return false;
                    }
                }
            },
            {
            name: 'Email', 
            type: 'input',
            message: "Enter your engineer's email",
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
                name: 'GitHub', 
                type: 'input',
                message: "Enter your engineer's GitHub username",
                validate: GitHub =>{
                    if(GitHub){
                        return true;
                    } else {
                        console.log("Please enter a valid GitHub username!'");
                        return false;
                    }
                },
         },
    ]);
}
const promptIntern = () =>{
    return inquirer
        .prompt([
            {
                name: 'Name', 
                type: 'input',
                message: "Enter your intern's name",
                validate: nameInput =>{
                    if(nameInput){
                        return true;
                    } else {
                        console.log("Please enter your intern's name!'");
                        return false;
                    }
                }
            },  
            {
                name: 'ID', 
                type: 'input',
                message: "Enter your intern's ID",
                validate: idInput =>{
                    if(idInput){
                        return true;
                    } else {
                        console.log("Please enter a valid ID!'");
                        return false;
                    }
                }
            },
            {
            name: 'Email', 
            type: 'input',
            message: "Enter your intern's email",
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
                name: 'GitHub', 
                type: 'input',
                message: "Enter your intern's school name",
                validate: school =>{
                    if(school){
                        return true;
                    } else {
                        console.log("Please enter a valid school name!'");
                        return false;
                    }
                },
         },
    ]);
}

const promptContinue = () =>{
    return inquirer
        .prompt([
            {
                name: 'EngineerOrIntern', 
                type: 'checkbox',
                choices: ['Engineer', 'Intern', 'Team Assembled'],
                message: "Please choose to add an Engineer, Intern or choose Team Assembled if you are finished",
            }
        ]);
}


promptManager()
    .then(teamArr => console.log(teamArr))
    .then(promptContinue);

// prompt user to enter Manager info


// then(promptEngineer or Intern)