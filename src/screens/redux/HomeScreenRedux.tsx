import React from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, RootState } from '../../store/redux/userSlice';
import { SCREEN_LOGIN } from '../ScreenConst';

export default function HomeScreen({ navigation, route }: any) {

    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(clearUser());
        setTimeout(() => {
            console.debug(`navigation: ${JSON.stringify(navigation)}`);
            console.debug(`route: ${JSON.stringify(route)}`);
            navigation.replace(SCREEN_LOGIN);
        }, 1000);
    }

    return (
        <View style={{padding: 20}}>
            <Text>Welcome {user.name}</Text>
            <Button
                title='退出'
                onPress={handleLogout} />
        </View>
    );
}