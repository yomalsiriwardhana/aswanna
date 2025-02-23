import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function StartPage() {
  const router = useRouter();

  return (
    <ImageBackground 
      source={require('../../assets/images/Starts_screen.jpg')} 
      style={styles.background}
    >
      <View style={styles.container}>
        {/* App Title */}
        <Text style={styles.title}>Welcome to PaddyApp</Text>

        {/* Buttons */}
        <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/register')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoButton} onPress={() => router.push('/info')}>
          <Text style={styles.infoButtonText}>Information</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    top: '50%', // Adjust based on image composition
    left: '50%',
    transform: [{ translateX: -150 }, { translateY: -100 }],
    alignItems: 'center',
    width: 300,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.6)', // Adds contrast
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Slight transparency
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  infoButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
