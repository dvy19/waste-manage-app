import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { LoginReq } from '@/models/AuthModels'
import { authService } from '@/service/authService'

const login = () => {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const login=async()=>{

        try{

            const data:LoginReq={email:email , password:password }

            const res=await authService.login(data)

            console.log(res)
        }
        catch(err){
            console.log(`${err}`)
        }
    }

  return (
    <View>
      <Text>login</Text>
    </View>
  )
}

export default login