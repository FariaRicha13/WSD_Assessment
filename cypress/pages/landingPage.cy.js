import { LandingPageObject } from "../objects/landingPageObject.cy"
import { SigninPage } from "./signinPage.cy"

const landingPageObject = new LandingPageObject()
const signInPage = new SigninPage()
export class LandingPage{
    LandingPage(){

    }
    /**
     * Visit Landing Page
     * @returns landingPage
     */
     visitLandingPage(){
        cy.visit('https://firsttrip.com/flight')
        cy.wait(10000)
        return this
    }
    /**
     * Click on the one way radio button 
     * @returns LandingPage
     */
    clickOnOneWayRadioButton(){
        cy.get(landingPageObject.getOneWayLabel()).click()
        return this
    }
    /**
     * Click on Departure Date Field
     * @returns LandingPage
     */
    clickOnDepartureDateField(){
        cy.get(landingPageObject.getDepartureInputField()).click()
        return this
    }
    /**
     * Select Date from the date picker
     * @param {String} nextDate 
     * @returns LandingPage
     */
    selectDate(nextDate){
        cy.get(landingPageObject.getDatePicker(nextDate)).click()
        return this
    }
    /**
     * Click on Search Button to search flights
     * @returns LandingPage
     */
    clickOnSearchButton(){
        cy.get(landingPageObject.getSearchButton()).click()
        return this
    }
    /**
     * Click on Signin button and navigate to signin page
     * @returns LandingPage
     */
    clickSignInButton(){
        cy.get(landingPageObject.getSignInButton()).click()
        return signInPage
    }

}