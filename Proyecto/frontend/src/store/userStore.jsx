import { create } from 'zustand';

export const useUserStore = create((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),

  userId: '',
  setUserId: (userId) => set({ userId }),

  userName: 'Cristian Pete',
  setUserName: (userName) => set({ userName }),

  userEmail: 'JuanPerez@gmail.com',
  setUserEmail: (userEmail) => set({ userEmail }),

  userPhone: '1234567890',
  setUserPhone: (userPhone) => set({ userPhone }),

  userRole: 'user',
  setUserRole: (userRole) => set({ userRole }),

  clearUserStore: () =>
    set({
      userId: '',
      userName: '',
      userEmail: '',
      userPhone: '',
      userRole: '',
      isAuthenticated: false,
    }),
}));
