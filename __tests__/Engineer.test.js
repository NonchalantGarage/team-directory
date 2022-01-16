const Engineer = require('../lib/Engineer');

test('expect new engineer object', () =>{
    const engineer = new Engineer ('name','id','email','github')

    expect(engineer.name).toBe('name');
    expect(engineer.id).toBe('id');
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('github');
})

test('expect getRole to return role', ()=>{
    const engineer = new Engineer ('name','id','email','github')

    expect(engineer.getRole()).toBe('Engineer')
})
test('expect getGithub to return github', ()=>{
    const engineer = new Engineer ('name','id','email','github')

    expect(engineer.getGithub()).toBe('github')
})