//const data = require("../fixtures2/elements.json");

class ContactPage {
    
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

    getFullName(){
        cy.contains(this.data.elesendusamessage).scrollIntoView();
        return cy.get(this.data.elefullname);
    }

    setFullName(fullname){
        this.getFullName().type(fullname);
    }

    getOrganization(){        
        return cy.get(this.data.eleorganization);
    }

    setOrganization(organization){
        this.getOrganization().type(organization);
    }

    getEmail(){        
        return cy.get(this.data.eleemail);
    }

    setEmail(email){
        this.getEmail().type(email);
    }

    getBusinessNumber(){        
        return cy.get(this.data.elebusinessnumber);
    }

    setBusinessNumber(businessnumber){
        this.getBusinessNumber().type(businessnumber);
    }

    getMessage(){        
        return cy.get(this.data.elemessage);
    }

    setMessage(message){
        this.getMessage().type(message);
    }

    getSendMessage(){
        return cy.get(this.data.elesendmessage);
    }

    clickSendMessageButton(){
        this.getSendMessage().click();
    }

    getCaptchaMessage(){
        return cy.get(this.data.elealert);
    }

    validateCaptchaAlert(message){
        this.getCaptchaMessage().should('have.text',message);
    }

}

export default ContactPage;