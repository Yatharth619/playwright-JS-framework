export class CheckoutPage
{
    constructor(page) 
    {
        this.page = page
        this.specificProduct = (productName) => page.locator(`//*[@data-test="product-name" and normalize-space() = "${productName}"]`)
        this.addToCartButton = page.locator("//*[@id = 'btn-add-to-cart']")
        this.cartIcon = page.locator("//*[@routerlink = '/checkout']")
        this.checkoutButton = page.locator("//*[@data-test = 'proceed-1']")
        this.email = page.locator("//*[@data-test = 'email']")
        this.password = page.locator("//*[@data-test = 'password']")
        this.loginButton = page.locator("//*[@data-test = 'login-submit']")
        this.loggedInMessage = (name) => this.page.locator(`//p[contains(normalize-space(), "Hello ${name}, you are already logged in")]`)
        this.proceedButton = page.locator("//*[@data-test = 'proceed-2']")
        this.country = page.locator("#country") 
        this.postalCode = page.locator("//*[@data-test = 'postal_code']")
        this.houseNumber = page.locator("//*[@data-test = 'house_number']")
        this.street = page.locator("//*[@data-test = 'street']")
        this.city = page.locator("//*[@data-test = 'city']")
        this.state = page.locator("//*[@data-test = 'state']")
        this.proceedPostAddress = page.locator("//*[@data-test = 'proceed-3']")
        this.paymentMethod = page.locator("#payment-method")
        this.cardNumber = page.locator("//*[@data-test = 'credit_card_number']")
        this.expiryDate = page.locator("//*[@data-test = 'expiration_date']")
        this.cardCvv = page.locator("//*[@data-test = 'cvv']")
        this.cardHolderName = page.locator("//*[@data-test = 'card_holder_name']")
        this.confirmPaymentButton = page.getByRole("button", {name : "Confirm"})
        this.paymentSuccess = page.locator("//*[@data-test = 'payment-success-message']")
    }

  async clickSpecificProduct(productName)
  {
    await this.specificProduct(productName).click()
  }  
  
  async addToCartIfAvailable()
  {
    if (await this.addToCartButton.isEnabled()) 
      {
        await this.addToCartButton.click()
        return true
      }
    return false
  }

  async openCart()
  {
    await this.cartIcon.click()
  }

  async proceedToCheckout()
  {
    await this.checkoutButton.click()
  }

  async login(email, password)
  {
    await this.email.fill(email)
    await this.password.fill(password)
    await this.loginButton.click()
  }

  async proceedPostLogin()
  {
    await this.proceedButton.click()
  }

  async addAddress(address)
  {
    await this.country.selectOption(address.country)
    await this.postalCode.fill(address.postalCode)
    await this.houseNumber.fill(address.houseNumber)
    await this.street.fill(address.street)
    await this.city.fill(address.city)
    await this.state.fill(address.state)
    await this.proceedPostAddress.click()
  }

  async selectPayment(card)
  {
    await this.paymentMethod.selectOption("credit-card")
    await this.cardNumber.fill(card.cardNumber)
    await this.expiryDate.fill(card.expiryDate)
    await this.cardCvv.fill(card.cvv)
    await this.cardHolderName.fill(card.cardHolderName)
    await this.confirmPaymentButton.click()
  }
}