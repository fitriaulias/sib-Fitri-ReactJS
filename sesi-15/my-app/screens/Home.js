import { StyleSheet, View, Text, Button } from 'react-native';


export default function HomeScreen({ navigation }) {
    const handleProfile = () => {
        navigation.navigate("Profile", { name: "Hello Profile"})
    }

    const handleText = () => {
        navigation.navigate("Text", { name: "Hello Text"})
    }

    const handleColumn = () => {
        navigation.navigate("Column", { name: "Hello Column"})
    }

    const handleScrollView = () => {
        navigation.navigate("ScrollView", { name: "Hello ScrollView"})
    }

    const handleFlatList = () => {
        navigation.navigate("FlatList", { name: "Hello FlatList"})
    }

    const MarginTop = () => <View style={{marginTop: 15}} />

  return (
      <View style={styles.container}>
        <Text>Welcome page Home</Text>
        <Text>Hello World</Text>
        <MarginTop />
        <View style={styles.rowButton}>
            <View styles={{ flex: 1, marginRight: 5}}>
                <Button title="Profile" onPress={() => handleProfile()} />
            </View>
            <View styles={{ flex: 1}}>
                <Button title="Text" onPress={() => handleText()} />
            </View>
            <View styles={{ flex: 1, marginLeft: 5}}>
                <Button title="Column" onPress={() => handleColumn()} />
            </View>
        </View>

        <View style={styles.rowButton}>
            <View styles={{ flex: 1, marginRight: 5}}>
                <Button title="ScrollView" onPress={() => handleScrollView()} />
            </View>
            
            <View styles={{ flex: 1, marginLeft: 5}}>
                <Button title="FlatList" onPress={() => handleFlatList()} />
            </View>
        </View>
      </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b5838d",
    alignItems: "center",
    justifyContent: "center"
  },
  rowButton: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10
  }
});
