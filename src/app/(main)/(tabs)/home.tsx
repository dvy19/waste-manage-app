import { View, Text , TouchableOpacity , StyleSheet , FlatList } from 'react-native'
import React from 'react'

import {router} from 'expo-router'

import MetricCard from '../../../component/userDashCard'

import CentreCard from '../../../component/centerCard'
import { CentreData } from '../../../component/centerCard'
const CENTRES_DATA: CentreData[] = [
  {
    id: '1',
    name: 'GreenEarth Recycling Hub',
    ngoName: 'Clean Earth Foundation',
    address: 'Sector 62, Near Metro Station, Noida, UP',
    imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=600',
    distance: '1.2 km away',
  },
  {
    id: '2',
    name: 'Ecobrick Collection Centre',
    ngoName: 'Zero Waste India',
    address: 'Plot 45, Industrial Area Phase 1, New Delhi',
    imageUrl: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=600',
    distance: '3.5 km away',
  },
];

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

      
        <FlatList
        data={CENTRES_DATA} // Array of data items
        keyExtractor={(item) => item.id} // Unique key for each item
        renderItem={({ item }) => (
          <CentreCard
            centre={item}
            
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      

      <TouchableOpacity style={styles.aiButton}>
        <Text>AI</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create(

    
    
    {

      
     

      aiButton:{

        backgroundColor:"red",
        padding:10,
        borderRadius:"50%",
        position:"absolute",
        bottom:120,
        right:40,




      },

        button:{
          width:"50%",
          marginTop:20,
          marginBottom:20,
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
            padding:10,
            flex:1,
            
        }


}
)

export default home