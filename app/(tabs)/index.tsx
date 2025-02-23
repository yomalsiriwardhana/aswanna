import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { MotiView, MotiText } from 'moti';

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Wheat Image at the Top */}
      <MotiView
        from={{ opacity: 0, translateY: -20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 600 }}
      >
        <Image source={require('../../assets/images/wheat.png')} style={styles.wheatImage} />
      </MotiView>

      {/* Person Image in the Middle */}
      <MotiView
        from={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 8 }}
      >
        <View style={styles.personImageContainer}>
          <Image source={require('../../assets/images/person.png')} style={styles.personImage} />
        </View>
      </MotiView>

      {/* Title Text */}
      <MotiText
        style={styles.title}
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 500 }}
      >
        The platform to sell your harvest
      </MotiText>

      {/* Description */}
      <MotiText
        style={styles.description}
        from={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: 'timing', duration: 700 }}
      >
        A platform enabling farmers to sell their harvest directly, ensuring fair pricing, and promoting efficient, transparent, and profitable agricultural trade.
      </MotiText>

      {/* Start Button Container */}
      <View style={styles.buttonContainer}>
        <MotiView
          from={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 8 }}
        >
          <TouchableOpacity style={styles.button} onPress={() => router.push('/start')}>
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
        </MotiView>
      </View>

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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center', // Centers the content vertically
    
  },
  wheatImage: {
    width: 250,
    height: 220,
    resizeMode: 'contain',
    transform: [{ rotate: '35deg' }], // Rotates the image
  },
  personImageContainer: {
    justifyContent: 'center', // Centers vertically
    alignItems: 'center', // Centers horizontally
    width: '100%', // Ensures full width for centering
  },
  personImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10, // Adds spacing below the image
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10, // Add space below title
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  buttonContainer: {
    justifyContent: 'center', // Centering button horizontally
    alignItems: 'center', // Centering button vertically
    width: '100%', // Ensures the button container spans the full width
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10, // Smaller height
    paddingHorizontal: 60, // Smaller width
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 20, // Space above the button
  },
  buttonText: {
    fontSize: 18, // Optional: adjust font size for better appearance
    fontWeight: 'bold',
    color: '#fff',
  },

  fruitsImageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '120%',
  },
  fruitsImage: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
    marginTop:-30,
    
  },

});
