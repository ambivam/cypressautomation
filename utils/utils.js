function jqueryError(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
}

function launchUrl(title){
    cy.visit(title);
}

export {jqueryError,launchUrl};