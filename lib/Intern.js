const Employee = require ('./Employee');

class Intern extends Employee {
    constructor(school){
        super(name);
        this.school = school;
    }

    getSchool();
    // overridden to return 'Intern'
    getRole();
}

module.exports = Intern;