import { LandingPageObject } from "../objects/landingPageObject.cy"
import { SigninPage } from "./signinPage.cy"

const landingPageObject = new LandingPageObject()
const signInPage = new SigninPage()
export class LandingPage{
    LandingPage(){

    }

     visitLandingPage(){
        cy.visit('https://firsttrip.com/flight')
        cy.wait(10000)
        return this
    }

    clickOnOneWayRadioButton(){
        cy.get(landingPageObject.getOneWayLabel()).click()
        return this
    }

    clickOnDepartureDateField(){
        cy.get(landingPageObject.getDepartureInputField()).click()
        return this
    }

    clickOnReturnInutField(){
        cy.waitUntilVisible(landingPageObject.getReturnInputField()).click()
        return this
    }

    selectDate(nextDate){
        cy.get(landingPageObject.getDatePicker(nextDate)).click()
        return this
    }

    clickOnSearchButton(){
        cy.get(landingPageObject.getSearchButton()).click()
        return this
    }

    clickSignInButton(){
        cy.get(landingPageObject.getSignInButton()).click()
        return signInPage
    }

}