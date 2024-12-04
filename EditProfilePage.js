import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { API_URL } from './HomePage'

const EditProfilePage = ({ setPage, profile, fontSize, setFontSize }) => {
 
  const [name, setName] = useState(profile.name);
  const [phone, setPhone] = useState(profile.phone);
const [department, setDepartment] = useState(profile.department);
const [streetAddress, setStreetAddress] = useState(profile.streetAddress);
const [cityAddress, setCityAddress] = useState(profile.cityAddress);
const [stateAddress, setStateAddress] = useState (profile.stateAddress);
const [zipAddress, setZipAddress] = useState (profile.zipAddress);
const [countryAddress, setCountryAddress] = useState (profile.countryAddress);


  const handleSave = () => {
    if (!name || !phone || !department || !streetAddress || !cityAddress || !stateAddress || !zipAddress || !countryAddress) {
      alert('All fields are required.');
      return;
    }


    fetch(`http://${API_URL}/saveProfiles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: profile.id, name, phone, department, streetAddress, cityAddress, stateAddress, zipAddress, countryAddress, fontSize }), // Include fontSize in request
    })
      .then(() => {setPage('home'); alert ('Profile updated');}) 
      .catch(() => alert('Failed to save note.'));
  };

  return (
    <View style={styles.container}>

<Text style = {[styles.logo]}>ROI</Text>
      {/* Edit Note Header */}
      <Text style={[styles.text, { fontSize: fontSize + 8 }]}>Edit Profile</Text>


      {/* Title Input Field */}
      <TextInput
        style={[styles.input, { fontSize }]}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      {/* Content Input Field */}
      <TextInput
        style={[styles.input, { fontSize }]}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        multiline // Allow multiline content input
      />

      {/* Content Input Field */}
      <TextInput
        style={[styles.input, { fontSize }]}
        placeholder="Department"
        value={department}
        onChangeText={setDepartment}
        multiline // Allow multiline content input
      />

      {/* Content Input Field */}
      <TextInput
        style={[styles.input, { fontSize }]}
        placeholder="StreetAddress"
        value={streetAddress}
        onChangeText={setStreetAddress}
        multiline // Allow multiline content input
      />

      {/* Content Input Field */}
      <TextInput
        style={[styles.input, { fontSize }]}
        placeholder="CityAddress"
        value={cityAddress}
        onChangeText={setCityAddress}
        multiline // Allow multiline content input
      />

      {/* Content Input Field */}
      <TextInput
        style={[styles.input, { fontSize }]}
        placeholder="StateAddress"
        value={stateAddress}
        onChangeText={setStateAddress}
        multiline // Allow multiline content input
      />

      {/* Content Input Field */}
      <TextInput
        style={[styles.input, { fontSize }]}
        placeholder="ZipAddress"
        value={zipAddress}
        onChangeText={setZipAddress}
        multiline // Allow multiline content input
      />

      {/* Content Input Field */}
      <TextInput
        style={[styles.input, { fontSize }]}
        placeholder="CountryAddress"
        value={countryAddress}
        onChangeText={setCountryAddress}
        multiline // Allow multiline content input
      />



   

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={[styles.buttonText, {fontSize}]}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setPage('home')}>
        <Text style={[styles.buttonText, {fontSize}]}>Cancel</Text>
      </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  text: { marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  logo:  {fontSize: 24, color: 'white', backgroundColor: 'red', width: 50, height: 50 },
  button: {backgroundColor: 'grey', borderRadius: 25, marginBottom: 10, marginTop: 10, width: '100%', height: 50, justifyContent: 
    'center', alignItems: 'center'
  },
  buttonText: {color: 'white', textAlign: 'center'}
});

export default EditProfilePage;
