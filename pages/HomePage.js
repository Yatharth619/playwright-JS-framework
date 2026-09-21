export class HomePage 
{
    constructor(page)
    {
       this.page = page
       this.productTitle = page.locator("//*[@data-test = 'product-name']")
       this.productPrice = page.locator("//*[@data-test = 'product-price']")
       this.compareIconOne = page.locator("(//*[@data-test = 'compare-btn'])[1]")
       this.compareIconTwo = page.locator("(//*[@data-test = 'compare-btn'])[2]")
       this.compareButton = page.locator("//*[@data-test = 'compare-link']")
       this.compareTitle = page.locator("//*[@data-test = 'comparison-title']")
       this.compareProductOne = page.locator("(//*[@data-test = 'product-name'])[1]")
       this.compareProductTwo = page.locator("(//*[@data-test = 'product-name'])[2]")
       this.clearComparison = page.locator("//*[@data-test = 'clear-comparison']")
       this.browseProductButton = page.locator("//*[normalize-space() = 'Browse Products']")
       this.findFilter = (filter) => page.locator(`//label[normalize-space() = '${filter}']`)  
       this.noProductText = page.locator("//*[@data-test = 'no-results']")
    }

    async compareProducts() 
    {
        await this.compareIconOne.click()
        await this.compareIconTwo.click()
        await this.compareButton.click()
    }

    async clearComparisonProducts()
    {
        await this.clearComparison.click()
        await this.browseProductButton.click()
    }

    async selectFilter(filter)
    {
        await this.findFilter(filter).click()
        await this.page.waitForTimeout(2000)
    }

    async getFilterResult()
    {
        const count = await this.productTitle.count()
        if (count > 0) 
            { return count }
              return await this.noProductText.textContent()
    }           
}

    

