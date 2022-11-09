import HomePage from '../../pages/HomePage';
import {jqueryError,launchUrl} from '../../utils/utils.js';

describe('HomePage spec', () => {
  
  before('Before suite ',() => {
    jqueryError();
    cy.fixture('../../pagedata/pagedata').as('data');
  })


  it('MT Home Page - Validating Title and ContactUs', function(){        
    const homePage = new HomePage();
    launchUrl(this.data.mturl);
    homePage.validateTitle(this.data.mttitle);
    homePage.validateContactUs(this.data.contactus);    
    
  })
})