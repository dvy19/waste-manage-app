import { View, Text , TouchableOpacity , StyleSheet } from 'react-native'
import React from 'react'

import {router} from 'expo-router'

import MetricCard from '../../../component/userDashCard'

const home = () => {


  return (
    <View style={styles.container}>

        <View style={styles.grid}>
                <MetricCard title="Items added" value={20} />
                <MetricCard title="Points" value={250} />
                <MetricCard title="Reused" value={12} />
                <MetricCard title="NA" value={0} />
        </View>
      <TouchableOpacity onPress={()=>router.push('/addItems')} style={styles.button}>
        <Text>Add Items</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create(

    
    {

        button:{
            marginTop:20,
            backgroundColor:"red",
            padding:8,
            color:'#00ffff'

        },

        grid: {
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap:10
        },

        container:{
            padding:20,
            flex:1,
            alignItems:'center',
            
        }


}
)

export default home