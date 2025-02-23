import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { MotiView, MotiText } from 'moti';

export default function StartPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Wheat Image */}
      <MotiView
              from={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: 'timing', duration: 600 }}
            >
              <Image source={require('../../assets/images/wheat.png')} style={styles.wheatImage} />
            </MotiView>
        
            <View style={styles.aswannaContainer}>
            <MotiView
              from={{ opacity: 0, translateY: -20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ type: 'timing', duration: 600 }}
            >
              <Text style={styles.aswannaContainer}>ASWANNA</Text>
            </MotiView>
            </View>

      {/* App Title */}
      <Text style={styles.title}>Welcome to Aswanna!</Text>
      <Text style={styles.description}>Let’s help you sell your harvest direcly</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
              <MotiView
                from={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', damping: 8 }}
              >
                <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => router.push('/register')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => router.push('/info')}>
                    <Text style={styles.buttonText}>Information</Text>
                </TouchableOpacity>
              </MotiView>
              {/* Fruits Basket Image at the Bottom */}
                    <View style={styles.fruitsImageContainer}>
                    <MotiView
                      from={{ opacity: 0, translateY: 20 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ type: 'timing', duration: 800 }}
                    >
                      <Image source={require('../../assets/images/fruits-basket.png')} style={styles.fruitsImage} />
                    </MotiView>
                    </View>
            </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center', // Centers the content vertically
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  wheatImage: {
    marginTop:10,
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    justifyContent: 'center', // Centering button horizontally
    alignItems: 'center', // Centering button vertically
    width: '100%', // Ensures the button container spans the full width
  },
  button: {
    backgroundColor: 'rgb(139, 226, 99)',
    paddingVertical: 10, // Smaller height
    paddingHorizontal: 60, // Smaller width
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 20, // Space above the button
    alignItems: 'center', // Center text horizontally within the button
  },
  buttonText: {
    fontSize: 18, // Optional: adjust font size for better appearance
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center', // Center text horizontally
  },
  fruitsImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '148%',
  },
  fruitsImage: {
    width: 195,
    height: 195,
    resizeMode: 'contain',
    marginTop:30,
    
  },


});
