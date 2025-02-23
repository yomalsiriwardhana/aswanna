import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { MotiView, MotiText } from 'moti';

export default function LoginPage() {
  const router = useRouter();

  // State for input fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Hardcoded user credentials
  const users = {
    far: { password: 'f123', role: 'farmer', path: '/farmer' },
    int: { password: 'i123', role: 'intermediary', path: '/intermediary' },
    ric: { password: 'r123', role: 'rice_producer', path: '/rice_producer' },
  };

  const handleLogin = () => {
    const user = users[username as keyof typeof users]; // Ensure TypeScript knows it's a valid key
  
    if (user && user.password === password) {
      Alert.alert('Login Successful', `Welcome ${user.role}`);
      router.push(user.path as any);

    } else {
      Alert.alert('Login Failed', 'Invalid Username or Password');
    }
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
              </MotiView></View>
                
                <View style={styles.aswannaContainer}>
                    <MotiView
                      from={{ opacity: 0, translateY: -20 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ type: 'timing', duration: 600 }}
                    >
                      <Text style={styles.aswannaContainer}>ASWANNA</Text>
                    </MotiView>
                </View>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.link}>Don't have an account? Register</Text>
      </TouchableOpacity>
      <View style={styles. fruitsImageContainer}>
      <MotiView
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: 'timing', duration: 800 }}
            >
              <Image source={require('../../assets/images/fruits-basket.png')} style={styles.fruitsImage} />
            </MotiView>
        </View>
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
    fontFamily: 'serif',
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
  button: {
    backgroundColor:'rgb(139, 226, 99)',
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

  fruitsImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '160%',
  },
  fruitsImage: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
    marginTop:-30,
  },
});
