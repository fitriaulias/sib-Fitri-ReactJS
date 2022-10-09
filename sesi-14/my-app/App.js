import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{
        uri: 'https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png'
      }} />
      <Text>Mari kita belajar React Native</Text>
      <StatusBar style="auto" />
      <Button
      title="Click Me"
      color="coral" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 100,
    width: 100
  }
});
