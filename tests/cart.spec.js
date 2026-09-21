import { expect } from "@playwright/test";
import { test } from "../fixtures/page";

test.beforeEach(async({loginpage}) => 
    {
        await loginpage.navigate();
    }
)

test("Add products to cart and set quantity to 2 and verify total price", async({loginpage, cartpage}) => 
    {
        test.setTimeout(120000)

        await expect(cartpage.homePageProductTitle.first()).toBeVisible()
        const count = await cartpage.homePageProductTitle.count()
        for(let i = 0; i < count; i++)
            {
                await cartpage.clickProduct(i)
                await expect(cartpage.addToCartButton).toBeVisible()
                const added = await cartpage.addToCartIfAvailable()
             if (added)
                {
                    await cartpage.openCart()
                    await expect(cartpage.page).toHaveURL(/checkout/)
                    await expect(cartpage.cartPageProductName.first()).toBeVisible()
                    const quantityCount = await cartpage.cartPageProductName.count()
                    for(let j = 0; j < quantityCount; j++)
                        {
                            await cartpage.increaseQuantity(j)
                        }
                }
                await loginpage.navigate() 
            }
            await cartpage.openCart()
            await expect(cartpage.page).toHaveURL(/checkout/)
            await expect(cartpage.productPrice.first()).toBeVisible()
            const priceCount = await cartpage.productPrice.count()
            let calculatedTotal = 0

            for(let k = 0; k < priceCount; k++)
                {
                    const price = await cartpage.productTotal(k)
                    calculatedTotal += price
                }
                const displayedTotal = await cartpage.displayedCartTotal()
                await expect(calculatedTotal).toBeCloseTo(displayedTotal)
            }
)

test("Verify working of remove button in cart", async({loginpage, cartpage}) =>
    {
        await cartpage.clickSpecificProduct("Thor Hammer")
        await cartpage.addToCartIfAvailable()
        await cartpage.page.waitForTimeout(1000)
        await loginpage.navigate()
        await cartpage.clickSpecificProduct("Combination Pliers")
        await cartpage.addToCartIfAvailable()
        await cartpage.openCart()
        await expect(cartpage.page).toHaveURL(/checkout/)
        await expect(cartpage.cartPageProductName.first()).toBeVisible()
        await cartpage.removeProduct("Thor Hammer")
        await expect(cartpage.productDeletedToast).toBeVisible()
    }
)