import React from 'react';
import { View, FlatList,  Image, Text, TouchableOpacity } from 'react-native';


export default function Login(){
  return(
    <View style={styles.container}>
    <View style={styles.header}>
      <Image source ={logoImg}/>
      <Text stye={styles.headerText}>
Total de <Text style={styles.headerTextBold}>{total} casos</Text>
      </Text>
    </View>

    <Text style={styles.title}>Bem Vindo!</Text>
    <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>
    
   <FlatList 
     data={incidents}
     style={styles.incidentList}
     keyExtractor ={incident => String(incident.id)}
     showsVerticalScrollIndicator={false}
     onEndReached={loadIncidents}
     refreshing={loading}
     onRefresh={loadIncidents}
     onEndReachedThreshold={0.2}
     renderItem ={({item})=>(
     
     <View key style={styles.incident}>
         <Text style={styles.incidentProperty}>Ong</Text>
     <Text style={styles.incidentValue}>{item.name}</Text>

         <Text style={styles.incidentProperty}>Caso</Text>
     <Text style={styles.incidentValue}>{item.title}</Text>

         <Text style={styles.incidentProperty}>Valor</Text>
     <Text style={styles.incidentValue}>
       {Intl.NumberFormat('en-US',{
         style:'currency',
         currency:'USD'                                  
       }).format( item.Value)}</Text>

         <TouchableOpacity 
               style={styles.detailsButton} 
               onPress={()=>navigateToDetails(item)}
         >  
         <Text style={styles.detailsButtonText}>Ver mais deatlhes</Text>
         <Feather name='arrow-right' size={16} color='#E02041'></Feather>
         </TouchableOpacity>
      </View>
    
     )}
   />
   
 </View>
  );

}