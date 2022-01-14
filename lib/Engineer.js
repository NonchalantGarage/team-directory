const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(github){
        super(name);
        this.github = github;
    }
    getGithub();
    // Overridden to return "Engineer"
    getRole(); 

}

module.exports = Engineer;