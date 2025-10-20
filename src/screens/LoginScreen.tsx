import React, { useEffect, useState } from "react";
import { useUserStore } from "../store/userStore";
import { SCREEN_HOME } from "./ScreenConst";
import { Button, Text, TextInput, View } from "react-native";
import { login } from "../domain/usecases/loginUser";
import { CommonActions } from "@react-navigation/native";

export default function LoginScreen({ navigation }: any) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        return () => console.log('LoginScreen unmounted');
    }, []);

    const handleLogin = async () => {
        setLoading(true);
        try {
            await login(userName, password);
            setLoading(false);
            console.debug(`LoginScreenhandleLogin handleLogin success`);
            // use navigation.reset to clear stacks
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: SCREEN_HOME }],
                })
            );
            // navigation.navigate(SCREEN_HOME);
            // navigation.replace(SCREEN_HOME);
        } catch(error) {
            // console.error('LoginScreen', `handleLogin error ${JSON.stringify(error)}`);
            console.debug(`LoginScreenhandleLogin error ${JSON.stringify(error)}`);
            setLoading(false);
        }
    }

    return (
        <View style={{ padding: 20 }}>
            <Text>Login</Text>
            <TextInput 
                placeholder="用户名"
                value={userName}
                onChangeText={setUserName} />
            <TextInput
                placeholder="密码"
                value={password}
                onChangeText={setPassword} />
             <Button 
                title="登录"
                onPress={handleLogin}
                disabled={loading} /> 
        </View>
    );
}