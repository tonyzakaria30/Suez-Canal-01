export class requestLoan {
    

    //Loactors

    loan_amount = '//input[@id="amount"]'
    down_payment = '//input[@id="downPayment"]'
    loan_account = '//select[@id="fromAccountId"]'
    assert_on_loan = '(//div//h1[@class="title"])[contains(.,"Loan Request Processed")]'


    //Methods 

    enterLoanAmount () 
    {
        cy.xpath(this.loan_amount).type('2000');
    }

    enterDownPayment ()
    {
        cy.xpath(this.down_payment).type('200');
    }

    chooseLoanAccount ()
    {
        cy.xpath(this.loan_account).select(0).type('{enter}');
    }

    assertOnLoan ()
    {
        cy.xpath(this.assert_on_loan).should('include.text','Loan Request Processed');
    }


}
export default new requestLoan ;