import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { MotiView } from 'moti';

export default function FarmerPage() {
  return (
    <View style={styles.container}>
      {/* Top Green Section */}
      <View style={styles.greenSection}>
        <View style={styles.wheatImageContainer}>
          <MotiView
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 600 }}
          >
            <Image source={require('../../assets/images/wheat.png')} style={styles.wheatImage} />
          </MotiView>
        </View>
      </View>

      {/* Bottom Blue Section */}
      <View style={styles.blueSection}>
        {/* Aswanna Container moved here */}
        <View style={styles.aswannaContainer}>
          <MotiView
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 600 }}
          >
            <Text style={styles.aswannaText}>ASWANNA</Text>
          </MotiView>
        </View>

        {/* Profile Section */}
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/images/profile.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>SIRIWARDHANA</Text>
          <Text style={styles.profileRole}>The Farmer</Text>
        </View>

        {/* Buttons with Images and Text */}
        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Image source={require('../../assets/images/price.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Price</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Image source={require('../../assets/images/post.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Post</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonContent}>
            <Image source={require('../../assets/images/chat.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Chat</Text>
          </View>
        </TouchableOpacity>

        {/* Bottom Navigation */}
        <View style={styles.navBar}>
          <TouchableOpacity>
            <Ionicons name="home-outline" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="list-alt" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="user-circle-o" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greenSection: {
    flex: 1,
    backgroundColor: 'rgb(140, 231, 128)',
    alignItems: 'center',
    justifyContent: 'flex-end', // Changed to flex-end to position wheat image at the bottom
  },
  blueSection: {
    flex: 2.5,
    backgroundColor: 'rgb(214, 246, 210)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheatImageContainer: {
    marginBottom: -10, // Add space below the wheat image
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '45%',
  },
  wheatImage: {
    width: 250,
    height: 220,
    resizeMode: 'contain',
    transform: [{ rotate: '35deg' }],
  },
  aswannaContainer: {
    marginTop: -170,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '157%',
  },
  aswannaText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(227, 163, 98)',
    textAlign: 'center',
    transform: [{ rotate: '-90deg' }],
  },
  profileContainer: {
    marginTop: -50,
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: -10,
  },
  profileRole: {
    marginTop: 0,
    fontSize: 13,
    color: '#6c757d',
  },
  button: {
    width: '60%',
    height: 80, // Set a fixed height for the buttons
    backgroundColor: '#fff', // Button background
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    overflow: 'hidden',
  },
  buttonContent: {
    flexDirection: 'row', // Align image and text horizontally
    alignItems: 'center', // Center items vertically
  },
  buttonImage: {
    width: 90, // Adjust the size as needed
    height: 90, // Adjust the size as needed
    resizeMode: 'contain',
    marginRight: 10, // Space between image and text
  },
  buttonText: {
    fontSize: 18, // Font size for the button text
    fontWeight: 'bold',
    color: 'rgb(0, 0, 0)', // Change text color if needed
  },
  navBar: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 10,
    elevation: 5,
  },
});
