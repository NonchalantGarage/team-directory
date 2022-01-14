const Employee = require('./Employee');

class Manager extends Employee{
    constructor (officeNumber){
        this.officeNumber = officeNumber;
        super();
    }
    // overridden to return Manager
    getRole();
}

module.exports = Manager