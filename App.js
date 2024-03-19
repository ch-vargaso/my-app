import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Auth0Provider} from 'react-native-auth0';
const domain = process.env.AUTH0_DOMAIN
const clientId = process.env.AUTH0_CLIENT_ID
export default function App() {

  return (
    <Auth0Provider domain={domain} clientId={clientId}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your vamos a ver si funciona</Text>
        <StatusBar style="auto" />
      </View>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
