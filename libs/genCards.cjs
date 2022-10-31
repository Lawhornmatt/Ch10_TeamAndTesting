// ====================
//    HTML BLOCKS
// ====================

// MANAGER
function genManager(data) {
  return `<div class="card w-25 m-3">
  <h5 class="card-header">MANAGER</h5>
  <div class="card-body">
      <h5 class="card-title">Name: ${data.name}</h5>
      <p class="card-text">ID: ${data.id}</p>
      <p class="card-text">Email: ${data.email}</p>
      <p class="card-text">Office#: ${data.officeNumber}</p>
  </div>
</div>`
};

// ENGINEER
function genEngineer(data) {
  return `<div class="card w-25 m-3">
  <h5 class="card-header">ENGINEER</h5>
  <div class="card-body">
      <h5 class="card-title">Name: ${data.name}</h5>
      <p class="card-text">ID: ${data.id}</p>
      <p class="card-text">Email: ${data.email}</p>
      <p class="card-text">Use the button to visit my GitHub:</p>
      <a href="#" class="btn btn-primary">https://github.com/${data.ghUsername}</a>
  </div>
</div>`
};

// INTERN
function genIntern(data) {
  return `<div class="card w-25 m-3">
  <h5 class="card-header">INTERN</h5>
  <div class="card-body">
      <h5 class="card-title">Name: ${data.name}</h5>
      <p class="card-text">ID: ${data.id}</p>
      <p class="card-text">Email: ${data.email}</p>
      <p class="card-text">School: ${data.school}</p>
  </div>
</div>`
};

module.exports = {
    genManager,
    genEngineer,
    genIntern
};