import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';




const ViewProfilePage = ({ setPage, profile, fontSize }) => {
  return (


    
    
    <View style={styles.container}>
      {/* Title dynamically styled with fontSize prop */}

      <Text style = {[styles.logo]}>ROI</Text>
      
      <Text style={[styles.text, { fontSize: fontSize + 8 }]}>
        {profile.title}
      </Text>

      {/* Content dynamically styled with fontSize prop */}
      <Text style={[styles.text, { fontSize: fontSize + 2 }]}>
        {profile.name}
      </Text>


<Text style={[styles.text, { fontSize: fontSize + 2 }]}>
        {profile.phone}
      </Text>

<Text style={[styles.text, { fontSize: fontSize + 2 }]}>
        {profile.department}
      </Text>


<Text style={[styles.text, { fontSize: fontSize + 2 }]}>
        {profile.streetAddress}
      </Text>

<Text style={[styles.text, { fontSize: fontSize + 2 }]}>
        {profile.cityAddress}
      </Text>

<Text style={[styles.text, { fontSize: fontSize + 2 }]}>
        {profile.stateAddress}
      </Text>

<Text style={[styles.text, { fontSize: fontSize + 2 }]}>
        {profile.zipAddress}
      </Text>

<Text style={[styles.text, { fontSize: fontSize + 2 }]}>
        {profile.countryAddress}
      </Text>



      <TouchableOpacity style={styles.button} onPress={() => setPage('editProfile')}>
        <Text style={[styles.buttonText, {fontSize}]}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
        <Text style={[styles.buttonText, {fontSize}]}>Go Back</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  text: { marginBottom: 20 },
  button: {backgroundColor: 'grey', borderRadius: 25, marginBottom: 10, marginTop: 10, width: '100%', height: 50},
  logo:  {fontSize: 24, color: 'white', backgroundColor: 'red', width: 50, height: 50 },
  buttonText: {textAlign: 'center', color: 'white'}
});

export default ViewProfilePage;
