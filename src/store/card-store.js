import { create } from 'zustand';

const useCardStore = create((set) => ({
    cardHolderName: "Jane Appleseed",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    setCardName: (cardHolderName) => set({ cardHolderName }),
    setCardNumber: (cardNumber) => set({ cardNumber }),
    setExpiryMonth: (expiryMonth) => set({ expiryMonth }),
    setExpiryYear: (expiryYear) => set({ expiryYear }),
    setCvv: (cvv) => set({ cvv }),
}));

export default useCardStore;
