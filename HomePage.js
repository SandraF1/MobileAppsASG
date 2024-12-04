import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const API_URL = '172.19.156.217:3001'; 




const HomePage = ({ setPage, setCurrentProfile, fontSize }) => {
  const [profiles, setProfiles] = useState([]);  
  const [refresh, setRefresh] = useState(false);  


  const fetchProfiles = () => {
    fetch(`http://${API_URL}/getProfiles`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch(() => alert('Failed to fetch notes.'));
  };


  useEffect(() => {
    fetchProfiles();
  }, [refresh]);



  return (
 
   
          <View style={styles.container}>
           
      {/* Main title */}
      <Text style = {[styles.logo]}>ROI</Text>
      <Text style={[styles.title, { fontSize }]}>Profiles</Text>


  
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => {
              setCurrentProfile(item);
              setPage('viewProfile');
            }}
          >
            <View style = {styles.box1}>
            <Text style={[styles.name, { fontSize }]}>
              {item.name}
            </Text>
            </View>


<View style = {styles.box2}>
            <Text style={[styles.phone, { fontSize }]}>
              {item.phone}
            </Text>
            </View>
          </TouchableOpacity>
        )}
       
      />

    

<TouchableOpacity style={styles.button} onPress={() => setPage('addProfile')}>
<Text style={[styles.buttonText, {fontSize}]}>Add Profile</Text>
</TouchableOpacity>

{/* Replace Button with TouchableOpacity for "Settings" */}
<TouchableOpacity style={styles.button} onPress={() => setPage('settings')}>
<Text style={[styles.buttonText, {fontSize}]}>Settings</Text>
</TouchableOpacity>

    </View>
   
  );
};







const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { marginBottom: 20 },
  noteTitle: { marginBottom: 10 },
  logo:  {fontSize: 24, color: 'white', backgroundColor: 'red', width: 50, height: 50 },
  button: {backgroundColor: 'grey', borderRadius: 25, marginBottom: 10, marginTop: 10, width: '100%', height: 50, justifyContent: 
    'center'
  },
  profileTitle: {backgroundColor: 'pink', color: 'black', marginBottom: 10, marginTop: 10, borderRadius: 25, width: 200, height: 40},
  name: {backgroundColor: 'pink', color: 'black', marginTop: 10, width: '100%', height: 40, marginTop: 5, marginLeft: 5},
  phone: {backgroundColor: 'pink', color: 'black', marginBottom: 10, width: '100%', height: 40, marginTop: 5, marginLeft: 5},
  buttonText: {textAlign: 'center', color: 'white'},
  box1: {backgroundColor: 'pink', marginTop: 10},
  box2:{backgroundColor: 'pink', marginBottom: 10}

  }


);



module.exports = { HomePage, API_URL };