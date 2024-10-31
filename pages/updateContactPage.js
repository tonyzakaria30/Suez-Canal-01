export class updateContactInfo
{

    //Locators
    update_first_name = '//input[@id="customer.firstName"]'
    update_button = '//input[@type="button"]'
    assert_on_update = '//div[@id="updateProfileResult"]//h1[@class="title"]'





    //Methods 
    updateFirstName ()
    {
        const randomNumber = Math.floor(Math.random() * 10000);  // Generates a number between 0 and 99
          const randomUserName = `Ahmed${randomNumber}`; 
        cy.xpath(this.update_first_name).type(randomUserName);
    }

    clickOnUpdateButton ()
    {
        cy.xpath(this.update_button).click();
    }

    assertOnUpdate ()
    {
        cy.xpath(this.assert_on_update).should('include.text', 'Profile Updated');
    }



}
export default new updateContactInfo ;