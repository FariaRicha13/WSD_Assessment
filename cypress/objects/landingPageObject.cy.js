const oneWayLabel = "div[class*='false']:contains('One Way')"
const departureButton = "button[data-testid*='departure-date-input-form']"
const returnButton = "button[data-testid*='flight-return-date-selector']"
const popupContainer = "img[data-nimg='1']"
const dateField = "div[aria-label*='"
const searchButton = "button[data-testid='search-flight-button']"
const signInButton = "button[data-testid='home-signin-button']"
export class LandingPageObject{
    LandingPageObject(){

    }
    getOneWayLabel(){
        return oneWayLabel
    }

    getDepartureInputField(){
        return departureButton
    }

    getReturnInputField(){
        return returnButton
    }

    getPopupContainer(){
        return popupContainer
    }

    getDatePicker(currentDate){
        return dateField + currentDate + "']"
    }

    getSearchButton(){
        return searchButton
    }

    getSignInButton(){
        return signInButton
    }
   
}