import { test } from "../fixtures/page";
import { expect } from "@playwright/test";
import { filters } from "../data/filters.js"

test.beforeEach(async({loginpage}) => 
    {
        await loginpage.navigate()
    }
)

test("Verify products and price is visible on home page", async({homepage}) => 
    {
        await expect(homepage.productTitle.first()).toBeVisible();
        const countProduct = await homepage.productTitle.count()
        await expect(countProduct).toBeGreaterThan(0)
    }
)

test("Comapre Prodcuts and clear", async({homepage}) =>
    {
        await homepage.compareProducts()
        await expect(homepage.compareTitle).toBeVisible()
        await expect(homepage.compareProductOne).toBeVisible()
        await expect(homepage.compareProductTwo).toBeVisible()
        await homepage.clearComparisonProducts()
    }
)

for(const filter of filters)
{
test(`Verify products visible on applying ${filter} filter`, async({homepage}) => 
    {
        await homepage.selectFilter(filter)
        const result = await homepage.getFilterResult()
        if (typeof result === 'number') 
            {expect(result).toBeGreaterThan(0)} 
        else
            {expect(result).toContain('no products')}
    }
)
}