export class LoginPage 
{
    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page)
    {
        this.page = page
        this.signInText = page.locator("(//*[normalize-space() = 'Sign in'])[2]")
        this.email = page.getByPlaceholder("Your email")
        this.password = page.getByPlaceholder("Your password")
        this.loginButton = page.getByRole('button', {name: 'Login'})
        this.confirmName = (name) => page.locator(`//*[normalize-space() = '${name}']`)
        this.loginError = page.locator("//*[@data-test = 'login-error']")
        this.signOutButton = page.locator("//*[@data-test = 'nav-sign-out']")
    }
    
    async navigate()
    {
        await this.page.goto('https://practicesoftwaretesting.com')
    }

    async login(email, password)
    {
        await this.signInText.click()
        await this.email.fill(email)
        await this.password.fill(password)
        await this.loginButton.click()
    }

    async signout(name)
    {
        await this.confirmName(name).click()
        await this.signOutButton.click()
    }
}