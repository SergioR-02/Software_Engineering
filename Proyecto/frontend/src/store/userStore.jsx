import { create } from 'zustand'

export const useUserStore = create((set) => ({
  userName: 'Cristian Pete',
  setUserName: (userName) => set({ userName }),
  userEmail: 'JuanPerez@gmail.com',
  setUserEmail: (userEmail) => set({ userEmail }),
  userStudentNumber: '1234567890',
  setUserStudentNumber: (userStudentNumber) => set({ userStudentNumber }),
  clearUserStore: () => set({
    userName: '',
    userEmail: '',
    userStudentNumber: '',
  }),
}))