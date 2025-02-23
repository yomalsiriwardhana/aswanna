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
        <Image source={require('../../assets/images/person.png')} style={styles.personImage} />
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
        A platform enabling farmers to sell their harvest directly, ensuring fair pricing, 
        and promoting efficient, transparent, and profitable agricultural trade.
      </MotiText>

      {/* Start Button */}
      <MotiView 
        from={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }} 
        transition={{ type: 'spring', damping: 8 }}
      >
        <TouchableOpacity style={styles.button} onPress={() => router.push('/start')}>
          <Text style={styles.buttonText}>Start</Text>
        </TouchableOpacity>
      </MotiView>

      {/* Fruits Basket Image at the Bottom */}
      <MotiView 
        from={{ opacity: 0, translateY: 20 }} 
        animate={{ opacity: 1, translateY: 0 }} 
        transition={{ type: 'timing', duration: 800 }}
      >
        <Image source={require('../../assets/images/fruits-basket.png')} style={styles.fruitsImage} />
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  wheatImage: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
  },
  personImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
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
  fruitsImage: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    marginTop: 20,
  },
});
