import { setUser, userStore } from "../../../store/redux/userSlice";

export async function loginByRedux(username: string, password: string) {
    console.debug(`fake loginByRedux name ${username}`);
    await new Promise((res) => setTimeout(res, 1000));
    console.debug(`fake loginByRedux name ${username} end`);
    userStore.dispatch(setUser({ name: username, token: username + '_' + password }));
}