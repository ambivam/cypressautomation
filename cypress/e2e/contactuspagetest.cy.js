import ContactPage from '../../pages/ContactPage';
import {jqueryError,launchUrl} from '../../utils/utils.js';

describe('Contact Page spec', () => {
  
  before('Before suite ',() => {
    jqueryError();
    cy.fixture('../../pagedata/pagedata').as('data');
  })


  it('MT Contact Page - Validating Send Message', function(){        
    const contactPage = new ContactPage();
    launchUrl(this.data.contactusurl);
    contactPage.validateTitle(this.data.contactuspagetitle);
    contactPage.setOrganization(this.data.organization);
    contactPage.setEmail(this.data.email);
    contactPage.setBusinessNumber(this.data.businessnumber);
    contactPage.setMessage(this.data.message);
    contactPage.clickSendMessageButton();
    contactPage.validateCaptchaAlert(this.data.alert);    
  })
})