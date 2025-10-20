import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { loginByRedux } from "../../domain/usecases/redux/loginUserRedux";
import { CommonActions } from "@react-navigation/native";
import { SCREEN_HOME } from "../ScreenConst";

export default function LoginScreenRedux ({ navigation }: any) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        await loginByRedux(userName, password);
        setLoading(false);
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: SCREEN_HOME }],
            })
        );
        console.debug(`LoginScreenhandleLogin handleLogin success`);
    };

    return(
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