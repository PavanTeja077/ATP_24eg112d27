import { create } from 'zustand';

export const useCounterStore = create((set) => ({
  // state
  newCounter: 0,
  //add user state to the store
  user: { name: 'Pavan Teja', email: 'pavan@example.com' ,age: 25 },
  //function to change email 
  changeEmail: () =>
    set( { ...user, email: 'teja134@gmail.com' },
    ),
  incrementCounter: () =>
    set((state) => ({
      newCounter: state.newCounter + 1,
    })),

  decrementCounter: () =>
    set((state) => ({
      newCounter: state.newCounter - 1,
    })),
  changeCounter: () =>
    set({
      newCounter: 500,
    }),
  reset: () =>
    set({
      newCounter: 0,
    }),
}));