import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useAuth0, Auth0Provider} from 'react-native-auth0';


export default function App() {
  return (
    <Auth0Provider domain={"dev-yvjlhl6uwwla5iyq.eu.auth0.com"} clientId={"j8pVmeTrXDAAlBUsEIPIEyIQKolzZtvY"}>
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
