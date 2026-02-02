const signInTitle = "h3[class*='text']:contains('Sign In')"
export class SigninPageObject{
SigninPageObject(){

}
/**
 * Get locator of sign in title 
 * @returns signinTitleLocator
 */
getSignInTitle(){
    return signInTitle
}
}