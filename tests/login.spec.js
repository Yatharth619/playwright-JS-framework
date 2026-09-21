import { users } from "../data/loginData";
import { expect } from "@playwright/test";
import { test } from "../fixtures/page";

test.beforeEach(async({loginpage}) => 
    {
        await loginpage.navigate()
    }
)

test("valid login", async({loginpage}) => 
    {
        await loginpage.login(users.user2.email, users.user2.password)
        await expect(loginpage.confirmName(users.user2.name)).toBeVisible({ timeout: 15000 })
    }
)

test("Logout verification", async({loginpage}) =>
    {
        await loginpage.login(users.user2.email, users.user2.password)
        await expect(loginpage.confirmName(users.user2.name)).toBeVisible({ timeout: 15000 })
        await loginpage.signout(users.user2.name)
        await expect(loginpage.page).toHaveURL(/login/)
    }
)

test("Invalid email login", async({loginpage}) => 
    {
        await loginpage.login(users.invalidEmailUser.email, users.invalidEmailUser.password)
        await expect(loginpage.loginError).toBeVisible({ timeout: 15000 })
    }
)

test("Invalid password login", async({loginpage}) => 
    {  
        await loginpage.login(users.invalidPasswordUser.email, users.invalidPasswordUser.password)
        await expect(loginpage.loginError).toBeVisible({ timeout: 15000 })
    }
)

