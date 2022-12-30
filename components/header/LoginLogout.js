import React from "react";
import { Button } from "react-native";
import { useAuth0 } from 'react-native-auth0';

export default function LoginLogout(){

  const { authorize, clearSession, user } = useAuth0();

  const login = async () => {
    try{
      await authorize()
    }catch(e){
      console.log(e)
    }
  }

  const logout = async () => {
    try{
      await clearSession()
    }catch(e){
      console.log(e)
    }
  }

  return (
    <>
      {user
        ?
        <Button onPress={logout} title='logout'></Button>
        :
        <Button onPress={login} title='login'></Button>
      }
    </>
    
  )
}