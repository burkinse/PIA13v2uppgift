import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';



export default function HomeScreen() {
  
 
  
  
  return (
    <View style={{ flex: 1, backgroundColor: "skyblue"}}>
      
                     
        <View style={{backgroundColor: "red" , height : 120 , justifyContent: "center", alignItems: "center", marginTop :3, marginEnd:3, marginStart: 3, marginBottom: 3 }}>
          <Text style={{ fontSize : 25 }}  >RÖD</Text>
        </View>       
        
      

      <View style={{ height: 135, flexDirection: "row"}}>
        
        <View style={{backgroundColor: "green" , flex : 1, justifyContent: "flex-start", alignItems: "flex-start", marginEnd:3, marginStart: 3, marginBottom: 3,}}>
          <Text style={{ fontSize : 25 }}  >GRÖN</Text>
        </View>
        
        <View style={{backgroundColor: "yellow" , flex : 1, marginEnd:3, marginStart: 3, marginBottom: 3}}></View>   
      
      </View>




      <View style={{ height: 80, flexDirection: "row", marginStart: 3, marginEnd:3}}>
         
        <View style= {{ backgroundColor: "red", flex : 7, marginEnd:3}}></View>
        
        <View style={{backgroundColor: "black" , flex : 3}}></View>  
          
      </View>

      

      <View style= {{ height: 375, backgroundColor: "skyblue" }}></View>

      <View style= {{ backgroundColor: "darkorange" , height : 52, justifyContent: "center", alignItems: "flex-end", marginEnd:3, marginStart: 3}}>
        <Text style={{ fontSize : 25,  }} >ORANGE</Text>
      </View>
        
    </View>


  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});