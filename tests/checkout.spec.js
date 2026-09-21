import { expect } from "@playwright/test";
import { userDetails } from "../data/userDetails.js";
import { users } from "../data/loginData.js";
import { test } from "../fixtures/page.js";

test.beforeEach(async({loginpage}) => 
    {
        await loginpage.navigate();
    }
)

test("Successful checkout", async({checkoutpage}) => 
    {
        await checkoutpage.clickSpecificProduct("Pliers")
        await checkoutpage.addToCartIfAvailable()
        await checkoutpage.page.waitForTimeout(1000)
        await checkoutpage.openCart()
        await expect(checkoutpage.page).toHaveURL(/checkout/)
        await checkoutpage.proceedToCheckout()
        await checkoutpage.login(users.user2.email, users.user2.password)
        await checkoutpage.page.screenshot({path: 'login-after-ci.png', fullPage: true})
        await expect(checkoutpage.loggedInMessage(users.user2.name)).toBeVisible({ timeout: 15000 })
        await checkoutpage.proceedPostLogin()
        await checkoutpage.addAddress(userDetails.user2.address)
        await checkoutpage.selectPayment(userDetails.user2.card)
        await expect(checkoutpage.paymentSuccess).toBeVisible()
    }
)