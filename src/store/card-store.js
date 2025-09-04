import { create } from 'zustand';

const useCardStore = create((set, get) => ({
    cardHolderName: "Jane Appleseed",
    cardNumber: 1234567891230000,
    expiryMonth: 12,
    expiryYear: 20,
    cvv: 123,
    setCardName: (cardHolderName) => set({ cardHolderName }),
    setCardNumber: (cardNumber) => set({ cardNumber }),
    setExpiryMonth: (expiryMonth) => set({ expiryMonth }),
    setExpiryYear: (expiryYear) => set({ expiryYear }),
    setCvv: (cvv) => set({ cvv }),
}));

export default useCardStore;
