import { LandingPage } from "../pages/landingPage.cy"

const landingPage = new LandingPage()
var nextDate = "February 5th, 2026"
describe('template spec', () => {
  it('passes', () => {
    landingPage.visitLandingPage()
    .clickOnOneWayRadioButton()
    .clickOnDepartureDateField()
    .selectDate(nextDate)
    .clickOnSearchButton()
    .clickSignInButton()
    .assertSignInLabelIsVisible()
    landingPage.visitLandingPage()
  })
})