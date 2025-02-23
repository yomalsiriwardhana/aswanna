import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { MotiView, MotiText } from 'moti';

export default function TabOneScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Wheat Image at the Top */}
      <View></View>
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

  personImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensures cropping effect
    width: 250, // Reduce width to crop more of the right side
    height: 150, // Match the image height
  },
  personImage: {
    width: 150, // Keeps original width (causes right side crop)
    height: 150,
    resizeMode: 'cover',
    marginLeft: 85, // Moves the image left to keep the face centered
  },
  title: {
    fontFamily: 'serif',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10, // Add space below title
  },
  description: {
    fontSize: 12,
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
    backgroundColor: 'rgb(139, 226, 99)',
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
