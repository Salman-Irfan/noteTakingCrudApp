import React, { useEffect, useState } from "react";
import {Text, View, StyleSheet, AsyncStorage, TextInput, Button} from 'react-native';

const Login = (props) => {
    let {noteTitle} = props.route.params;
    const [password, SetPassword] = useState('');
    const [email, SetEmail] = useState('');
    useEffect(()=>{

    },[])

    return(
        <View>
            <TextInput
                style={{margin: 10}}
                placeholder={'enter email here'}
                multiline={true}
                value={email}
                onChangeText={(t)=>SetEmail(t)}
                
                />
            <TextInput
                style={{margin: 10}}
                placeholder={'enter password here'}
                multiline={true}
                value={password}
                onChangeText={(t)=>SetPassword(t)}
                secureTextEntry={true}

            />
            <Button
                title={'Login'}
                onPress={()=>onLoginPressed()}
            />
            <Button
                title={'Does not have an account'}
                onPress={()=>onSignupPressed()}
            />
        </View>
    )
} 

export default Login;

