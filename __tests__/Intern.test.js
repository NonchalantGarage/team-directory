const Intern = require('../lib/Intern');

test('creates new intern object', ()=>{
    const intern = new Intern ('name', 'id', 'email','school')
    
    expect(intern.name).toBe('name');
    expect(intern.id).toBe('id');
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('school');
})

test('expect getRole() to return role', ()=>{
    const intern = new Intern ('name', 'id', 'email','school')

    expect(intern.getRole()).toBe('Intern')
})
test('expect getSchool to return school', ()=>{
    const intern = new Intern ('name', 'id', 'email','school')


    expect(intern.getSchool()).toBe('school')
})
