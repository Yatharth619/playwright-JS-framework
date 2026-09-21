export const users = {

    admin: {
        name: 'John Doe',
        role: 'admin',
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD
    },

    user1: {
        name: 'Jane Doe',
        role: 'user',
        email: process.env.USER1_EMAIL,
        password: process.env.USER1_PASSWORD
    },

    user2: {
        name: 'Jack Howe',
        role: 'user',
        email: process.env.USER2_EMAIL,
        password: process.env.USER2_PASSWORD
    },

    invalidEmailUser: {
        name: 'Invalid User',
        role: 'user',
        email: process.env.INVALID_EMAIL,
        password: process.env.USER1_PASSWORD
    },

    invalidPasswordUser: {
        name: 'Invalid User',
        role: 'user',
        email: process.env.USER2_EMAIL,
        password: process.env.INVALID_PASSWORD
    }

}