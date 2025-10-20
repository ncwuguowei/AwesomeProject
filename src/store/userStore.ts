import { create } from "zustand";

export interface UserState {
    name: string
    token: string
    setUser: (name: string, token: string) => void
    clearUser: () => void
}

export const useUserStore = create<UserState>(
    (set) => ({
        name: '',
        token: '',
        setUser: (name, token) => set( {name, token}),
        clearUser: () => set({ name: '', token: '' })
    })
);