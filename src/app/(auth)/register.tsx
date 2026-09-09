import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { RegisterReq } from '@/models/AuthModels'
import { authService } from '@/service/authService'

const register = () => {

    const[email,setEmail]=useState('')
    const[role,setRole]=useState('role')
    const[password,setPassword]=useState('')
    const[name,setName]=useState('')

    const register=async()=>{

        try{

            const data:RegisterReq={email:email , password:password , name:name, role:role}

            const res=await authService.register(data)

            console.log(res)
        }
        catch(err){
            console.log(`${err}`)
        }
    }

  return (
    <View>
      <Text>register</Text>
    </View>
  )
}

export default register