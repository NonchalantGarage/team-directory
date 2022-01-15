const generateManager = managerInfo => {
    if (!managerInfo){
        return '';
      }
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${managerInfo.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${managerInfo.id}</li>
            <a href="mailto: ${managerInfo.email}" 
            <li class="list-group-item">Email: ${managerInfo.email}</li></a>
            <li class="list-group-item">Office Number: ${managerInfo.officeNumber}</li>
      </ul>
      </div>
    </div>
   `;
};

const generateIntern = internInfo => {
    if (!internInfo){
        return '';
      }
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${internInfo.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${internInfo.id}</li>
            <a href="mailto: ${internInfo.email}" 
            <li class="list-group-item">Email: ${internInfo.email}</li></a>
            <li class="list-group-item">School: ${internInfo.school}</li>
      </ul>
      </div>
    </div>
   `;
};
const generateEngineer = engineerInfo => {
    if (!engineerInfo){
        return '';
      }
      return `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${engineerInfo.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineerInfo.id}</li>
            <a href="mailto: ${engineerInfo.email}" 
            <li class="list-group-item">Email: ${engineerInfo.email}</li></a>
            <a href="https://github.com/${engineerInfo.gitHub}" 
            <li class="list-group-item">GitHub: ${engineerInfo.email}</li></a>
      </ul>
      </div>
    </div>
   `;
};



module.exports = templateData => {
    const {manager,engineer,intern} = templateData;
    console.log(manager,engineer,intern);
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
    <main class="container my-5 text-center">Your Team</main>
    ${generateManager(manager)}
    ${generateEngineer(engineer)}
    ${generateIntern(intern)}
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; 2022 by Curtis Hong</h3>
    </footer>
  </body>
</html>

  `;
};

