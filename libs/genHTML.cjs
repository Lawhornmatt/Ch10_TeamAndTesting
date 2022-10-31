// GENERATE-HTML
function genHTML(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  
          <meta name="author" content="Matt Lawhorn">
          <meta name="description" content="This application was made for the UT Austin Coding Bootcamp. This is a solo project showcasing my knowledge HTML generation and code testing.">
  
          <title>Tech Blog</title>
          <link rel="icon" href="./images/default.ico" type="image/x-icon">
  
          <!-- Stylizing  -->
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link rel="stylesheet" href="../dist/css/style.css">
  
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous" defer></script>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous" defer></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous" defer></script>
  
          <script src="../dist/libs/main.js" defer></script>
      </head>
  
      <body>
          <div class="jumbotron jumbotron-fluid">
              <div class="container">
                  <h1 class="display-4">My Team</h1>
                  <p class="lead">This page displays a card for every team you added in the Build-A-Team prompter.</p>
              </div>
          </div>
  
          <div class="container-fluid">
  
              <div class="row justify-content-center">
  
                  ${data.teamArray}
              </div>
          </div>
      </body>
  </html>`
}

module.exports = genHTML;
