const generateTeam = teamArr => {
    const templateArr = []
    teamArr.forEach(employee => {
        var role = employee.getRole();
        switch(role) {
        case 'Manager':
            templateArr.push(generateManager(employee));
        break;
        case 'Engineer':
            templateArr.push(generateEngineer(employee));
        break;
        case 'Intern':
            templateArr.push(generateIntern(employee));
        break;
        }
    });
    return templateArr.join('')
}



const generateManager = managerInfo => {
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${managerInfo.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${managerInfo.getId()}</li>
            <a href="mailto: ${managerInfo.getEmail()}" >
            <li class="list-group-item">Email: ${managerInfo.getEmail()}</li></a>
            <li class="list-group-item">Office Number: ${managerInfo.officeNumber}</li>
      </ul>
      </div>
    </div>
    <br>
   `;
};

const generateIntern = internInfo => {
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${internInfo.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${internInfo.getId()}</li>
            <a href="mailto: ${internInfo.getEmail()}">
            <li class="list-group-item">Email: ${internInfo.getEmail()}</li></a>
            <li class="list-group-item">School: ${internInfo.getSchool()}</li>
      </ul>
      </div>
    </div>
    <br>
   `;
};
const generateEngineer = engineerInfo => {
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${engineerInfo.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineerInfo.getId()}</li>
            <a href="mailto: ${engineerInfo.getEmail()}">
            <li class="list-group-item">Email: ${engineerInfo.getEmail()}</li></a>
            <a href="https://github.com/${engineerInfo.getGithub()}">
            <li class="list-group-item">GitHub: ${engineerInfo.getGithub()}</li></a>
      </ul>
      </div>
    </div>
    <br>
   `;
};



module.exports = teamArr => {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Directory</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="text-secondary bg-dark py-2 px-3 align-center text-center">
          Team Directory
        </h1>   
      </div>
    </header>
    <main class="container my-5 align-center text-center"></main>
    <div class ="container align-center d-flex flex-row justify-content-between">
    ${generateTeam(teamArr)}
    </div>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; 2022 by Curtis Hong</h3>
    </footer>
  </body>
</html>

  `;
};

