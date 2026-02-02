import { SigninPageObject } from "../objects/signinPageObject.cy"

const signinPageObject = new SigninPageObject()
export class SigninPage{
SigninPage(){

}
assertSignInLabelIsVisible(){
    cy.get(signinPageObject.getSignInTitle()).should('be.visible')
    return this
}
}