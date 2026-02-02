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
        cy.logStep("Click On Oneway Button", "Clicking on one way button")
        cy.get(landingPageObject.getOneWayLabel()).click()
        return this
    }
    /**
     * Click on Departure Date Field
     * @returns LandingPage
     */
    clickOnDepartureDateField(){
        cy.logStep("Click On Departure Date Field", "Clicking Departure Date Field")
        cy.get(landingPageObject.getDepartureInputField()).click()
        return this
    }
    /**
     * Select Date from the date picker
     * @param {String} nextDate 
     * @returns LandingPage
     */
    selectDate(nextDate){
        cy.logStep("Select Next Date", "Selecting "+ nextDate + "as next date")
        cy.get(landingPageObject.getDatePicker(nextDate)).click()
        return this
    }
    /**
     * Click on Search Button to search flights
     * @returns LandingPage
     */
    clickOnSearchButton(){
        cy.logStep("Click On Search Button", "Clicking on search button")
        cy.get(landingPageObject.getSearchButton()).click()
        return this
    }
    /**
     * Click on Signin button and navigate to signin page
     * @returns LandingPage
     */
    clickSignInButton(){
        cy.logStep("Click On Signin Button", "Clicking on signin button")
        cy.get(landingPageObject.getSignInButton()).click()
        return signInPage
    }

}