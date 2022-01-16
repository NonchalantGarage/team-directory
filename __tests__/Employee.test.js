const Employee = require('../lib/Employee');

test('creates an Employee object', ()=> {
    const employee = new Employee ('name', 'id', 'email');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id')
    expect(employee.email).toBe('email')
});

test('expect methods to return name,id and email', ()=>{
    const employee = new Employee ('name', 'id', 'email');

    expect(employee.getName()).toBe('name')
    expect(employee.getId()).toBe('id')
    expect(employee.getEmail()).toBe('email')

    
})

// Can i make employee(a class)
// test properties (expect to be )
// test get methods 