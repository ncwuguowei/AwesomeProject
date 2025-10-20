import React from 'react';
import { Button, Text, View } from 'react-native';
import { useUserStore } from '../store/userStore';
import { SCREEN_HOME, SCREEN_LOGIN } from './ScreenConst';

export default function HomeScreen({ navigation, route }: any) {

    const { name, clearUser } = useUserStore();

    const handleLogout = () => {
        clearUser();
        setTimeout(() => {
            console.debug(`navigation: ${JSON.stringify(navigation)}`);
            console.debug(`route: ${JSON.stringify(route)}`);
            navigation.replace(SCREEN_LOGIN);
        }, 1000);
    }

    return (
        <View style={{padding: 20}}>
            <Text>Welcome {name}</Text>
            <Button
                title='退出'
                onPress={handleLogout} />
        </View>
    );
}