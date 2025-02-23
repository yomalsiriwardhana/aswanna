import { StyleSheet, View, Text } from 'react-native';

export default function InfoPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About PaddyApp</Text>
      <Text style={styles.content}>
        PaddyApp is a platform that connects farmers directly with buyers, ensuring fair pricing and transparent trade.
      </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});
