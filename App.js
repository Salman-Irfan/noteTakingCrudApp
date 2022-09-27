import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
// import {createStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Intro from './app/screens/intro'
import NoteScreen from './app/screens/NoteScreen';
import NoteDatail from './app/components/NoteDetail';
import NoteProvider from './app/contexts/NoteProvider';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

const Stack = createStackNavigator()

export default function App() {
  useEffect(()=>{
    registerForPushNotification().then(token=>console.log(token)).catch(err=>console.log(Err))
  },[])
  async function registerForPushNotification(){
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status!='granted'){
      const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    }
    if (status!='granted'){
      alert('failed to get the push token')
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    return token;

  }
  const [user, setUser] = useState({});
  const [isAppFirstTimeOpen, SetIsAppFirstTimeOpen] = useState(false);
  const findUser = async () => {
    const result = await AsyncStorage.getItem('user');
    if(result === null) return SetIsAppFirstTimeOpen(true); 
    setUser(JSON.parse(result));
    SetIsAppFirstTimeOpen(false);
  };

  useEffect (() => {
    findUser();
  }, [])

  const renderNoteScreen =(props) => <NoteScreen {...props} user={user} />

  if(isAppFirstTimeOpen) return <Intro onFinish={findUser}/>
  return (<NavigationContainer>
    <NoteProvider>

      <Stack.Navigator screenOptions={{headerTitle: '', headerTransparent: true}}>
        <Stack.Screen component={renderNoteScreen} name="NoteScreen"/>
        <Stack.Screen component={NoteDatail} name="NoteDetail"/>
      </Stack.Navigator>
    </NoteProvider>
  </NavigationContainer>
  ) 
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
