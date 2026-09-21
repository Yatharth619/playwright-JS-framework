import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/Homepage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { CheckoutPage } from "../pages/CheckoutPage";

export const test = base.extend({
    loginpage: async ({page}, use) =>
    {
        const loginpage = new LoginPage(page)
        await use(loginpage)
    },
    homepage: async ({page}, use) =>
    {
        const homepage = new HomePage(page)
        await use(homepage)
    },
    productpage: async ({page}, use) =>
    {
        const productpage = new ProductPage(page)
        await use (productpage)
    },
    cartpage: async ({page}, use) =>
    {
        const cartpage = new CartPage(page)
        await use(cartpage)
    },
    checkoutpage: async ({page}, use) =>
    {
        const checkoutpage = new CheckoutPage(page)
        await use(checkoutpage)
    }
})
