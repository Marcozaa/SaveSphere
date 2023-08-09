import { create } from "zustand";

const store = (set) => ({
  transactions: [
    {
      id: 1,
      amount: 100,
      category: "Shopping",
      date: "2021-10-10",
    },
  ],
  addTransaction: (date, category, value) =>
    set((store) => ({
      transactions: [...store.transactions, { date, category, value }],
    })),

  setStore: (transactions) => set((store) => ({ transactions })),

  deleteTransaction: (id) => {
    set((store) => ({
      transactions: store.transactions.filter((transaction) => {
        return transaction.id !== id;
      }),
    }));
  },
});

export const useStore = create(store);
