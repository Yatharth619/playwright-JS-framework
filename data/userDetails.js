export const userDetails = {
    user1: {
        address: {
            houseNumber: process.env.USER1_HOUSE_NUMBER,
            street: process.env.USER1_STREET,
            city: process.env.USER1_CITY,
            state: process.env.USER1_STATE,
            postalCode: process.env.USER1_POSTAL_CODE,
            country: process.env.USER1_COUNTRY
        },
        card: {
            cardNumber: process.env.USER1_CARD_NUMBER,
            cardHolderName: process.env.USER1_CARD_HOLDER_NAME,
            cvv: process.env.USER1_CARD_CVV,
            expiryDate: process.env.USER1_CARD_EXPIRY
        }
    },

    user2: {
        address: {
            houseNumber: process.env.USER2_HOUSE_NUMBER,
            street: process.env.USER2_STREET,
            city: process.env.USER2_CITY,
            state: process.env.USER2_STATE,
            postalCode: process.env.USER2_POSTAL_CODE,
            country: process.env.USER2_COUNTRY
        },
        card: {
            cardNumber: process.env.USER2_CARD_NUMBER,
            cardHolderName: process.env.USER2_CARD_HOLDER_NAME,
            cvv: process.env.USER2_CARD_CVV,
            expiryDate: process.env.USER2_CARD_EXPIRY
        }
    }
};