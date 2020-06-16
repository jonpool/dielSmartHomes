import React from 'react';
import{ Feather } from '@expo/vector-icons';
import { View, FlatList,  Image, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import styles from './style';
import logoImg from '../../assets/logo.png';

export default function Login(){
    return(
      <View style={styles.container}>
             <View style={styles.header}>
               <Image source ={logoImg}/>
               <TouchableOpacity>
               <Feather name='arrow-left' size={28} color='#E02041'></Feather>
               </TouchableOpacity>
             </View>
    
             <View key style={styles.incident}>
                  <Text style={styles.incidentProperty,{marginTop: 0}}>Ong</Text>
                  <Text style={styles.incidentValue}></Text>
    
                  <Text style={styles.incidentProperty}>Caso</Text>
              <Text style={styles.incidentValue}></Text>
    
                  <Text style={styles.incidentProperty}>Valor</Text>
              <Text style={styles.incidentValue}></Text>
              </View>
    
              <View style={styles.contactBox}>
                  <Text style={styles.heroTitle}>Salve o Dia!</Text>
                  <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>
    
                  <Text style={styles.heroDesctiption}>Entre em contato:</Text>
              
              <View style={styles.actions}>
              <TouchableOpacity style={styles.action} >
                  <Text style={styles.actionText}>WhatsApp</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action} >
                  <Text style={styles.actionText}>E-Mail</Text>
              </TouchableOpacity>
              </View>
              </View>
              <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
    
      </View>
      
      );
  

}

