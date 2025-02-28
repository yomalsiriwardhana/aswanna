import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { MotiView, MotiText } from 'moti';

export default function RegisterPage() {
  const router = useRouter();
  
  // State for input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [role, setRole] = useState('farmer'); // Default role

  const handleRegister = () => {
    if (password !== rePassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Registered as ${firstName} ${lastName} (${role})`);
    // Here, you would send data to backend (Supabase, Firebase, etc.)
  };

  return (
    <View style={styles.container}>
        <View  style={styles.wheatImageContainer}>
                      <MotiView
                        from={{ opacity: 0, translateY: -20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{ type: 'timing', duration: 600 }}
                      >
                        <Image source={require('../../assets/images/wheat.png')} style={styles.wheatImage} />
                      </MotiView>
                      </View>
                        
                        <View style={styles.aswannaContainer}>
                            <MotiView
                              from={{ opacity: 0, translateY: -20 }}
                              animate={{ opacity: 1, translateY: 0 }}
                              transition={{ type: 'timing', duration: 600 }}
                            >
                              <Text style={styles.aswannaContainer}>ASWANNA</Text>
                            </MotiView>
                        </View>
      <Text style={styles.title}>Register</Text>

      <TextInput 
        style={styles.input} 
        placeholder="First Name" 
        placeholderTextColor="#aaa" 
        value={firstName} 
        onChangeText={setFirstName} 
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Last Name" 
        placeholderTextColor="#aaa" 
        value={lastName} 
        onChangeText={setLastName} 
      />

      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#aaa" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address" 
      />

      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        placeholderTextColor="#aaa" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />

      <TextInput 
        style={styles.input} 
        placeholder="Re-enter Password" 
        placeholderTextColor="#aaa" 
        value={rePassword} 
        onChangeText={setRePassword} 
        secureTextEntry 
      />

      <Text style={styles.label}>Select Role:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={role}
          onValueChange={(itemValue) => setRole(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Farmer" value="farmer" />
          <Picker.Item label="Intermediary" value="intermediary" />
          <Picker.Item label="Rice Producer" value="rice_producer" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
  },

  wheatImageContainer:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '45%',
  },

  wheatImage: {
    width: 250,
    height: 220,
    resizeMode: 'contain',
    transform: [{ rotate: '35deg' }], // Rotates the image
  },
  aswannaContainer:{
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(227, 163, 98)', // Set text color to brown
    marginTop:110,
    textAlign: 'center',
    transform: [{ rotate: '135deg' }], // Rotates text by 90 degrees
    position: 'absolute', // Allows manual positioning
    right: 18, // Moves text to the right side
  },
  title: {
    marginTop: -150,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: 'rgb(139, 226, 99)',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  link: {
    marginTop: 10,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});
