import { SigninPageObject } from "../objects/signinPageObject.cy"

const signinPageObject = new SigninPageObject()
export class SigninPage{
SigninPage(){

}
/**
 * Assert Sign in Label is visible in Sign in page
 * @returns SigninPage
 */
assertSignInLabelIsVisible(){
    cy.get(signinPageObject.getSignInTitle()).should('be.visible')
    return this
}
}