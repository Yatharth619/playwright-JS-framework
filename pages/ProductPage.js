export class ProductPage 
{
     /**
   * @param {import('@playwright/test').Page} page
   */

  constructor(page)
  {
    this.page = page
    this.productCheck = (productName) => page.locator(`//*[@data-test="product-name" and normalize-space() = "${productName}"]`)
    this.productPageTitle = page.locator("//*[@data-test = 'product-name']")
    this.productPagePrice = page.locator("//*[@data-test = 'unit-price']")
    this.increaseQuantityIcon = page.locator("//*[@data-icon = 'plus']")
    this.checkQuantity = page.locator("//*[@data-test = 'quantity']")
    this.addToCartButton = page.locator("#btn-add-to-cart")
    this.toastMessage = page.locator("//*[@aria-label ='Product added to shopping cart.']")
    this.outOfStockProduct = page.locator("(//*[@data-test = 'out-of-stock'])[1]")
  }

  async openProductPage(productName)
  {
    await this.productCheck(productName).click()
  }

  async increaseQuantity()
  {
    await this.increaseQuantityIcon.click()
  }

  async addToCart()
  {
    await this.addToCartButton.click()
  }

  async noStockProduct()
  {
    await this.outOfStockProduct.click()
  }
}