import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    name: string
    token: string
}

const initialState: UserState = { name: '', token: '' };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.token = action.payload.token;
        },
        clearUser: (state) => {
            state.name = '';
            state.token = '';
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

export const userStore = configureStore({
    reducer: { user: userSlice.reducer }
});
export type RootState = ReturnType<typeof userStore.getState>;
export type AppDispatch = typeof userStore.dispatch;