//const data = require("../fixtures2/elements.json");

class HomePage {
    
    constructor(){
        this.data = require("../pageelements/elements.json");
    }

    getTitle(){
        return cy.title();
    }

    validateTitle(title){
        cy.log('Validating Title is ,'+ title)
        this.getTitle().should('include',title);
    }

    getContactUs(){        
        return cy.get(this.data.elebuttontext).contains(this.data.strContactUs);
    }

    validateContactUs(){
        this.getContactUs().then((elem) => {
            expect(elem.text()).to.equal(this.data.strContactUs);
          });
    }

}

export default HomePage;