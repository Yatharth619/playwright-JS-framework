import { test } from "../fixtures/page";
import { expect } from "@playwright/test";

test.beforeEach(async({loginpage}) => 
    {
        await loginpage.navigate();
    }
)

test("Verify product detail page", async({productpage}) => 
    {
        await productpage.openProductPage("Pliers")
        await expect(productpage.productPageTitle).toBeVisible()
        await expect(productpage.productPagePrice).toBeVisible()   
    }
)

test("Increase quantity", async({productpage}) =>
    {
        await productpage.openProductPage("Pliers")
        await productpage.increaseQuantity()
        await expect(productpage.checkQuantity).toHaveValue('2')
    }
)

test("Add product to cart", async({productpage}) => 
    {
        await productpage.openProductPage("Pliers")
        await productpage.addToCart()
        await expect(productpage.toastMessage).toBeVisible()
    }
)

test("Check out of stock product", async({productpage}) =>
    {
        await productpage.noStockProduct()
        await expect(productpage.increaseQuantityIcon).toBeDisabled()
        await expect(productpage.addToCartButton).toBeDisabled()
    }
)