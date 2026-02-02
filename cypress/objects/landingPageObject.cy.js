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
    /**
     * Get one way label locator
     * @returns oneWayLabelLocator
     */
    getOneWayLabel(){
        return oneWayLabel
    }
    /**
     * Get Departure Input Field Locator
     * @returns departureButtonLocator
     */
    getDepartureInputField(){
        return departureButton
    }
    /**
     * Get Return Input Field Locator
     * @returns returnButtonLocator
     */
    getReturnInputField(){
        return returnButton
    }
    /**
     * Get popup container locator
     * @returns popupContainerLocator
     */
    getPopupContainer(){
        return popupContainer
    }
    /**
     * Get Date Picker Locator for specific date
     * @param {String} currentDate 
     * @returns dateFieldForSepecificDateLocator
     */
    getDatePicker(currentDate){
        return dateField + currentDate + "']"
    }
    /**
     * Get Search Button Locator
     * @returns searchButtonLocator
     */
    getSearchButton(){
        return searchButton
    }
    /**
     * Get signin button locator
     * @returns signinButtonLocator
     */
    getSignInButton(){
        return signInButton
    }
   
}