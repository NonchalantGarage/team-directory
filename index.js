// const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const fs = require('fs')
const generatePage = require('./src/page-template')
const inquirer = require('inquirer');
const { engine } = require('express/lib/application');

const teamArr = []

const promptManager = () =>{
    return inquirer
        .prompt([
            {
                name: 'name', 
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
                name: 'id', 
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
            name: 'email', 
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
                name: 'officeNumber', 
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
                name: 'name', 
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
                name: 'id', 
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
            name: 'email', 
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
                name: 'github', 
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
    ])
}
const promptIntern = () =>{
    return inquirer
        .prompt([
            {
                name: 'name', 
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
                name: 'id', 
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
            name: 'email', 
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
                name: 'school', 
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
    ])
}

const promptContinue = () =>{
    return inquirer
        .prompt([
            {
                name: 'EngineerOrIntern', 
                type: 'list',
                choices: ['Engineer', 'Intern', 'Finish/Team Assembled'],
                message: "Please choose to add an Engineer, Intern or choose Team Assembled if you are finished",
            }
        ])
        .then(EngineerOrIntern => {
            if(EngineerOrIntern['EngineerOrIntern'] === 'Engineer'){
                promptEngineer()
                .then(engineer =>{
                    var newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
                    teamArr.push(newEngineer);
                promptContinue();    
                })
            } else if (EngineerOrIntern['EngineerOrIntern'] === 'Intern') {
                promptIntern()
                .then(intern =>{
                    var newIntern = new Intern(intern.name, intern.id, intern.email,intern.school);
                    teamArr.push(newIntern);
                promptContinue();
                })
            } else {
                 var html = generatePage(teamArr);
                 fs.writeFileSync('./dist/index.html', html, 'utf-8')
                 return;
            }
        });
}


promptManager()
    .then(manager => {
        var newManager = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
        teamArr.push(newManager);
    })
    .then(promptContinue)

// prompt user to enter Manager info


// then(promptEngineer or Intern)