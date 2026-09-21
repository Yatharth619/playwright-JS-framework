export class CartPage 
{
      /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page)
  {
    this.page = page
    this.homePageProductTitle = page.locator("//*[@data-test = 'product-name']")
    this.specificProduct = (productName) => page.locator(`//*[@data-test="product-name" and normalize-space() = "${productName}"]`)
    this.productQuantity = page.locator("//*[@data-test = 'product-quantity']")
    this.cartPageProductName = page.locator("//*[@class = 'product-title']")
    this.addToCartButton = page.locator("//*[@id = 'btn-add-to-cart']")
    this.cartIcon = page.locator("//*[@routerlink = '/checkout']")
    this.productPrice = page.locator("//*[@data-test = 'line-price']")
    this.cartTotalPrice = page.locator("//*[@data-test = 'cart-total']")
    this.removeIcon = (productName) => page.locator(`//*[contains(normalize-space(), "${productName}")]/ancestor::tr`).locator("a.btn.btn-danger")
    this.productDeletedToast = page.locator("//*[@aria-label = 'Product deleted.']")
  }

  async clickSpecificProduct(productName)
  {
    await this.specificProduct(productName).click()
  }

  async clickProduct(index)
  {
    await this.homePageProductTitle.nth(index).click()
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

  async increaseQuantity(index)
  {
    await this.productQuantity.nth(index).fill('2')
  }

  async productTotal(index)
  {
    const price = await this.productPrice.nth(index).textContent()
    return parseFloat(price.replace("$", ""))
  }

  async displayedCartTotal()
  {
    const displayedPrice = await this.cartTotalPrice.textContent()
    return parseFloat(displayedPrice.replace("$", ""))
  }

  async removeProduct(productName)
  {
     const product = this.removeIcon(productName)
     await product.click()
  }
}