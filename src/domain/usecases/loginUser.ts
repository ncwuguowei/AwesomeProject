import { UserState, useUserStore } from "../../store/userStore";

export async function login(name:string, password: string) {
    // 模拟接口请求
  await new Promise((res) => setTimeout(res, 1000));
  const user = { name: name, token: name + '_' + password };
  useUserStore.getState().setUser(user.name, user.token);
  return user;
}